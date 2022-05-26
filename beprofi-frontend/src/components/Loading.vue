<template>
  <div id="loading">
    <img
      class="img"
      src="../assets/static/backgrounds/additional/loader.gif"
      alt="loading..."
      width="200"
    />
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style>
#loading {
  position: absolute;
  z-index: 1000;
  background-color: white;
  height: 300vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
}
.img {
  position: relative;
  margin: auto;
}
</style>