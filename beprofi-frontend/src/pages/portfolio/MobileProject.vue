<template>
  <div id="project-info">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            
            <img id="mob" :src="$t('mobile['+index+'].image')" data-aos="zoom-in-up" data-aos-duration="1000" >
          </div>
          <div class="col-md-5" data-aos="fade-left" data-aos-duration="1000">
            <h1>{{ $t('mobile['+index+'].name') }}</h1> 
            <span class="badge badge-danger">{{ $t('mobile['+index+'].framework') }}</span>
            <h5>{{ $t('mobile['+index+'].description') }}</h5>
            <div class="row" style="margin-top:10%">
                <a :href="$t('mobile['+index+'].link.playMarket')" style="margin-right:20px">
                    <img v-if="$t('mobile['+index+'].link.playMarket') !== '' " src="../../assets/static/icons/portfolio/google-play.svg" height="50px">
                </a>
                <a :href="$t('mobile['+index+'].link.appStore')">
                    <img v-if="$t('mobile['+index+'].link.appStore') !== '' " src="../../assets/static/icons/portfolio/app-store.svg" height="50px">
                </a>
            </div>
          </div>
      </div>
  </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
export default{
  name: 'MobileProject',
  components: {
  },
  data(){
      return{
          index: this.$route.params.index
      }
  },
  mounted(){
      window.scrollTo(0, 0);
  }
}
</script>


<style  scoped src='../../assets/styles/project-info.css'>

</style>