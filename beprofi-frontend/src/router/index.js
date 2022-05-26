import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'
Vue.use(VueRouter);

import Main from '../pages/main/Main.vue'
import Information from '../pages/main/Information.vue'
import Service from '../pages/services/Service.vue'
import AboutCourse from '../pages/courses/AboutCourse.vue'
import AboutProfession from '../pages/courses/AboutProfession.vue'
import AboutService from '../pages/courses/AboutService.vue'
import MainAdmin from '../pages/admin/MainAdmin.vue'
import SignInAdmin from '../pages/admin/enter/SignInAdmin.vue'
import Terms from '../pages/footer/Terms.vue'
import PrivacyPolicy from '../pages/footer/PrivacyPolicy.vue'
import DashboardAdmin from '../pages/admin/personal-area/DashboardAdmin.vue'
import Error from '../components/Error.vue'
import Course from '../pages/services/Course.vue'
import Profession from '../pages/services/Profession.vue'
import CoursesDashboardAdmin from '../pages/admin/personal-area/CoursesDashboardAdmin.vue'
import ProfessionsDashboardAdmin from '../pages/admin/personal-area/ProfessionsDashboardAdmin.vue'
import OrdersDashboardAdmin from '../pages/admin/personal-area/OrdersDashboardAdmin.vue'
import CallsDashboardAdmin from '../pages/admin/personal-area/CallsDashboardAdmin.vue'
import Portfolio from '../pages/portfolio/Portfolio.vue'
import WebProject from '../pages/portfolio/WebProject.vue'
import MobileProject from '../pages/portfolio/MobileProject.vue'
import ForgotPassword from '../pages/admin/enter/ForgotPassword.vue'
import EnterCode from '../pages/admin/enter/EnterCode.vue'
import NewPassword from '../pages/admin/enter/NewPassword.vue'
import SuccessMessage from '../pages/admin/enter/SuccessMessage.vue'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/boss',
        redirect: 'boss/dashboard/services',
        component: MainAdmin,
        children: [{
          path: 'dashboard/services',
          component: DashboardAdmin
        },{
          path: 'dashboard/courses',
          component: CoursesDashboardAdmin
        },{
          path: 'dashboard/professions',
          component: ProfessionsDashboardAdmin
        },{
          path: 'dashboard/orders',
          component: OrdersDashboardAdmin
        },{
          path: 'dashboard/calls',
          component: CallsDashboardAdmin
        }]
      },
      {
        path: '/boss/sign-in',
        name: 'admin-sign-in',
        component: SignInAdmin
      },
      {
        path: '/boss/sign-in/forgot-password',
        name: 'admin-forgot-password',
        component: ForgotPassword
      },
      {
        path: '/boss/sign-in/forgot-password/:email/verification-code',
        name: 'admin-verification-code',
        component: EnterCode
      },
      {
        path: '/boss/sign-in/forgot-password/:email/new-password',
        name: 'admin-new-password',
        component: NewPassword
      },
      {
        path: '/boss/sign-in/forgot-password/:email/new-password/success',
        name: 'admin-success',
        component: SuccessMessage
      },
    {
        path: '/',
        redirect: `/${i18n.locale}/`
    },
    {
      path: '/:lang',
      component: {
        render(c) {
            return c('router-view')
        }
      },
      children:[
     {
      path: '/',
      component: Main,
      children: [
        {
        path: '',
        component: Information
      }, 
      {
        path: 'services',
        component: Service,
      },
      {
        path: 'services/:category',
        component: Service
      },
      {
        path: 'services/:category/:id',
        component: Service
      },
      {
        path: 'courses',
        component: Course,
      },
      {
        path: 'courses/:id',
        component: Course,
      },
      {
        path: 'professions',
        component: Profession,
      },
      {
        path: 'professions/:id',
        component: Profession,
      },
      {
        path: 'about-course/:id',
        component: AboutCourse
      },
      {
        path: 'about-profession/:id',
        component: AboutProfession
      },
      {
        path: 'about-service/:id',
        component: AboutService
      }, {
        path: 'public-offer',
        component: Terms
      }, {
        path: 'privacy-policy',
        component: PrivacyPolicy
      }, {
        path: 'portfolio',
        component: Portfolio
      }, {
        path: 'portfolio/web/:index',
        component: WebProject
      }, {
        path: 'portfolio/mobile/:index',
        component: MobileProject
      }]
    },
    {
        path: '/*',
        component: Error
    }
  ]},
  {
    path: '/*',
    component: Error
  },
]})


export default router