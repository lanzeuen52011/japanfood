<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Slider from "@/components/slider.vue";
import Main from "@/components/main.vue";
import BrandConcept from "@/components/concept.vue";
import Newest from "@/components/newest.vue";
import Book from "@/components/book.vue";

export default {
  components: {
    // HelloWorld
    // Slider,
    Main,
    BrandConcept,
    Newest,
    Book,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <Main />
  <BrandConcept />
  <Newest />
  <Book />
</template>
