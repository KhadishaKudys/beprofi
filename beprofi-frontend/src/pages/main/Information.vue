<template>
<div class="info">

    <h1 data-aos="fade-up"
     data-aos-duration="1000">{{ $t('main.aknowledged') }}</h1>
        <!-- <Carousel /> -->
<div data-aos="fade-up" data-aos-duration="1000" class="carousel">
    
    
 <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">{{ $t('menu.services.name') }}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">{{ $t('menu.courses.name') }}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">{{ $t('menu.professions.name') }}</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

        <carousel>
        <slide v-for="service in $t('menu.services.list')" :key="service.id" class="slides">
          <router-link :to="`/${$i18n.locale}/services/`+service.id">
              <div class='demo-content'>
                      <div class="slide-img">
                      <img alt="1" :src="service.image" />
                    </div>
                    <div class="detail-box">
                      <div class="type">
                        <a>{{ service.name }}</a>
                      </div>
                    </div>
                    </div>
              </router-link>
        </slide>
       
      </carousel>
  </div>
   <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
     <carousel>
        <slide v-for="course in $t('menu.courses.services')" :key="course.id" class="slides">
          <router-link :to="`/${$i18n.locale}/courses/`+course.id">
              <div class='demo-content'>
                <div class="slide-img">
                <img alt="2" :src="course.image" />
              </div>
              <div class="detail-box">
                <div class="type">
                  <a href="#">{{ course.title }}</a>
                </div>
              </div>
              </div>
              </router-link>
        </slide>
       
      </carousel>
   </div>

   <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

      <carousel>
        <slide v-for="profession in $t('menu.professions.services')" :key="profession.id" class="slides">
          <router-link :to="`/${$i18n.locale}/professions/`+profession.id">
        <div class='demo-content'>
                <div class="slide-img">
                <img alt="1" :src="profession.image" />
              </div>
              <div class="detail-box">
                <div class="type">
                  <a href="#">{{ profession.title }}</a>
                </div>
              </div>
              </div>
        </router-link>
        </slide>
       
      </carousel>

  </div>
   </div>
</div>
<div class="container">
        <div id="distance"/>
        <Slideshow/>
  </div>
    <div class="portfolio" data-aos="fade-right"
     data-aos-duration="300"
     data-aos-easing="ease-in-sine">
      <div class="row">
        <div class="col-md-7" data-aos="fade-right"
     data-aos-duration="800"
     data-aos-delay="100"
     data-aos-easing="ease-in-sine">
      <img class="hvr-forward" src="https://lh5.googleusercontent.com/0jnPjjEaiMbKFNd4BbwtetXguT8_kjwgtqbfm7x_0YUxMpyWyGbfSLdTVohTeiyjt526RHV4ZRHeRQjMb-qmi4koAJgaWwCCjFmnFoPiMrAiKJymEVZAyVTWWqpPbx8nYXUqgtc">
        </div>
        <div class="col-md-5">
         <h1 class="large">{{ $t('portfolio.name') }}</h1>
         <div data-aos="fade-left"
         data-aos-delay="100"
     data-aos-duration="1000">
          <h5>{{ $t('portfolio.info') }}</h5>
          <router-link :to="`/${$i18n.locale}/portfolio`">
          <button class="button hvr-bounce-to-right">{{ $t('portfolio.watch-projects') }}</button>
          </router-link>
        </div>
        </div>
      </div>
      <div class="row">

        <div class="col-md-5" style="text-align:right; margin-top:7%">
         <div 
     data-aos="fade-right"
     data-aos-duration="1000"
     data-aos-delay="100"
     data-aos-easing="ease-in-sine">
          <h5>{{ $t('portfolio.info-1') }}</h5>
          <router-link :to="`/${$i18n.locale}/portfolio`">
          <button class="button hvr-bounce-to-right">{{ $t('portfolio.open-portfolio') }}</button>
          </router-link>
        </div>
        </div>
        <div class="col-md-7" data-aos="fade-left" data-aos-delay="100"
     data-aos-duration="800" style="align-items:right">
      <img class="mob hvr-backward" src="../../assets/static/main-page/portfolio/iphone-app.png">
        </div>
        
      </div>
    </div>
  
</div>
</template>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
import Slideshow from "../../components/Slideshow.vue"
// import Carousel from "../../components/Carousel.vue"
import CourseRegister from "../../components/CourseRegister.vue"
import { Carousel, Slide } from 'vue-carousel';
export default{
  name: 'Information',
  components: {
    Slideshow,
    Carousel,
    Slide,
    CourseRegister
  },
  mounted(){
    
  },
  data() {
    return{
      showModal: false
  }
  }
}
</script>


<style  scoped src='../../assets/styles/information.css'>

</style>