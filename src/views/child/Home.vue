<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Slider from "@/components/slider.vue";
import Main from "@/components/main.vue";
import BrandConcept from "@/components/concept.vue";

export default {
  components: {
    // HelloWorld
    // Slider,
    Main,
    BrandConcept,
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
  <Main />
  <BrandConcept />
</template>
