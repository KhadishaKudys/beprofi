<template>
<div id="dashboard">
  <div class="row">
      <div class="col-md-5">
        <h3 id="main-text">Заказы</h3>
      </div>
  </div>

<div class="row">
  <div class="col-md-6">
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Услуги</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Курсы</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Профессии</a>
  </li>
</ul>
  </div>
</div>


    <br>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

    <b-table responsive="md"
      id="my-table"
      :fields="fields"
      :items="services"
    >

   <template v-slot:cell(phone)="{ item: { phone }}">
      <b-link :href="`tel:${phone}`">{{phone}}</b-link>
    </template> 

    <template v-slot:cell(email)="{ item: { email }}">
      <b-link :href="`mailto:${email}`">{{email}}</b-link>
    </template> 

    <template v-slot:cell(product_id)="{ item: { product_id }}">
      <b-link :href="`/${$i18n.locale}/about-service/${product_id}`">{{product_id}}</b-link>
    </template> 

    <template v-slot:cell(status)="{ item: { status, id }}">
      <b-badge variant="danger">{{status}}</b-badge>
      <img src="../../../assets/static/icons/admin-panel/edit.png" width="25px" @click="editing(id)"/>
      <ChangeOrderStatus v-if="showModal" @close="showModal=false"/>
    </template>
    </b-table>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
<div class="overflow-hidden">

    <b-table responsive="md"
      id="my-table-1" 
      :fields="fields"
      :items="courses"
      
    >

    <template v-slot:cell(phone)="{ item: { phone }}">
      <b-link :href="`tel:${phone}`">{{phone}}</b-link>
    </template> 

    <template v-slot:cell(email)="{ item: { email }}">
      <b-link :href="`mailto:${email}`">{{email}}</b-link>
    </template> 

    <template v-slot:cell(product_id)="{ item: { product_id }}">
      <b-link :href="`/${$i18n.locale}/about-course/${product_id}`">{{product_id}}</b-link>
    </template> 

<template v-slot:cell(status)="{ item: { status, id }}">
     
  <b-badge variant="danger">{{status}}</b-badge>
  <img src="../../../assets/static/icons/admin-panel/edit.png" width="25px" @click="editing2(id)"/>
  <change-order-status v-if="showModal2" @close="showModal2=false"/>
      </template>
    </b-table>
</div>

  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
    
    <b-table responsive="md"
      id="my-table-2"
      :fields="fields"
      :items="professions"
    >

    <template v-slot:cell(phone)="{ item: { phone }}">
      <b-link :href="`tel:${phone}`">{{phone}}</b-link>
    </template> 

    <template v-slot:cell(email)="{ item: { email }}">
      <b-link :href="`mailto:${email}`">{{email}}</b-link>
    </template> 

    <template v-slot:cell(product_id)="{ item: { product_id }}">
      <b-link :href="`/${$i18n.locale}/about-profession/${product_id}`">{{product_id}}</b-link>
    </template> 

    <template v-slot:cell(status)="{ item: { status, id }}">
      <b-badge variant="danger">{{status}}</b-badge>
      <img src="../../../assets/static/icons/admin-panel/edit.png" width="25px" @click="editing3(id)"/>
      <ChangeOrderStatus v-if="showModal3" @close="showModal3=false"/>
    </template>
  </b-table>

  </div>
</div>

</div>
 
</template>

<script>
import axios from 'axios'
import ChangeOrderStatus from '../../../components/admin/ChangeOrderStatus.vue'

export default {
  name: 'OrdersDashboardAdmin',
  components:{
    ChangeOrderStatus
  },
  data(){
    return{
      perPage: 3,
        currentPage: 1,
        currentPage1: 1,
        currentPage2: 1,
        output: null,
        services: [],
        courses: [],
        professions: [],
        items: [
          
        ],
        showModal: false,
        showModal2: false,
        showModal3: false,
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
          }, 
          {
            key: 'email',
            label: 'Email'
          }, 
          {
            key: 'product_id',
            label: 'Товар'
          }, 
          {
            key: 'code',
            label: 'Промокод'
          },
          { 
            key: 'status',
            label: 'Статус'
          }],
      token: this.$session.get('token'),
      orderId: ''
    }
  },
  props: {
        user: Object
  },
  methods: {

       getCourseOrders(){
          axios.get("http://localhost:8086/api/v1/order/education", {
            headers:{
                'Authorization': this.token
              }
          }).then(response => {
            console.log(response.data)
            this.courses = response.data;
                    }).catch(error => {
                        console.log(error)
                    })
    },

    getServiceOrders(){
          axios.get("http://localhost:8086/api/v1/order/services", {
            headers:{
                'Authorization': this.token
              }
          }).then(response => {
            console.log(response.data)
            this.services = response.data;
                    }).catch(error => {
                        console.log(error)
                    })
    },

    getProfessionOrders(){
          axios.get("http://localhost:8086/api/v1/order/professions", {
            headers:{
                'Authorization': this.token
              }
          }).then(response => {
            console.log(response.data)
            this.professions = response.data;
                    }).catch(error => {
                        console.log(error)
                    })
    },

    editing(id){
      this.orderId = id;
      localStorage.setItem('order_id', id);
      localStorage.setItem('type', 'services')
      this.showModal = true;
    },

    editing2(id){
      console.log(id)
      this.orderId = id;
      localStorage.setItem('order_id', id);
      localStorage.setItem('type', 'courses')
      this.showModal2 = true;
    },

    editing3(id){
      this.orderId = id;
      localStorage.setItem('order_id', id);
      localStorage.setItem('type', 'professions')
      this.showModal3 = true;
    },

        forceRerender() {
          this.renderComponent = false;

          this.$nextTick(() => {
            this.renderComponent = true;
          });
        },
  },
    mounted() {
        this.getCourseOrders()
        this.getServiceOrders()
        this.getProfessionOrders()
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