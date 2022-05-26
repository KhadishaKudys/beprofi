<template>
  <div id="dashboard">
        <div class="row">
      <div class="col-md-5">
        <h3 id="main-text">Профессии</h3>
      </div>
      <div class="col-md-7">
        <button class="new" @click="showModal=true">Создать новую</button>
      </div>

        </div>
        <NewProfession v-if="showModal" @close="showModal=false"/>
        <EditProfession v-if="showModal1" @close="showModal1=false" :data="this.profDetails"/>
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
      :current-page="currentPage">

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
import NewProfession from '../../../components/admin/NewProfession.vue';
import EditProfession from '../../../components/admin/EditProfession.vue';

export default {
  name: 'ProfessionsDashboardAdmin',
  components:{
    NewProfession,
    EditProfession
  },
  data(){
    return{
      perPage: 6,
        currentPage: 1,
        token: this.$session.get('token'),
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
            key: 'child_category',
            label: 'Подкатегория'
          }, 
          { 
            key: 'overview',
            label: 'Описание'
          }, 
          {
            key: 'level',
            label: 'Уровень'
          }, 
          {
            key: 'language',
            label: 'Язык'
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
      renderComponent: true,
      showModal: false,
      showModal1: false,
      currency: 'KZT',
      profDetails: {}
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  methods: {

    handleClick(id){
      this.$confirm(
        {
          message: `Вы уверены, что хотите удалить данную професиию?`,
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
              this.deleteProfession(id);
              // ... do something
            }
          }
        }
      )
    },

    editing(id){
      localStorage.setItem('course-id', id);
      this.getProfession(id);
      this.showModal1=true;
    },

    deleteProfession(id){
      axios.post(`http://localhost:8086/api/v1/professions/products/delete?id=${id}`, {
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

    getProfession(id){
      axios.get(`http://localhost:8086/api/v1/professions/products/${id}`, {
            params: {
              currency: this.currency
              }
            }, {
            headers:{
                'Authorization': this.token
              }
          }).then(response => {
            console.log(response.data)
            this.profDetails = response.data
                    }).catch(error => {
                        console.log(error)
                    })
    },

      getProfessions(){
          axios.get("http://localhost:8086/api/v1/professions/products/all", {
            params: {
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
        this.getProfessions()
        this.forceRerender()
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