<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";
import { reactive } from "vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld
    Nav,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <Nav />
  <router-view />
  <Footer />
</template>
