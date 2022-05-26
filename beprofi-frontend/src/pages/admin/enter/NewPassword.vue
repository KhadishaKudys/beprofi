<template>
    <div class="forgotPassword">
        <b-alert id="alert-error"
            v-model="showDangerAlert"
            variant="danger"
            dismissible
            fade
            @dismissed="showDangerAlert=false"
            class="error-alert-message">
      Пароли не совпадают!
    </b-alert>
                     <div class="card-forgot">
                        <div id="info">
                            <router-link to="/">
                            <img src="../../../assets/static/icons/header-footer/logo/logo-mini.svg" style="width:45px"/>
                            </router-link>
                            <h1>Новый пароль</h1>
                            <div id="line" class="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                                    <input class="hvr-underline-from-left"
                                            required
                                            type="text"
                                            placeholder="Введите новый пароль"
                                            className="inputFormsignin"
                                            v-model="password"
                                        />
                                        <input class="hvr-underline-from-left"
                                            required
                                            type="text"
                                            placeholder="Подтвердите пароль"
                                            className="inputFormsignin"
                                            v-model="password2"
                                        />
                            <div class="row" style="margin-top:50px">
                                <div class="col-md-5" style="text-align:left"><button type="submit" @click="newPassword()">Изменить</button></div>
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
            email: this.$route.params.email,
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

      
         newPassword(){
             if(this.password == this.password2){
            axios.post(`http://localhost:8086/api/v1/auth/forgot-password/change?email=${this.email}&password=${this.password}`, {
                params:{
                    email: this.email,
                    password: this.password
                }
            }, 
            ).then(response => {
                console.log(response.data)
                this.codeIsVerified = false;
                this.passwordIsChanged = true;
                this.$router.push({
                    path: `/boss/sign-in/forgot-password/${this.email}/new-password/success`
                })
                }).catch(error => {
                    if (error.response) {
            this.showDangerAlert = true;
            console.log(error.response.data);}
                })
             }else{
                 this.showDangerAlert = true;
             }
            },
    },
}
</script>

<style scoped src="../../../assets/styles/admin/admin-sign-in.css">

</style>