<template>
<div id="dashboard">
  <div class="row">
      <div class="col-md-5">
        <h3 id="main-text">Услуги</h3>
      </div>
       <div class="col-md-7">
        <button class="new" @click="showModal=true">Создать новую</button>
        <NewService v-if="showModal" @close="showModal=false"/>
        <EditService v-if="showModal1" @close="showModal1=false" :data="serviceDetails"/>
      </div>
  </div>
<div class="overflow-auto">


  <b-pagination
    id="my-page"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="right"
      aria-controls="my-table"
    ></b-pagination>
    <br>

    <b-table responsive="md"
      id="my-table"
      :fields="fields"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      
    >

    <template v-slot:cell(actions)="{ item: { id }}">
        <img src="../../../assets/static/icons/admin-panel/edit.png" width="25px" @click="editing(id)"/>
        <img src="../../../assets/static/icons/admin-panel/delete.png" width="25px" @click="handleClick(id)"/>
        <vue-confirm-dialog class="confirmation"></vue-confirm-dialog>
      </template>
       
    </b-table>

  </div>
</div>
 
</template>

<script>
import axios from 'axios'
import NewService from '../../../components/admin/NewService.vue'
import EditService from '../../../components/admin/EditService.vue'

export default {
  name: 'ServicesDashboardAdmin',
  components:{
    NewService,
    EditService
  },
  data(){
    return{
      perPage: 6,
      showModal: false,
      currency: 'KZT',
      showModal1: false,
        currentPage: 1,
        output: null,
        items: [
          
        ],
        fields: [
          {
          key: 'article',
          label: '#'
          }, 
          {
            key: 'name',
            label: 'Название'
          }, 
          {
            key: 'category',
            label: 'Категория'
          }, 
          {
            key: 'child_category',
            label: 'Подкатегория'
          }, 
          { 
            key: 'overview',
            label: 'Описание'
          }, 
          { 
            key: 'price',
            label: 'Стоимость'
          }, 
          {
            key: 'discount',
            label: 'Скидка'
          }, 
          { 
            key: 'actions',
            label: 'Действия'
          }],
      token: this.$session.get('token'),
      serviceDetails: {}
    }
  },
  props: {
        user: Object
  },
  methods: {

    handleClick(id){
      this.$confirm(
        {
          message: `Вы уверены, что хотите удалить данную услугу?`,
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
              this.deleting(id);
              // ... do something
            }
          }
        }
      )
    },

    editing(id){
      localStorage.setItem('course-id', id);
      this.getService(id);
      this.showModal1=true;
    },

    deleting(id){
      axios.post(`http://localhost:8086/api/v1/services/products/delete?id=${id}`, {
        params:{
          id: id
        }
      },{
              headers:{
                'Authorization': this.token
              }
            }).then(response => {
            console.log(response.data)
            this.$router.go()
                    }).catch(error => {
                        console.log(error)
                    })
    },

    getService(id){
      axios.get(`http://localhost:8086/api/v1/services/products/${id}`, {
            params: {
              currency: this.currency
              }
            }, {
            headers:{
                'Authorization': this.token
              }
          }).then(response => {
            console.log(response.data)
            this.serviceDetails = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },


       getServices(){
          axios.get("http://localhost:8086/api/v1/services/products", {
            params: {
              page: this.currentPage, 
              currency: this.currency
              }
            }, {
            headers:{
                'Authorization': this.token
              }
          }).then(response => {
            console.log(response.data)
            this.items = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

        forceRerender() {
          this.renderComponent = false;

          this.$nextTick(() => {
            this.renderComponent = true;
          });
        },
  },
    mounted() {
        this.getServices()
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
}
</script>

<style scoped src='../../../assets/styles/admin/admin-dashboard.css'>

</style>