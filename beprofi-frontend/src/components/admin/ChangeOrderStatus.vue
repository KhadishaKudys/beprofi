<template>
  <div id="add-post">
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container" style="width:fit-content">

              <div class="modal-header">
                <slot name="header">
                  <h5>Статус заказа</h5>
                </slot>
                
              </div> 

              <div class="modal-body">
                <slot name="body">
                  <div class="row">
                      <div class="col-md-4">
                          <button class="badge badge-warning" @click="selected('В обработке')">В обработке</button>
                      </div>
                      <div class="col-md-4">
                          <button class="badge badge-success" @click="selected('Принят')">Принят</button>
                      </div>
                      <div class="col-md-4">
                          <button class="badge badge-danger" @click="selected('Отклонен')">Отклонен</button>
                      </div>
                  </div>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                    <button class="modal-default-button-1" @click="$emit('close')">
                    {{ $t('modal.cancel') }}
                  </button>
                  <button class="modal-default-button" @click="changeStatus()">
                    Применить
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
import axios from 'axios'

export default {
    data(){
        return{
            status: '',
            token: this.$session.get('token'),
            orderId: localStorage.getItem('order_id'),
            type: localStorage.getItem('type')
        }
    },
    methods: {

      selected(status){
        this.status = status;
      },

      changeStatus(){
        axios({
            method: 'get',
            url: 'http://localhost:8086/api/v1/order/status/change',
            headers: {
                'Authorization': `${this.token}`
            },
            params: {
                type: this.type,
                status: this.status,
                order_id: this.orderId
            }
          }).then(response => {
            console.log(response.data)
            localStorage.removeItem('order_id')
            localStorage.removeItem('type')
            this.$router.go();
                    }).catch(error => {
                        console.log(error)
                    })
    }
    },
}
</script>



<style scoped src='../../assets/styles/admin/new-item.css'>

</style>

<style scoped>

.col-md-4{
    text-align: center;
}

button{
    padding: 15px 20px;
    color: white;
    justify-content: center;
    width: 120px;
}

.badge-success{
    background-color: rgb(4, 160, 4);
}

.badge-warning{
    background-color: rgb(248, 166, 44);
}

.badge-danger{
    background-color: #ff3d33;
}


button:hover, button:active, button:focus{
    background-color: #252422;
    cursor: pointer;
}
</style>