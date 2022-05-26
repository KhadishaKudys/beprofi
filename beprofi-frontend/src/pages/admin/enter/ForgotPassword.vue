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
                            <img src="../../../assets/static/icons/header-footer/logo/logo-mini.svg" style="width:45px"/>
                            </router-link>
                            <h1>Забыли пароль?</h1>
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
            email: '',
            code: '',
            emailIsSent: false,
            codeIsVerified: false,
            passwordIsChanged: false,
            passwordIsForgotten: true,
            password: '',
            password2: ''
        }
    },
    methods: {

        passwordReset(){
            axios.post(`http://localhost:8086/api/v1/auth/forgot-password?email=${this.email}`, {
                params:{
                    email: this.email
                }
            }, 
            ).then(response => {
                console.log(response.data);
                this.passwordIsForgotten = false;
                this.emailIsSent = true;
                this.$router.push({
                    path: `/boss/sign-in/forgot-password/${this.email}/verification-code`
                })
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