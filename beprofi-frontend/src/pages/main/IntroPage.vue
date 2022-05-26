<template>
  <div id="intro">
    <b-alert id="alert-error"
            v-model="showDangerAlert"
            variant="danger"
            dismissible
            fade
            @dismissed="showDangerAlert=false"
            class="error-alert-message">
      Данные введены неверно!
    </b-alert>
    <b-alert id="alert-error"
            v-model="showSuccessAlert"
            variant="success"
            dismissible
            fade
            @dismissed="showSuccessAlert=false"
            class="error-alert-message">
      Мы свяжемся с вами в скором времени!
    </b-alert>
      <div class="container">
       <div class="introContent">
           <div class="row">
                <div class="col-md-10">
                    <div class="card">
                       <h5>{{ $t('main.ordercall.name') }}</h5>
                       <input v-bind:placeholder="$t('main.ordercall.fullname')" v-model="name">
                       <input placeholder="Номер телефона" v-model="phone">
                       <button @click="checkOrderCall()" class="animate__animated animate__headShake animate__delay-3s animate__repeat-2">{{ $t('main.ordercall.callme') }}</button>
                   </div>
                </div>
                <div class="col-md-5">
                   <h1 class="animate__animated animate__pulse animate__delay-1s">BE</h1>
                    <h1 class="animate__animated animate__pulse animate__delay-2s">PROFI</h1>
                </div>
                <div class="col-md-1">
                   <img src="../../assets/static/backgrounds/back2.jpg"/>
                </div>

           </div>
       </div>
      </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
import axios from 'axios'
export default{
  name: 'IntroPage',
  data(){
    return{
      name: '',
      phone: '',
      showSuccessAlert: false, 
      showDangerAlert: false,
    }
  },
  components: {
  },
  methods: {

    checkOrderCall(){
      if(this.name.length == 0 || this.phone.length < 11 ){
        this.showDangerAlert = true;
      }else{
        this.orderCall();
      }
    },

    orderCall(){
            axios.post('http://localhost:8086/api/v1/order/call', 
            
            {
              name: this.name, 
              phone: this.phone
              }
            ).then(response => {
                console.log(response.data)
                 this.showSuccessAlert = true;
                }).catch(error => {
                    console.log(error)
                    this.showDangerAlert = true;
                })
              this.phone = '';
              this.name = '';
            },
  },
  mounted(){
  }
}
</script>


<style  scoped src='../../assets/styles/main.css'>

</style>