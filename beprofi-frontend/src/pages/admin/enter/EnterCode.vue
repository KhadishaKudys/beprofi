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
                     <div class="card-code">
                        <div id="info">
                            <router-link to="/">
                            <img src="../../../assets/static/icons/header-footer/logo/logo-mini.svg" style="width:45px"/>
                            </router-link>
                            <h1>Код подтверждения</h1>
                            <div id="line" class="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                                    <input class="hvr-underline-from-left"
                                            required
                                            type="text"
                                            placeholder="Введите код"
                                            className="inputFormsignin"
                                            v-model="code"
                                        />
                            <div class="row" style="margin-top:50px">
                                <div class="col-md-5" style="text-align:left"><button type="submit" @click="verifyCode()">Подтвердить</button></div>
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


         verifyCode(){
            axios.post(`http://localhost:8086/api/v1/auth/forgot-password/${this.code}`
            ).then(response => {
                this.emailIsSent = false;
                this.codeIsVerified = true;
                this.$router.push({
                    path: `/boss/sign-in/forgot-password/${this.email}/new-password`
                })
                console.log(response.data);
                }).catch(error => {
                    if (error.response) {
            this.showDangerAlert = true;
            console.log(error.response.data);}
                })
            },

        
    },
    mounted(){
        console.log(this.$route)
    }
}
</script>

<style scoped src="../../../assets/styles/admin/admin-sign-in.css">

</style>