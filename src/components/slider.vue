<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
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
        delay: 3000,
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
  width: 300px;
  overflow: hidden;
  // margin: 10rem auto 3rem;
  margin: calc(var(--var-first_for_navbar) + 3rem) auto 3rem;
  // border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  min-height: 210px;
  // z-index: -1;
  &.container {
    justify-content: center;
    height: auto;
    min-height: auto;
  }
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
@media screen and (max-width: 300px) {
  .slider-container {
    width: 100%;
  }
}

@media screen and (min-width: 426px) {
  .slider-container {
    // margin: 13rem auto 3rem;
    margin: calc(var(--var-first_for_navbar) + 3rem) auto 3rem;
  }
}

@media screen and (min-width: 768px) {
  .slider-container {
    width: 768px;
    // margin: 15rem auto 7rem;
    margin: calc(var(--var-first_for_navbar) + 7rem) auto 7rem;
    &.container {
      min-height: 560px;
    }
  }
  // .container {
  //   margin: 5rem auto;
  //   max-width: 1400px;
  // }
}

@media screen and (min-width: 1024px) {
  .slider-container {
    width: 1024px;
    &.container {
      min-height: 730px;
    }
  }
}
@media screen and (min-width: 1440px) {
  .slider-container {
    width: 71.11111111111111vw;
    // margin: 10.41666vw auto 6.9444444vw;
    margin: calc(var(--var-first_for_navbar) + 4.86111vw) auto 6.9444444vw;
    &.container {
      min-height: 52vw;
    }
  }
}

.image_slider {
  width: 100%;
}

picture {
  height: 100%;
}
</style>
