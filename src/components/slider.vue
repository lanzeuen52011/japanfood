<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    //   const onSwiper = (swiper) => {
    //     console.log(swiper);
    //   };
    //   const onSlideChange = () => {
    //     console.log('slide change');
    //   };

    return {
      // onSwiper,
      // onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>

<template>
  <section class="slider-container container swiper">
    <h2 class="slider">slider</h2>
    <swiper
      :modules="modules"
      :space-between="50"
      navigation
      loop
      :autoplay="{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      class="image-container swiper-wrapper"
      :slides-per-view="1"
    >
      <!-- :autoplay="{延遲2秒,當滑鼠進到swiper時停止滑動,按過選項後仍然持續自動輪播}" -->
      <swiper-slide
        ><img
          class="image_slider swiper-slide"
          src="@/image/food1.webp"
          alt="image"
      /></swiper-slide>
      <swiper-slide
        ><img
          class="image_slider swiper-slide"
          src="@/image/food2.webp"
          alt="image"
      /></swiper-slide>
      <swiper-slide
        ><img
          class="image_slider swiper-slide"
          src="@/image/food3.webp"
          alt="image"
      /></swiper-slide>
      <swiper-slide
        ><img
          class="image_slider swiper-slide"
          src="@/image/food4.webp"
          alt="image"
      /></swiper-slide>
      <swiper-slide
        ><img
          class="image_slider swiper-slide"
          src="@/image/food5.webp"
          alt="image"
      /></swiper-slide>
      ...
    </swiper>
  </section>
</template>

<style lang="scss">
/* image slider */
:root {
  --swiper-theme-color: #fff;
}
.slider {
  display: none;
  --swiper-theme-color: #fff;
}

.slider-container {
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  // border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: -1;
}

.image-container {
  display: block;
  display: flex;
  transition: transform 0.4s ease-in-out;
}
.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  opacity: 0.8;
}
.container {
  display: block;
  margin: 3rem auto;
  justify-content: center;
}

@media screen and (min-width: 768px) {
  .slider-container {
    width: 80%;
  }
  .container {
    margin: 5rem auto;
    max-width: 1400px;
  }
  .slider-container {
    margin: 0rem auto;
  }
}

// @media screen and (min-width: 1024px) {
//   .slider-container {
//     width: 1024px;
//   }
// }

.image_slider {
  width: 100%;
}

picture {
  height: 100%;
}
</style>
