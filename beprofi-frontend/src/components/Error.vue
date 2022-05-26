<template>
  <div id="error">
      <Header/>
        <div class="row">
          <div class="col-md-12">
      <h1>404</h1>
      <router-link to="/">
          <button>Вернуться на главную страницу</button>
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