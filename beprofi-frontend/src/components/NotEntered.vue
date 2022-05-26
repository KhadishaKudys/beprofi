<template>
  <div id="error">
      <Header/>
        <div class="row">
          <div class="col-md-12">
              <h1>Ошибка!</h1>
      <h5>Вход в аккаунт не был выполнен!</h5>
      <router-link to="/boss/sign-in">
          <button>Войти</button>
      </router-link>
        </div>
        </div>

    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
import Header from "./Header.vue"

export default{
  name: 'Error',
  components: {
      Header
  },
  data() {
    return{
  }
  },
  methods: {
    },
    mounted(){
    }
  }
</script>


<style  scoped src='../assets/styles/error.css'>

</style>