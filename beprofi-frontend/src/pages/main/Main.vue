<template>
  <div id="main">
    <Header/>
       <IntroPage v-if="this.$route.path===`/${$i18n.locale}/`"/>
       <router-view/>
       <Footer/>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
import IntroPage from "./IntroPage.vue"
import Information from "./Information.vue"
import Footer from "../../components/Footer.vue"
import Header from "../../components/Header.vue"

export default{
  name: 'Main',
  components: {
    IntroPage,
    Information,
    Footer,
    Header
  },
  mounted(){
      window.scrollTo(0, 0);
  }
}
</script>


<style  scoped src='../../assets/styles/main.css'>

</style>