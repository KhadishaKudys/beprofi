<template>
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

    <div class='demo-container'>
      <div class='carousel'>
        <input checked='checked' class='carousel__activator' id='carousel-slide-activator-1' name='carousel' type='radio'>
        <input class='carousel__activator' id='carousel-slide-activator-2' name='carousel' type='radio'>
        <input class='carousel__activator' id='carousel-slide-activator-3' name='carousel' type='radio'>
        <div class='carousel__controls'>
          <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-2'>
            ⇝
          </label>
        </div>
        <div class='carousel__controls'>
          <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-1'>
            ⇜
          </label>
          <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-3'>
            ⇝
          </label>
        </div>
        <div class='carousel__controls'>
          <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-2'>
            ⇜
          </label>
        </div>
        <div class='carousel__screen'>
          <div class='carousel__track'>
            <carousel>
        <slide v-for="service in $t('menu.services.list')" :key="service.id" class="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3"> 
          <router-link :to="`/${$i18n.locale}/services/`+service.id">
              <div class='demo-content'>
                      <div class="slide-img">
                      <img alt="1" :src="service.image" />
                    </div>
                    <div class="detail-box">
                      <div class="type">
                        <a href="#">{{ service.name }}</a>
                      </div>
                    </div>
                    </div>
              </router-link>
        </slide>
       
      </carousel>
            <div class="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3" v-for="service in $t('menu.services.list')" :key="service.id">
              <router-link :to="`/${$i18n.locale}/services/`+service.id">
              <div class='demo-content'>
                      <div class="slide-img">
                      <img alt="1" :src="service.image" />
                    </div>
                    <div class="detail-box">
                      <div class="type">
                        <a href="#">{{ service.name }}</a>
                      </div>
                    </div>
                    </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

    <div class="row">
      <div class="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3" v-for="course in $t('menu.courses.services')" :key="course.id">
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
      </div>
      </div>

  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

   <div class="row">
      <div class="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3" v-for="profession in $t('menu.professions.services')" :key="profession.id">
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
      </div>
      </div>

  </div>
</div>


  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "Carousel",
  components: {
    Carousel, 
    Slide
  },
  data() {
    return {
    };
  },
  method: {
  },
  mounted() {
  },
};
</script>

<style scoped src="../assets/styles/carousel.css"></style>
