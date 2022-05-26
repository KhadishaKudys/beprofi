<template>
<div id="dashboard">
  <div class="row">
      <div class="col-md-5">
        <h3 id="main-text">Звонки</h3>
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
    </b-table>

  </div>
</div>
 
</template>

<script>
import axios from 'axios'

export default {
  name: 'CallsDashboardAdmin',
  components:{
  },
  data(){
    return{
      perPage: 6,
        currentPage: 1,
        output: null,
        items: [
          
        ],
        fields: [
          {
          key: 'id',
          label: '#',
        sortable: true
          }, 
          {
            key: 'name',
            label: 'ФИО'
          }, 
          {
            key: 'phone',
            label: 'Номер телефона'
          }],
      showModal: false,
      token: this.$session.get('token')
    }
  },
  props: {
        user: Object
  },
  methods: {

       getCalls(){
          axios.get("http://localhost:8086/api/v1/order/call", {
            headers:{
                'Authorization': this.token
              }
          }).then(response => {
            console.log(response.data)
            for (let res in response.data){
                this.items.push({
                  name: response.data[res].name,
                  id: response.data[res].id,
                  phone: response.data[res].phone
                })
                }
                console.log('ll', this.items)
          
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
        this.getCalls()
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