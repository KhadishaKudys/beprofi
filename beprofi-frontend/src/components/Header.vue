<template>
<nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" :href="`/${$i18n.locale}/`"><img class="logo" src="../assets/static/icons/header-footer/logo/logo.svg"/></a>
   <button id="menu-btn">
                <img src="../assets/static/icons/sidebar/menu.png" width="15px">
                </button>
  <div id="toggler">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  </div>
  <div id="navbar-vertical">
    <nav class="main-menu">
      <ul>
        <button id="close-btn" style="position:relative; background-color:#FF3D33; margin-left: 90%">
                <img src="../assets/static/icons/sidebar/menu.png" width="15px">
          </button>
        <div class="row" style="margin-top:20px">
        <language-switcher style="margin-right:50%"/>
        <currency-switcher/>
        </div>

                <li class="title"><b><a :href="`/${$i18n.locale}/services`">{{ $t('menu.services.name') }}</a></b></li>
                      
                        <li><b><a :href="`/${$i18n.locale}/services/marketplaces`">{{ $t('menu.services.marketplaces.name') }}</a></b></li>
                          <li v-for="service in $t('menu.services.marketplaces.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/marketplaces/`+service.id" :key="service.id">{{ service.title }}</a></li>
                    
                      <li><b><a :href="`/${$i18n.locale}/services/development`">{{ $t('menu.services.development.name') }}</a></b></li>
                        <li v-for="service in $t('menu.services.development.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/development/`+service.id">{{ service.title }}</a></li>
                      <li><b><a :href="`/${$i18n.locale}/services/marketing`">{{ $t('menu.services.marketing.name') }}</a></b></li>
                        <li v-for="service in $t('menu.services.marketing.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/marketing/`+service.id">{{ service.title }}</a></li>
                   
                      <li><b><a :href="`/${$i18n.locale}/services/design`">{{ $t('menu.services.design.name') }}</a></b></li>
                        <li v-for="service in $t('menu.services.design.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/design/`+service.id">{{ service.title }}</a></li>
                    
                      <li><b><a :href="`/${$i18n.locale}/services/photo-video`">{{ $t('menu.services.photovideo.name') }}</a></b></li>
                        <li v-for="service in $t('menu.services.photovideo.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/design/`+service.id">{{ service.title }}</a></li>
                    
                      <li><b><a :href="`/${$i18n.locale}/services/finance`">{{ $t('menu.services.finance.name') }}</a></b></li>
                        <li v-for="service in $t('menu.services.finance.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/design/`+service.id">{{ service.title }}</a></li>
                  
                      <li class="title"><a :href="`/${$i18n.locale}/courses`"><b>{{ $t('menu.courses.name') }}</b></a></li>
                     
                      <li v-for="service in $t('menu.courses.services')" :key="service.id"><a :href="`/${$i18n.locale}/courses/`+service.id">{{ service.title }}</a></li>
                  
                      <li class="title"><a :href="`/${$i18n.locale}/professions`"><b>{{ $t('menu.professions.name') }}</b></a></li>
                    
                      <li v-for="service in $t('menu.professions.services')" :key="service.id"><a :href="`/${$i18n.locale}/professions/`+service.id">{{ service.title }}</a></li>
                
            </ul>     
    </nav>
  </div>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active" id="categories">
        <a class="nav-link" href="#">{{ $t('menu.categories') }}</a>
              
                 <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <ul class="mega-links">
                      <li class="title"><b><a :href="`/${$i18n.locale}/services`">{{ $t('menu.services.name') }}</a></b></li>
                      <div class="line"/>
                        <li><b><a :href="`/${$i18n.locale}/services/marketplaces`">{{ $t('menu.services.marketplaces.name') }}</a></b></li>
                          <li v-for="service in $t('menu.services.marketplaces.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/marketplaces/`+service.id" :key="service.id">{{ service.title }}</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <ul class="mega-links">
                      <li><b><a :href="`/${$i18n.locale}/services/development`">{{ $t('menu.services.development.name') }}</a></b></li>
                        <li v-for="service in $t('menu.services.development.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/development/`+service.id">{{ service.title }}</a></li>
                      <li><b><a :href="`/${$i18n.locale}/services/marketing`">{{ $t('menu.services.marketing.name') }}</a></b></li>
                        <li v-for="service in $t('menu.services.marketing.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/marketing/`+service.id">{{ service.title }}</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <ul class="mega-links">
                      <li><b><a :href="`/${$i18n.locale}/services/design`">{{ $t('menu.services.design.name') }}</a></b></li>
                        <li v-for="service in $t('menu.services.design.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/design/`+service.id">{{ service.title }}</a></li>
                    
                      <li><b><a :href="`/${$i18n.locale}/services/photo-video`">{{ $t('menu.services.photovideo.name') }}</a></b></li>
                        <li v-for="service in $t('menu.services.photovideo.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/design/`+service.id">{{ service.title }}</a></li>
                    
                      <li><b><a :href="`/${$i18n.locale}/services/finance`">{{ $t('menu.services.finance.name') }}</a></b></li>
                        <li v-for="service in $t('menu.services.finance.services')" :key="service.id"><a :href="`/${$i18n.locale}/services/design/`+service.id">{{ service.title }}</a></li>
                    </ul>
                  </div>
                  <div class="row" id="courses">
                    <ul class="mega-links">
                      <li class="title"><a :href="`/${$i18n.locale}/courses`"><b>{{ $t('menu.courses.name') }}</b></a></li>
                      <div class="line"/>
                      <li v-for="service in $t('menu.courses.services')" :key="service.id"><a :href="`/${$i18n.locale}/courses/`+service.id">{{ service.title }}</a></li>
                    </ul>
                  </div>
                  <div class="row" id="professions">
                    <ul class="mega-links">
                      <li class="title"><a :href="`/${$i18n.locale}/professions`"><b>{{ $t('menu.professions.name') }}</b></a></li>
                      <div class="line"/>
                      <li v-for="service in $t('menu.professions.services')" :key="service.id"><a :href="`/${$i18n.locale}/professions/`+service.id">{{ service.title }}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
        <language-switcher/>
        <div style="width:20px"/>
        <currency-switcher/>
        
    </form>
  </div>
</nav>
</template>

<style>

</style>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
import CurrencySwitcher from './CurrencySwitcher.vue'
export default{
  name: 'Header',
  computed:{
  },
  components:{
    LanguageSwitcher,
    CurrencySwitcher
  },
  data(){
    return{
     showModal: false,
     currency: ''
    }
  },
  method:{
    setting(currency){
      this.currency = currency
      localStorage.setItem('currency', this.currency)
      console.log(this.currency)
    },
  },

  mounted(){
    var menu_btn = document.querySelector("#menu-btn");
        var navbar = document.querySelector("#navbarTogglerDemo02");
        var verticalnavbar = document.querySelector("#navbar-vertical");
        menu_btn.addEventListener("click", () => {
        navbar.classList.toggle("inactive-nav");
        verticalnavbar.classList.toggle("active-nav")
});

var close_btn = document.querySelector("#close-btn");
        close_btn.addEventListener("click", () => {
        verticalnavbar.classList.remove("active-nav")
});
  }

  // updated(){
  //   localStorage.setItem('currency', this.currency)
  //   console.log(localStorage)
  //   this.$router.go()
  //   }
}
</script>

<style scoped src="../assets/styles/header.css">
</style>