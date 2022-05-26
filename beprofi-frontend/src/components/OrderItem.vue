<template>
  <div id="orderItem">
        <div class="card">
                       <h5>{{ $t('main.ordercall.name') }}</h5>
                       <input v-bind:placeholder="$t('main.ordercall.fullname')" v-model="name">
                       <input placeholder="+7 7-- --- -- --" v-model="phone">
                       <input placeholder="Email" v-model="email">
                       <input placeholder="Промо-код" v-model="promo">
                       <button @click="orderCall()" class="animate__animated animate__headShake animate__delay-3s animate__repeat-2">{{ $t('main.ordercall.callme') }}</button>
                   </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
export default{
  name: 'OrderItem',
  components: {
  },
  props: {
    product
  },
  data() {
    return{
        name: '',
        phone: '',
        email: '',
        promo: ''
  }
  },
  methods: {
    orderCall(){
      if(this.$route.path=='/courses'){
        axios.post('http://localhost:8086/api/v1/order/courses', {
            name: this.name,
            phone: this.phone, 
            product_id: this.course.id,
            email: this.email,
            code: this.promo
            }).then(response => {
            console.log(response.data)
                    }).catch(error => {
                        console.log(error)
                    })
      }
      else if(this.$route.path=='/professions'){
          axios.post('http://localhost:8086/api/v1/order/professions', {
            name: this.name,
            phone: this.phone, 
            product_id: this.profession.id,
            email: this.email,
            code: this.promo
            }).then(response => {
            console.log(response.data)
                    }).catch(error => {
                        console.log(error)
                    })
      }
      else{
        axios.post('http://localhost:8086/api/v1/order/services', {
            name: this.name,
            phone: this.phone, 
            product_id: this.service.id,
            email: this.email,
            code: this.promo
            }).then(response => {
            console.log(response.data)
                    }).catch(error => {
                        console.log(error)
                    })
      }
    }
    },
    mounted(){
      console.log('l')
      console.log('jj',this.$props)
    }
  }
</script>


<style  scoped src='../assets/styles/order-item.css'>

</style>