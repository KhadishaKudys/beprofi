<template>
  <div id="course">
    <div id="filter-vertical">
    <nav class="main-menu">
        <button id="close-button" style="position:relative; margin-left: 90%">
                <img alt="menu" src="../../assets/static/icons/categories/cancel.png" height="40px" width="40px">
          </button>
          <div style="text-align:center; width: 100%; margin-bottom: 50px; color: #FF3D33">
        <h5>Фильтр</h5>
          </div>
        <div class="col-md-3" style="margin-top:5%">
            <h6>{{ $t('modal.price') }}</h6>        
      <div class="row">     
        <div class="col-md-3">
    <label for="min">{{ $t('courses.from') }}: </label>
        </div>
        <div class="col-md-7">
      <input type="text" id="min" v-model="minPrice">
      </div>
      <div class="col-md-1">
      <span class="badge badge-danger">{{symbol}}</span>
      </div>
      </div>
      <div class="row">   
        <div class="col-md-3">
      <label for="max">{{ $t('courses.to') }}: </label>
        </div>
        <div class="col-md-7">
      <input type="text" id="max" v-model="maxPrice">
      </div>
      <div class="col-md-1">
      <span class="badge badge-danger">{{symbol}}</span>
      </div>
      </div>
      <h6>{{ $t('main.language') }}</h6>
              <form id="input-form">
              <div class="row" v-for="item in $t('main.languages')" v-bind:key="item.id">
                <div class="col-md-2">
            <input type="checkbox"  :id="item.id" :value="item.id">
                </div>
                <div class="col-md-10">
            <label class="form-check-label" :for="item.id">{{item.title}}</label>
                </div>
        </div>
      </form>
              <h6>{{ $t('modal.level') }}</h6>
              <form id="level-form">
              <div class="row" v-for="item in $t('modal.levels')" v-bind:key="item.id">
                <div class="col-md-2">
                  <input type="checkbox" :id="item.id" :value="item.id">
                </div>
                <div class="col-md-10">
                  <label class="form-check-label" :for="item.id">{{item.title}}</label>
                </div>
        </div>
              </form>
          </div>
    <br>
    
    <button v-if="filtered==false" class="filter" @click="getCoursesFiltered()">{{ $t('courses.apply') }}</button>
    <button v-else class="filter" @click="discardFilter()">Сброс</button>
    </nav>
  </div>
    <!-- <b-alert id="alert-error"
            v-model="showDangerAlert"
            variant="danger"
            dismissible
            fade
            @dismissed="showDangerAlert=false"
            class="error-alert-message">
      {{ $t('courses.alertErrorOrder') }}
    </b-alert> -->
    <div class="container">
      <h1 v-if="this.$route.path == `/${$i18n.locale}/courses`">{{ $t('menu.courses.name') }}</h1>
        <h1 v-else>{{$t(`menu.courses.${this.service}.name`)}}</h1>
        <div class="banner">
              <img src="../../assets/static/main-page/banners/ban2.png"/>
            </div>
    
      <div v-if="this.coursesRecommended.length>0">
        <h4>{{ $t('courses.recommended') }}</h4>
          <carousel :responsive="responsive" id="caros">
            <div v-for="course in coursesRecommended" :key="course.id">
              <a :href="`/${$i18n.locale}/about-course/`+course.id">
              <div class='demo-content'>
                <div class="slide-img">
                <img :src="require('../../assets'+course.image_url)"/>
              </div>
              <div class="detail-box">
                <div class="type">
                  <a>{{ course.name }}</a><br>
                  <a>{{ course.price_with_discount }} {{symbol}}</a>
                </div>
              </div>
              </div>
              </a>
            </div>
      </carousel>
          
      </div>
<div v-if="this.$route.path == `/${$i18n.locale}/courses`">
    <h4 >{{ $t('courses.subcategory') }}</h4>
    <div class="row">
    <div class="card-categories" v-for="category in $t('menu.courses.services')" :key="category.id" @click="open(category.id)">
        <h6>{{ category.title }}</h6>
    </div>
    </div>
