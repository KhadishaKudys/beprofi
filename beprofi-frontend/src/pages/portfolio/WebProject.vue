<template>
  <div id="project-info">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <img :src="$t('web['+index+'].image')" data-aos="zoom-in-up" data-aos-duration="1000">
          </div>
          <div class="col-md-5" data-aos="fade-left" data-aos-duration="1000">
            <h1>{{ $t('web['+index+'].name') }}</h1>
            <span class="badge badge-danger">{{ $t('web['+index+'].framework') }}</span>
            <h5>{{ $t('web['+index+'].description') }}</h5>
            <a :href="$t('web['+index+'].link')"><button class="animate__animated animate__rubberBand animate__delay-1s animate__repeat-2">{{ $t('portfolio.open-web') }}</button></a>
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