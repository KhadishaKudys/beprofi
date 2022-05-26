<template>
  <div id="add-post">
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  <h5>Записаться</h5>
                </slot>
                
              </div> 

              <div class="modal-body">
                <slot name="body">
                       <input type="text" placeholder="ФИО" v-model="name"/>
                       <input type="text" placeholder="Номер телефона" v-model="phone"/>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                    <button class="modal-default-button-1" @click="$emit('close')">
                    Отмена
                  </button>
                  <button class="modal-default-button" @click="$emit('close')">
                    Записаться
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>        
  </div>
</template>

<script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
<script>

export default {
    data(){
        return{
            name: '',
            phone: '',
        }
    },
    methods: {

    },
    mounted() {

    },
}
</script>



<style scoped src='../assets/styles/course-register.css'>

</style>