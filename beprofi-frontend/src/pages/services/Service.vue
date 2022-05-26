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
          </div>
    <br>
    
    <button v-if="filtered==false" class="filter" @click="getCoursesFiltered()">{{ $t('courses.apply') }}</button>
    <button v-else class="filter" @click="discardFilter()">Сброс</button>
    </nav>
  </div>


    <div class="container">
      <h1 v-if="this.$route.path == `/${$i18n.locale}/services`">{{ $t('menu.services.name') }}</h1>
      <h1 v-else-if="this.$route.params.id != null">{{$t(`menu.services.${this.category}.${this.service}.name`)}}</h1>
        <h1 v-else>{{$t(`menu.services.${this.category}.name`)}}</h1>
        <div class="banner">
              <img src="../../assets/static/main-page/banners/ban3.png"/>
            </div>
    
      <div v-if="this.servicesRecommended.length>0">
        <h4>{{ $t('courses.recommended') }}</h4>
        <carousel id="caros" :responsive="responsive" >
          <div v-for="service in servicesRecommended" :key="service.id">
              <a :href="`/${$i18n.locale}/about-service/`+service.id">
              <div class='demo-content'>
                <div class="slide-img">
                <img :src="require('../../assets'+service.imageUrl)"/>
              </div>
              <div class="detail-box">
                <div class="type">
                  <a>{{ service.name }}</a><br>
                  <a>{{ service.price_with_discount }} {{symbol}}</a>
                </div>
              </div>
              </div>
              </a>
            </div>
        </carousel>
      </div>
<div v-if="this.$route.path == `/${$i18n.locale}/services`">
    <h4 >{{ $t('courses.subcategory') }}</h4>
    <div class="row">
    <div class="card-categories" v-for="category in $t('menu.services.list')" :key="category.id" @click="open(category.id)">
        <h6>{{ category.name }}</h6>
    </div>
    </div>
</div>
<h4>{{ $t('courses.allservices') }}</h4>

        <button id="menu-button">
          <img src="../../assets/static/icons/categories/filter.svg" height="20px">
        </button>


      <div class="row">
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
    <br>
    <button v-if="filtered==false" class="filter" @click="getCoursesFiltered()">{{ $t('courses.apply') }}</button>
    <button v-else class="filter" @click="discardFilter()">Сброс</button>
          </div>
          <div class="col-md-9">
            <span  class="badge badge-danger" v-if="filtered">{{minPrice}} - {{maxPrice}} {{symbol}}</span>
            <div v-if="this.services.length>0">
              
              <div class="recommended">
          <div class="row">
          <div class="card" v-for="service in services.slice((currentPage-1)*perPage, (currentPage-1)*perPage+perPage)" :key="service.id">
             <div class="card-image">
            <img class="img-fluid" alt="Responsive image"  :src="require('../../assets'+service.imageUrl)">
             </div>
   <div id="card-title">
            <h5>{{service.name}}</h5>
            </div>
          <div id="card-info">
            <p class="overview">{{service.overview}}</p>
            <div v-if="service.price != service.price_with_discount">
              <h6 id="price">{{service.price}} {{symbol}}</h6>
              <p id="discount">-{{service.discount}}%</p>
              <h6 id="priceWithDiscount">{{service.price_with_discount}} {{symbol}}</h6>
            </div>
            <div v-else>
              <h6>{{service.price}} {{symbol}}</h6>
            </div>
            </div>
            <button class="register" @click="orderItem(service.id)">
              {{ $t('courses.register') }}
            </button>
            <OrderCall v-if="showModal" @close="showModal=false"/>
            <router-link :to="`/${$i18n.locale}/about-service/`+service.id">
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
import carousel from 'vue-owl-carousel'


