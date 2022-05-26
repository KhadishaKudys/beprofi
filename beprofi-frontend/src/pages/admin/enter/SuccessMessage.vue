<template>
    <div class="forgotPassword">
                    <div class="card-forgot">
                        <div id="info">
                            <router-link to="/">
                            <img src="../../../assets/static/icons/header-footer/logo/logo-mini.svg" style="width:45px"/>
                            </router-link>
                            <h1>Поздравляем!</h1>
                            <div id="line" class="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                                    <p>Ваш пароль был успешно изменен! Просим Вас заново зайти в аккаунт, введя новые данные.</p>
                            <div class="row" style="margin-top:50px; text-align:center; justify-content:center">
                                <div class="col-md-5" style="text-align:center">
                                    <router-link to="/boss/sign-in"><button type="submit">Войти</button></router-link>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
</template>

<script>

export default{
    data() {
        return {
        }
    },
    methods: {

      
    },
}
</script>

<style scoped src="../../../assets/styles/admin/admin-sign-in.css">

</style>