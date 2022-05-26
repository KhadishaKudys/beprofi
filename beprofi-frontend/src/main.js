import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router/index'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';

import VueSweetalert2 from 'vue-sweetalert2';
import VueConfirmDialog from 'vue-confirm-dialog';
import VueSessionStorage from 'vue-sessionstorage';
import Carousel3d from 'vue-carousel-3d';
 
Vue.use(Carousel3d);


Vue.use(VueSessionStorage)
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

// If you don't need the styles, do not connect
// import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.use(VueCarousel);

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if(!language){
    language = 'ru'
  }
  i18n.locale = language
  next()
})

new Vue({
  router,
  i18n,
  render: h => h(App),
  mounted(){
    AOS.init()
  }
}).$mount('#app')

