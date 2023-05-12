<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Nav from "@/components/nav.vue";
import Slider from "@/components/slider.vue";
import Catalog from "@/components/catalog.vue";
import Footer from "@/components/footer.vue";
import { reactive } from "vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld
    Nav,
    Slider,
    Catalog,
    Footer,
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
  <Nav />
  <Slider />
  <Catalog />
  <Footer />
</template>
