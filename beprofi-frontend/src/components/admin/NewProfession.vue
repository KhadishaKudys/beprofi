<template>
  <div id="add-post">
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  <h5>Новая профессия</h5>
                </slot>
                
              </div> 

              <div class="modal-body">
                <slot name="body">

                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">{{ $t('modal.general') }}</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">{{ $t('modal.image') }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">{{ $t('modal.syllabusProfession') }}</a>
                </li>
                </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                      <div class="row">
                        <div class="col-md-6">
                              <div class="row">
                                <div class="col-md-4 col-sm-4 col-xs-4 form">
                                  <label for="category">{{ $t('modal.childCategory') }}:</label>
                                </div>
                                  <div class="col-md-8 col-sm-8 col-xs-8">
                                    <select v-model="childCategory" id="childCategory">
                                    <option v-for="category in $t('menu.professions.services')" :key="category.id" :value="category.id">{{ category.title }}</option>
                                  </select> 
                                  </div>
                                </div>
                                <div class="row">
                                <div class="col-md-4 form">
                                  <label for="article">{{ $t('modal.article') }}:</label>
                                </div>
                                  <div class="col-md-8">
                                    <input type="text" id="article" v-model="article"/>
                                  </div>
                                </div>
                                <div class="row">
                                <div class="col-md-4 form">
                                  <label for="name">{{ $t('modal.name') }}:</label>
                                </div>
                                  <div class="col-md-8">
                                    <input type="text" id="name" v-model="name"/>
                                  </div>
                                </div>
                                <div class="row">
                                <div class="col-md-4 form">
                                  <label for="language">{{ $t('main.language') }}:</label>
                                </div>
                                  <div class="col-md-8">
                                    <select v-model="language" id="language">
                                      <option v-for="language in $t('main.languages')" :key="language.id" :value="language.id">{{ language.title }}</option>
                                    </select>
                                  </div>
                                </div>
                                  
                                </div>
                                <div class="col-md-6">
                                  <div class="row">
                                <div class="col-md-4 form">
                                  <label for="price">{{ $t('modal.price') }}:</label>
                                </div>
                                  <div class="col-md-8">
                                      <input type="text" id="price" v-model="price"/>
                                      <label for="currency">{{ $t('modal.currency') }}:</label>
                                      <select v-model="currency" id="currency">
                                        <option>USD</option>
                                        <option>KZT</option>
                                      </select>
                                  </div>
                                </div>
                                <div class="row">
                                <div class="col-md-4 form">
                                  <label for="discount">{{ $t('modal.discount') }}:</label>
                                </div>
                                  <div class="col-md-8" style="display: flex">
                                    <input type="text" id="discount" v-model="discount">
                                    <span class="badge badge-light">%</span>
                                    
                                  </div>
                                </div>
                                <div class="row">
                                <div class="col-md-4 form">
                                  <label for="level">{{ $t('modal.level') }}:</label>
                                </div>
                                  <div class="col-md-8">
                                    <select v-model="level" id="level">
                                      <option v-for="level in $t('modal.levels')" :key="level.id" :value="level.id">{{ level.title }}</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row">
                                <div class="col-md-4 form">
                                  <label for="level">{{ $t('courses.recommended') }}:</label>
                                </div>
                                  <div class="col-md-8">
                                    <input type="checkbox" @click="recommended=true"/>
                                  </div>
                                </div>
                                
                                </div>
                                </div>
                              </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    
                      
                        <div class="row">
                          <div class="col-md-6">
                            <div id="image-upload">
                              <div v-if="!image">
                                <input type="file" @change="onFileChange" id="image" class="image-upload">
                              </div>
                              <div v-else class="img-form-div">
                                <img :src="image" class="img-form"/>
                                <button @click="removeImage">{{ $t('modal.deleteImage') }}</button>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label for="overview">{{ $t('modal.overviewProfession') }}:</label>
                            <textarea type="text" v-model="overview" id="overview"/>
                          </div>
                        </div>
                        
                  </div>
                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                      <div class="syllab" v-for="s in syllabus" :key="s.title">
                        <div class="group">
                          <div class="row">
                            <div class="col-md-2" style="text-align:right">
                              <label for="name-syllabus">Заголовок секции:</label>
                            </div>
                            <div class="col-md-10">
                              <input type="text" id="name-syllabus" value="1" class="syllabus-input" v-model="syllabusTitle"/>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-2" style="text-align:right">
                              <label for="name-syllabus">{{ $t('modal.nameSyllabus') }}:</label>
                            </div>
                            <div class="col-md-10">
                              <input type="text" id="name-syllabus" class="syllabus-input" v-model="syllabus[0].title"/>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-2" style="text-align:right">
                              <label for="name-syllabus">{{ $t('modal.overviewSyllabus') }}:</label>
                            </div>
                            <div class="col-md-10">
                              <textarea type="text" v-model="syllabus[0].syllabuses[0]"/>
                            </div>
                          </div>
                      
                    
                        </div>
          
                      </div>
                      <button @click="addModule()">+</button>

                    </div>
                  </div>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                    <button class="modal-default-button-1" @click="$emit('close')">
                    {{ $t('modal.cancel') }}
                  </button>
                  <button class="modal-default-button" @click="addItem()">
                    {{ $t('modal.add') }}
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
            name: '',
            price: '',
            overview: '',
            parentCategory: 'professions',
            currency: '',
            discount: '',
            image: '',
            language: '',
            level: '',
            article: '',
            recommended: false,
            childCategory: '',
            files: null,
            syllabus: [
              {
                title: '',
                syllabuses: []
              },
            ],
            product: {},
            syllabusTitle: '',
            token: localStorage.getItem('token')
        }
    },
    methods: {
      addModule(){
        this.syllabus.push(Vue.util.extend({}, this.syllabus));
      },

      addItem(){
        let formData = new FormData();
        console.log(this.syllabus)
        this.product = {
          name: this.name,
          price: this.price,
          article: this.article,
          childCategory: this.childCategory,
          category: this.category,
          level: this.level,
          language: this.language,
          currency: this.currency,
          overview: this.overview,
          parentCategory: this.parentCategory,
          syllabus: this.syllabus,
          discount: this.discount,
          syllabus_title: this.syllabusTitle,
          isRecommended: this.recommended
        }
        console.log(this.product)
        formData.append("product", JSON.stringify(this.product));
      formData.append("image", this.files);
      console.log(...formData.entries());
      const waitTime = 25000;
            setTimeout(() => console.log("Request taking a long time"), waitTime);
            axios.post('http://localhost:8086/api/v1/professions/products/save', formData, {
              headers:{
                'Content-Type': 'multipart/form-data',
                'Authorization': this.token
              }
            }).then(response => {
                console.log(response.data)
                this.$router.go()
                        }).catch(error => {
                            console.log(error)
                            alert('Error')
                        })
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      var file = e.target.files[0]
      this.files = file;
      console.log(this.files)
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
    },
    mounted() {

    },
}
</script>



<style scoped src='../../assets/styles/admin/new-item.css'>

</style>