</div>
<h4>{{ $t('courses.allcourses') }}</h4>
      <div class="row">
        <button id="menu-button">
          <img src="../../assets/static/icons/categories/filter.svg" height="20px">
        </button>


          <div class="col-md-3" style="margin-top:5%" id="filtering">
            <h6>{{ $t('modal.price') }}</h6>        
      <div class="row">     
        <div class="col-md-3">
    <label for="min">{{ $t('courses.from') }}: </label>
        </div>
        <div class="col-md-7">
      <input type="text" id="min" v-model="minPrice">
      </div>
      <div class="col-md-1">
      <span class="badge badge-danger">{{symbol}}</span>
      </div>
      </div>
      <div class="row">   
        <div class="col-md-3">
      <label for="max">{{ $t('courses.to') }}: </label>
        </div>
        <div class="col-md-7">
      <input type="text" id="max" v-model="maxPrice">
      </div>
      <div class="col-md-1">
      <span class="badge badge-danger">{{symbol}}</span>
      </div>
      </div>
      <h6>{{ $t('main.language') }}</h6>
              <form id="input-form">
              <div class="row" v-for="item in $t('main.languages')" v-bind:key="item.id">
                <div class="col-md-2">
            <input type="checkbox"  :id="item.id" :value="item.id">
                </div>
                <div class="col-md-10">
            <label class="form-check-label" :for="item.id">{{item.title}}</label>
                </div>
        </div>
      </form>
              <h6>{{ $t('modal.level') }}</h6>
              <form id="level-form">
              <div class="row" v-for="item in $t('modal.levels')" v-bind:key="item.id">
                <div class="col-md-2">
                  <input type="checkbox" :id="item.id" :value="item.id">
                </div>
                <div class="col-md-10">
                  <label class="form-check-label" :for="item.id">{{item.title}}</label>
                </div>
        </div>
              </form>
          
    <br>
    <button v-if="filtered==false" class="filter" @click="getCoursesFiltered()">{{ $t('courses.apply') }}</button>
    <button v-else class="filter" @click="discardFilter()">Сброс</button>
          </div>
          <div class="col-md-9">
            <div v-if="filtered">
            <span  class="badge badge-danger">{{minPrice}} - {{maxPrice}} {{symbol}}</span>
            <span  class="badge badge-danger" v-for="lang in checkedLangs" :key="lang">{{lang}}</span>
            <span  class="badge badge-danger" v-for="lvl in checkedLvls" :key="lvl">{{lvl}}</span>
            </div>
            <div v-if="this.courses.length>0">
              
              <div class="recommended">
          <div class="row" id="all" style="align-items:cente; justify-content:centerr">
          <div class="card" v-for="course in courses.slice((currentPage-1)*perPage, (currentPage-1)*perPage+perPage)" :key="course.id">
            <div class="card-image">
            <img class="img-fluid" alt="Responsive image"  :src="require('../../assets'+course.image_url)">
            </div>
            
              <div id="card-title">
            <h5>{{course.name}}</h5>
            <img src="../../assets/static/icons/categories/beginner.svg" v-if="course.level === 'beginner'" height="15px">
            <img src="../../assets/static/icons/categories/middle.svg" v-if="course.level === 'middle'" height="15px">
            <img src="../../assets/static/icons/categories/advanced.svg" v-if="course.level == 'advanced'" height="15px">
            </div>
          <div id="card-info">
            <p class="overview">{{course.overview}}</p>
            <div v-if="course.price != course.price_with_discount">
              <h6 id="price">{{course.price}} {{symbol}}</h6>
              <p id="discount">-{{course.discount}}%</p>
              <h6 id="priceWithDiscount">{{course.price_with_discount}} {{symbol}}</h6>
            </div>
            <div v-else>
              <h6>{{course.price}} {{symbol}}</h6>
            </div>
            </div>
            <button class="register" @click="orderItem(course.id)">
              {{ $t('courses.register') }}
            </button>
            <OrderCall v-if="showModal" @close="showModal=false"/>
            <router-link :to="`/${$i18n.locale}/about-course/`+course.id">
            <button class="more">
              {{ $t('courses.more') }}
            </button>
            </router-link>
          </div>
          </div>
        </div>
        <b-pagination
          id="my-page"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="center"
            aria-controls="card"
          ></b-pagination>
          </div>
          
          <div v-else class="empty">
        <img src="../../assets/static/backgrounds/additional/empty-state.png"/> 
        <h4>{{ $t('courses.emptyTitle') }}</h4>
        <h5>{{ $t('courses.emptyExplained') }}</h5>
        <p>{{ $t('courses.emptyMotivation') }}</p>
        <br>
      </div>
          </div>
      </div>


    
    </div>

  </div>
</template>


<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>

import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'
import axios from 'axios'
import OrderCall from "../../components/OrderCall.vue"
import i18n from '../../i18n.js'
import Loading from '../../components/Loading.vue'
import carousel from 'vue-owl-carousel'