export default{
  name: 'Service',
  components: {
    OrderCall,
    VueRangeSlider,
    carousel
  },
  data() {
    return{
      responsive: { 0: { items: 1, nav: false }, 600: { items: 4, nav: true } },
      showModal: false,
      currentPage: 1,
      perPage: 18,
      isLoading: true, 
      filtered: false,
      showDangerAlert: localStorage.getItem('showDangerAlert'),
      currency: 'KZT',
      minPrice: '',
      maxPrice: '',
      symbol: '₸',
      page: 1,
      service: this.$route.params.id,
      category: this.$route.params.category,
    services: [],
    servicesRecommended: []
  }
  },
  methods: {
    orderItem(id){
      localStorage.setItem('productId', id);
      this.showModal = true;
    },

    open(id){
      this.$router.push({path:`/${i18n.locale}/services/${id}`})
      this.$router.go()
    },

    discardFilter(){
      this.filtered = false;
      this.minPrice = '';
      this.maxPrice = ''
      this.getCourses();
    },

     getCourses(){
          axios.get("http://localhost:8086/api/v1/services/products", {
            params: {
              page: this.currentPage,
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.services = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

    getCoursesFiltered(){
      if(this.$route.params.id != null){
        axios.get("http://localhost:8086/api/v1/services/products/filter/child", {
            params: {
              parent_category: 'services',
              category: this.$route.params.category,
              child_category: this.$route.params.id,
              min_price: this.minPrice,
              max_price: this.maxPrice,
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            consolelog(localStorage)
            this.filtered = true;
            localStorage.setItem('filtered', this.filtered);
            this.services = response.data
            // this.$router.go();
                    }).catch(error => {
                        console.log(error)
                    })
      }else if(this.$route.params.category != null){
        axios.get("http://localhost:8086/api/v1/services/products/filter/category", {
            params: {
              parent_category: 'services',
              category: this.$route.params.category,
              min_price: this.minPrice,
              max_price: this.maxPrice,
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.filtered = true;
            localStorage.setItem('filtered', this.filtered);
            this.services = response.data
                    }).catch(error => {
                        console.log(error)
                    })
      }
      else {
          axios.get("http://localhost:8086/api/v1/services/products/filter/parent", {
            params: {
              parent_category: 'services',
              min_price: this.minPrice,
              max_price: this.maxPrice,
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.filtered = true;
            localStorage.setItem('filtered', this.filtered);
            this.services = response.data
                    }).catch(error => {
                        console.log(error)
                    })
      }
    },

    getCoursesByCategories(){
          axios.get(`http://localhost:8086/api/v1/services/products/services/${this.$route.params.category}`, {
            params: {
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.services = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

     getCoursesByChildCategories(){
          axios.get(`http://localhost:8086/api/v1/services/products/services/${this.$route.params.category}/${this.$route.params.id}`, {
            params: {
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.services = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

     getRecommendedCourses(){
          axios.get("http://localhost:8086/api/v1/services/products/recommended/services", {
            params: {
              ids: this.id,
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.servicesRecommended = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

    getRecommendedCoursesByCategories(){
          axios.get(`http://localhost:8086/api/v1/services/products/recommended/services/${this.$route.params.category}`, {
            params: {
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.servicesRecommended = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

    getRecommendedCoursesByChildCategories(){
          axios.get(`http://localhost:8086/api/v1/services/products/recommended/services/${this.$route.params.category}/${this.$route.params.id}`, {
            params: {
              currency: this.currency
              }
            }).then(response => {
            console.log(response.data)
            this.servicesRecommended = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },


    },
    mounted(){
      console.log(localStorage)
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

      if(localStorage.getItem('filtered')=='' || !localStorage.hasOwnProperty('filered')){
        this.filtered = false;
      }else{
        this.filtered = localStorage.getItem('filtered');
      }

      if(this.showDangerAlert == true){
        setTimeout(() => {
      this.showDangerAlert = false;
      }, 1500);
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
        if(this.filtered==false){
          this.getCoursesByChildCategories();
        }else{
          this.getCoursesFiltered();
        }
        this.getRecommendedCoursesByChildCategories();
      }
      else if(this.$route.params.category != null){
        if(this.filtered==false){
          this.getCoursesByCategories();
        }else{
          this.getCoursesFiltered();
        }
        this.getRecommendedCoursesByCategories();
      }
      else{
        console.log(this.filtered)
        if(this.filtered==false){
          this.getCourses();
        }else{
          this.getCoursesFiltered();
        }
        this.getRecommendedCourses();
      }
      console.log(this.$route)
      console.log(this.$router)
    },
    computed: {
      rows() {
        return this.services.length
      }
    }
  }
</script>


<style  scoped src='../../assets/styles/service.css'>

</style>