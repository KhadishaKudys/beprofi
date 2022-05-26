<template>
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
                   <a @click="logout()">
                        <img src="../../assets/static/icons/sidebar/sign-out.png" class="icon">
                        <span class="nav-text">
                            Выйти
                        </span>
                    </a>
                </li>  
            </ul>     
    </nav>
</template>

<script>
import axios from 'axios'
export default {
    components:{
    },
    props: {
        
    },
    data() {
        return {
            id: JSON.parse(localStorage.getItem('id')),
            token: this.$session.get('token'),
        }
    },
    methods: {
        logout(){
             axios.post(`http://localhost:8086/api/v1/auth/logout?user_id=${this.id}`
, {
            params: {
              user_id: this.id,
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
        console.log(this.showModal)
    }
}
</script>

<style scoped src="../../assets/styles/admin/sidebar.css">

</style>