export default{
  name: 'Course',
  components: {
    OrderCall,
    VueRangeSlider,
    Loading,
    carousel
  },
  data() {
    return{
      responsive: { 0: { items: 1, nav: false }, 600: { items: 4, nav: true } },
       currentPage: 1,
      perPage: 18,
      isLoading: true, 
      filtered: false,
      languages: [
      {id: 'kz', text: 'Казахский'},
      {id: 'ru', text: 'Русский'},
      {id: 'eng', text: 'Английский'}
    ],
    levels: [
      {id: 'beginner', text: 'Начальный'},
      {id: 'middle', text: 'Средний'},
      {id: 'advanced', text: 'Продвинутый'}
    ],
    checkedLangs: [],
    checkedLvls: [],
      minPrice: '',
      maxPrice: '',
      showModal: false,
      currency: 'KZT',
      symbol: '₸',
      page: 1,
      service: this.$route.params.id,
      coursesRecommended: [],
      courses: [],
      filtered: false,
  }
  },
  methods: {

    orderItem(id){
      localStorage.setItem('productId', id);
      this.showModal = true;
    },

    open(id){
      this.$router.push({path:`/${i18n.locale}/courses/${id}`})
      this.$router.go()
    },

    discardFilter(){
      this.filtered = false;
      this.minPrice = '';
      this.maxPrice = ''
      this.getCourses();
    },

    getCourses(){
          axios.get("http://localhost:8086/api/v1/courses/products", {
            params: {
              page: this.currentPage,
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.courses = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

    getCoursesFiltered(){
      var form = document.getElementById('input-form');
      var langs = [];
      form.querySelectorAll('input').forEach(function (input) {
    if(input.type === 'checkbox' && input.checked) {
      langs.push(input.value);
    }})

     var form2 = document.getElementById('level-form');
      var lvls = [];
      form2.querySelectorAll('input').forEach(function (input) {
    if(input.type === 'checkbox' && input.checked) {
      lvls.push(input.value);
  }})
  this.checkedLangs = langs;
  this.checkedLvls = lvls;
  console.log(langs, lvls)
  if(this.$route.params.id != null){
          axios.post("http://localhost:8086/api/v1/courses/products/filter/child", {
            languages: langs,
            levels: lvls,
          },
          {
            params: {
              parent_category: 'courses',
              child_category: this.service,
                min_price: this.minPrice,
                max_price: this.maxPrice,
                currency: this.currency
              }
          }).then(response => {
            console.log(response.data)
            this.filtered = true;
            localStorage.setItem('filtered', this.filtered);
            this.courses = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    } else{
       axios.post("http://localhost:8086/api/v1/courses/products/filter/parent", {
         languages: langs,
            levels: lvls,
       }, {
            params: {
              parent_category: 'courses',
                min_price: this.minPrice,
                max_price: this.maxPrice,
                currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.filtered = true;
            localStorage.setItem('filtered', this.filtered);
            this.courses = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    }
    
    },

    getCoursesByCategories(){
          axios.get(`http://localhost:8086/api/v1/courses/products/courses/${this.$route.params.id}`, {
            params: {
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.courses = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

     getRecommendedCourses(){
          axios.get("http://localhost:8086/api/v1/courses/products/recommended/courses", {
            params: {
              ids: this.id,
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.coursesRecommended = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

    getRecommendedCoursesByCategories(){
          axios.get(`http://localhost:8086/api/v1/courses/products/recommended/courses/${this.$route.params.id}`, {
            params: {
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.coursesRecommended = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },


    },
    mounted(){
      window.scrollTo(0, 0);
      var menu_btn = document.querySelector("#menu-button");
        var verticalfilter = document.querySelector("#filter-vertical");
        var content = document.querySelector(".container");
        menu_btn.addEventListener("click", () => {
          console.log('lloh')
          content.classList.toggle("inactive-content");
        verticalfilter.classList.toggle("active-filter");
      });

var close_btn = document.querySelector("#close-button");
        close_btn.addEventListener("click", () => {
          content.classList.remove("inactive-content")
        verticalfilter.classList.remove("active-filter")
});
      setTimeout(() => {
      this.isLoading = false;
      }, 1500);

      if(localStorage.getItem('filtered')==='' || !localStorage.hasOwnProperty('filered')){
        this.filtered = false;
      }else{
        this.filtered = localStorage.getItem('filtered');
      }

      if(localStorage.getItem('currency')==='' || !localStorage.hasOwnProperty('currency')){
        this.currency = 'KZT'
        this.symbol = '₸'
      }else{
        this.currency = localStorage.getItem('currency')
        if(this.currency == 'KZT'){
          this.symbol = '₸'
        }else{
          this.symbol = '$'
        }
      }
      if(this.$route.params.id != null){
        if(this.filtered == false){
          this.getCoursesByCategories();
        }else{
          this.getCoursesFiltered();
        }
        this.getRecommendedCoursesByCategories();}
      
      else{
        if(this.filtered == false){
          this.getCourses();
        }else{
          this.getCoursesFiltered();
        }
        this.getRecommendedCourses();
        }
    },
    computed: {
      rows() {
        return this.courses.length
      }
    }
  }
</script>

<style  scoped src='../../assets/styles/service.css'>

</style>


