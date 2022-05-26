<template>
    <div class="forgotPassword">
        <b-alert id="alert-error"
            v-model="showDangerAlert"
            variant="danger"
            dismissible
            fade
            @dismissed="showDangerAlert=false"
            class="error-alert-message">
      Не удалось отправить заявку!
    </b-alert>
            <div class="card-forgot">
                        <div id="info">
                            <router-link to="/">
                            <img src="../../../assets/static/icons/header-footer/logo/logo-mini.svg" style="width:50px"/>
                            </router-link>
                            <h1>Забытый пароль</h1>
                            <div id="line" class="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                                    <input class="hvr-underline-from-left"
                                            required
                                            type="text"
                                            placeholder="Введите email"
                                            className="inputFormsignin"
                                            v-model="email"
                                        />
                            <div class="row" style="margin-top:50px">
                                <div class="col-md-5" style="text-align:left"><button type="submit" @click="passwordReset()">Отправить</button></div>
                                <div class="col-md-7" style="text-align:right"><a style="font-size:14px" href="/boss/sign-in">Войти</a></div>
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
            email: ''
        }
    },
    methods: {

        passwordReset(){
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