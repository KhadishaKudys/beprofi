<template>
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-aos="fade-up" data-aos-duration="1000" >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" @click="select()">
      
      <img class="d-block w-100" src="../assets/static/main-page/banners/ban1.png" alt="First slide">
    </div>
    <div class="carousel-item" @click="select()">
      <img class="d-block w-100" src="../assets/static/main-page/banners/ban2.png" alt="Second slide">
    </div>
    <div class="carousel-item" @click="select()">
      <img class="d-block w-100" src="../assets/static/main-page/banners/ban3.png" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<style>

</style>

<script>

export default{
  name: 'Slideshow',
  components:{
    
  },
  data(){
    return{
    }
  },
  method:{
    select: function(){
      this.$router.push(
                    { 
                        path: '/service' 
                    }
                )
    }
  },
  mounted(){
    }
}
</script>

<style scoped src="../assets/styles/slideshow.css">

</style>