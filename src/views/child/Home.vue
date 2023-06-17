<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Slider from "@/components/slider.vue";
import Homepage from "@/components/homepage.vue";

export default {
  components: {
    // HelloWorld
    Slider,
    Homepage,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- </div> -->
  <!-- <Slider /> -->
  <Homepage />
</template>
