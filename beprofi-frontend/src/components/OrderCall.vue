<template>
  <div id="add-post">
    <transition name="modal" id="orderItems">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  <h5>{{ $t('courses.register') }}</h5>
                </slot>
                
              </div> 

              <div class="modal-body">
                <slot name="body">
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
      {{ $t('courses.alertSuccessOrder') }}
    </b-alert>
                       <input type="text" :placeholder="$t('courses.fullname')" v-model="name" required/>
                       <input type="tel" :placeholder="$t('courses.phone')" pattern="[789][0-9]{9}" v-model="phone" required/>
                       <input type="email" placeholder="Email" v-model="email" required/>
                       <input type="text" :placeholder="$t('courses.promo')" v-model="promo"/>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                    <button class="modal-default-button-1" @click="$emit('close')">
                    {{$t('modal.cancel')}}
                  </button>
                  <button class="modal-default-button" @click="checkOrderCall() ,$emit('close')">
                    {{$t('courses.send')}}
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>        
  </div>
</template>

<script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            name: '',
            showSuccessAlert: false, 
            showDangerAlert: false,
            phone: '',
            email: '',
            promo: '',
            productId: JSON.parse(localStorage.getItem('productId'))
        }
    },
    methods: {

      checkOrderCall(){
        if(this.name.length == 0 || this.phone.length < 11 || this.email.length == 0){
          this.showDangerAlert = true;
        }else{
          this.orderCall();
        }
      },

      orderCall(){
      if(this.$route.path== `/${$i18n.locale}/courses`){
        axios.post('http://localhost:8086/api/v1/order/courses', {
            name: this.name,
            phone: this.phone, 
            product_id: this.productId,
            email: this.email,
            code: this.promo
            }).then(response => {
            console.log(response.data)
            this.showSucessAlert =true
                    }).catch(error => {
                        console.log(error)
                    })
      }
      else if(this.$route.path== `/${$i18n.locale}/professions`){
          axios.post('http://localhost:8086/api/v1/order/professions', {
            name: this.name,
            phone: this.phone, 
            product_id: this.productId,
            email: this.email,
            code: this.promo
            }).then(response => {
            console.log(response.data)
            this.showSuccessAlert = true;
                    }).catch(error => {
                        console.log(error)
                    })
      }
      else{
        axios.post('http://localhost:8086/api/v1/order/services', {
            name: this.name,
            phone: this.phone, 
            product_id: this.productId,
            email: this.email,
            code: this.promo
            }).then(response => {
            console.log(response.data)
            this.showSuccessAlert = true;
                    }).catch(error => {
                        console.log(error)
                    })
      }
    }
    },
}
</script>



<style scoped src='../assets/styles/ordercall.css'>

</style>