<template>
    <div class="personal-area" v-if="isLoggedIn==true">
        <nav class="main-menu">

            <ul>
                <li>
                    <a href="/">
                        <img src="../../assets/static/icons/sidebar/main.png" class="icon">
                        <span class="nav-text">
                            Главная
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a 
                        href="/boss/dashboard/services"
                    >
                        <img src="../../assets/static/icons/sidebar/services.png" class="icon">
                        <span class="nav-text">
                            Услуги
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a 
                        href="/boss/dashboard/courses"
                    >
                        <img src="../../assets/static/icons/sidebar/courses.png" class="icon">
                        <span class="nav-text">
                            Курсы
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a 
                        href="/boss/dashboard/professions"
                    >
                        <img src="../../assets/static/icons/sidebar/professions.png" class="icon">
                        <span class="nav-text">
                            Профессии
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a 
                        href="/boss/dashboard/orders"
                    >
                        <img src="../../assets/static/icons/sidebar/order.png" class="icon">
                        <span class="nav-text">
                            Заказы
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a 
                        href="/boss/dashboard/calls"
                    >
                        <img src="../../assets/static/icons/sidebar/calls.png" class="icon">
                        <span class="nav-text">
                            Звонки
                        </span>
                    </a>
                    
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a @click="handleClick()">
                        <img src="../../assets/static/icons/sidebar/sign-out.png" class="icon">
                        <span class="nav-text">
                            Выйти
                        </span>
                    </a>
                </li>  
            </ul>     
    </nav>
       <!-- <Sidebar :id="id" :token="token" style="position:fixed" class="sidebar"/> -->
        <div class="sections">
            <div class="card">
                <button id="menu-btn">
                <img src="../../assets/static/icons/sidebar/menu.png" width="15px">
                </button>
                <vue-confirm-dialog class="confirmation"></vue-confirm-dialog>
                <router-view :key="this.$route.path"/>
          </div>
        </div>
    </div>
    <div v-else>
        <NotEntered/>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"></script>
<script>
import Dashboard from './personal-area/DashboardAdmin.vue'
// import Sidebar from "../../components/admin/Sidebar.vue"
import SignInAdmin from "./enter/SignInAdmin.vue"
import NotEntered from '../../components/NotEntered.vue'
import axios from 'axios'
export default{
  name: 'MainAdmin',
  components: {
    Dashboard,
    // Sidebar,
    SignInAdmin,
    NotEntered
  },
  data(){
      return {
          id: this.$route.params.id,
          user: {},
          isLoggedIn: this.$session.get('isLoggedIn'),
          token: this.$session.get('token'),
          userid: JSON.parse(localStorage.getItem('id')),
      }
  },
  props: {
      userInfo: Object,
  },
  methods:{
      handleClick(){
      this.$confirm(
        {
          message: `Вы уверены, что хотите выйти?`,
          button: {
            no: 'Нет',
            yes: 'Да'
          },
          /**
          * Callback Function
          * @param {Boolean} confirm 
          */
          callback: confirm => {
            if (confirm) {
              this.logout();
              // ... do something
            }
          }
        }
      )
    },

      logout(){
             axios.post(`http://localhost:8086/api/v1/auth/logout?user_id=${this.userid}`
, {
            params: {
              user_id: this.userid,
              }
},{
            headers:{
                'Authorization': this.token
              }
          }).then(response => {
                console.log(response.data)
                this.$session.set('isLoggedIn', false);
        this.$session.remove('token');
        localStorage.removeItem('id');
        this.$router.push(
                    { 
                        path: '/boss/sign-in' 
                    }
                )
                        }).catch(error => {
                            console.log(error)
                            alert('Error')
                        })
    },
},
mounted(){
    console.log(this.token)
    var menu_btn = document.querySelector("#menu-btn");
        var sidebar = document.querySelector(".main-menu");
        var container = document.querySelector(".card");
        menu_btn.addEventListener("click", () => {
        sidebar.classList.toggle("active-nav");
        container.classList.toggle("active-cont");
});
}
}
</script>

<style scoped src='../../assets/styles/admin/main-admin.css'>

</style>
<style scoped src="../../assets/styles/admin/sidebar.css">

</style>