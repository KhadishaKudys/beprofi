<template>
  <div id="portfolio">
      <div class="container">
       <div class="introContent" data-aos="fade-up" data-aos-duration="1200">
           <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" data-aos="zoom-in-up" data-aos-duration="1000">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">{{ $t('portfolio.web') }}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">{{ $t('portfolio.mobile') }}</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div class="row">
          <div class="card" v-for="(item, index) in $t('web')" :key="index">
              <img :src="item.image">
              <span class="badge badge-light">{{ item.framework }}</span>
              <router-link :to="`/${$i18n.locale}/portfolio/web/`+index"><button>{{ $t('portfolio.more') }}</button></router-link>
          </div>
      </div>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
       <div class="row">
          <div class="card" v-for="(item, index) in $t('mobile')" :key="index">
              <img :src="item.image">
              <span class="badge badge-light">{{ item.framework }}</span>
              <router-link :to="`/${$i18n.locale}/portfolio/mobile/`+index"><button>{{ $t('portfolio.more') }}</button></router-link>
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
export default{
  name: 'Porfolio',
  components: {
  },
  data(){
      return{
      }
  },
  mounted(){
    window.scrollTo(0, 0);
  }
}
</script>


<style  scoped src='../../assets/styles/portfolio.css'>

</style>