<template>
<div class="aboutCourse">
    <b-alert id="alert-error"
            v-model="showSuccessAlert"
            variant="success"
            dismissible
            fade
            @dismissed="showSuccessAlert=false"
            class="error-alert-message">
      {{ $t('courses.alertSuccessOrder') }}
    </b-alert>
  <div id="course">
       <div class="courseContent">
           <h1>{{service.name}}</h1>
           <img :src="require('../../assets'+service.imageUrl)">
       </div>
       <div class="courseContent2">
        <div class="container">
            <div class="row" >
                <div class="col-md-8">
            <h3>{{  $t('courses.aboutservice') }}</h3>
            <p>{{service.overview}}</p>
            <br>
            <hr>
            <h3 style="margin-top:5%">{{ service.syllabus_title }}</h3>
            <div class="row" data-aos="fade-up"
     data-aos-duration="1000" 
         data-aos-delay="200" v-for="(syllabus,index) in service.syllabus_list" :key="index">
                <div class="col-md-1" id="number">
                    <h3>{{ index+1 }}</h3>
                </div>
                <div class="col-md-11">
                    <div class="card-content">
                <h5>{{ syllabus.title }}</h5>
                <p>{{ syllabus.syllabuses[0] }}</p>
                </div>
                <div class="line"/>
                </div>
            </div>
            
                </div>
                <div class="col-md-4">
                    <b-alert id="alert-error"
                                v-model="showDangerAlert"
                                variant="danger"
                                dismissible
                                fade
                                @dismissed="showDangerAlert=false"
                                class="error-alert-message">
                        Данные введены неверно!
                        </b-alert>
                    <div class="sticky-top">
                        <div class="card" data-aos="fade-left"
         data-aos-delay="100"
     data-aos-duration="1000">
                       <h5>{{ $t('courses.registerService') }}</h5>
                       <input :placeholder="$t('courses.fullname')" v-model="name">
                       <input :placeholder="$t('courses.phone')" v-model="phone">
                       <input placeholder="Email" v-model="email">
                       <input :placeholder="$t('courses.promo')" v-model="promo">
                       <button class="animate__animated animate__swing animate__delay-3s animate__repeat-2" @click="checkOrder()">{{ $t('courses.callme') }}</button>
                   </div>
                    </div>
                </div>
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
  name: 'AboutService',
  components: {
  },
  data(){
      return{
          id: this.$route.params.id,
          currency: localStorage.getItem('currency'),
          service: {},
          email: '',
          promo: '',
          phone: '',
          name: '',
          showDangerAlert: false,
          showSuccessAlert: false
      }      
  },
  methods: {
    getService(){
          axios.get(`http://localhost:8086/api/v1/services/products/${this.id}`, {
            params: {
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.service = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

     checkOrder(){
        if(this.name.length == 0 || this.phone.length < 11 || this.email.length == 0){
          this.showDangerAlert = true;
        }else{
          this.orderService();
        }
      },

    orderService(){
        axios.post('http://localhost:8086/api/v1/order/services', {
            name: this.name,
            phone: this.phone, 
            product_id: this.service.id,
            email: this.email,
            code: this.promo
            }).then(response => {
            console.log(response.data)
            this.name = '';
            this.phone = '';
            this.email = '';
            this.promo = '';
            this.showSuccessAlert = true;
            
                    }).catch(error => {
                        console.log(error)
                    })
    }
  },
  mounted(){
      window.scrollTo(0, 0);
      this.getService();
  }
}
</script>


<style  scoped src='../../assets/styles/about-course.css'>

</style>