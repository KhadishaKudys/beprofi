<template>
    <div class="signIn">
        <b-alert id="alert-error"
            v-model="showDangerAlert"
            variant="danger"
            dismissible
            fade
            @dismissed="showDangerAlert=false"
            class="error-alert-message">
      Не удалось войти в аккаунт!
    </b-alert>
    <b-alert id="alert-error"
            v-model="showSuccessAlert"
            variant="success"
            dismissible
            fade
            @dismissed="showSuccessAlert=false"
            class="error-alert-message">
      Вы успешно вошли в аккаунт!
    </b-alert>
            <div class="card">
                <div class="row" style="position:relative">
                    <div class="col-md-7" id="image">
                        
                        <img src="../../../assets/static/backgrounds/signinphoto.png" style="width:100%"/>
                    </div>
                    <div class="col-md-5" id="info">
                        <div className="row">
                            <router-link to="/">
                            <img src="../../../assets/static/icons/header-footer/logo/logo-mini.svg" style="max-width:30%"/>
                            </router-link>
                            <h1>Вход</h1>
                            <div id="line" class="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                                    <input class="hvr-underline-from-left"
                                            required
                                            type="text"
                                            placeholder="Введите email"
                                            className="inputFormsignin"
                                            v-model="email"
                                        />
                                    <input class="hvr-underline-from-left"
                                            required
                                            type="password"
                                            placeholder="Введите пароль"
                                            className="inputFormsignin"
                                            v-model="password"
                                        />
                            <div class="row" style="margin-top:50px">
                                <div class="col-md-5" style="text-align:left"><button type="submit" @click="signIn()">Войти</button></div>
                                <div class="col-md-7" style="text-align:right"><a style="font-size:14px" href="/boss/sign-in/forgot-password">Забыли пароль?</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'

export default{
    data() {
        return {
            dismissCountDown: 0,
        showSuccessAlert: false, 
        showDangerAlert: false,
            email: '',
            password: '',
            id: '',
            user: {},
            token: '',
            isLoggedIn: false
        }
    },
    methods: {

        signIn(){
            axios.post('http://localhost:8086/api/v1/auth/login', {email: this.email, password: this.password}, 
            {
   headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
      }).then(response => {
                this.token = response.data.token
                this.showSuccessAlert = true;
                console.log(response.data)
                this.$session.set('token', this.token);
                this.$session.set('isLoggedIn', true);
                localStorage.setItem("id", response.data.id)
                this.$router.push('/boss');
                }).catch(error => {
                    if (error.response) {
            this.showDangerAlert = true;
            console.log(error.response.data);}
                })
            },
    },
}
</script>

<style scoped src="../../../assets/styles/admin/admin-sign-in.css">

</style>