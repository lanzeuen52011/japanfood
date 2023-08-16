<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    let screenWidth = ref(window.screen.availWidth);
    let screenHeight = ref(window.screen.availHeight);
    const handleWidth = () => {
      screenWidth.value = window.screen.availWidth;
    };
    const handleHeight = () => {
      screenHeight.value = window.screen.availHeight;
    };
    onMounted(() => {
      screenWidth.value = window.addEventListener("resize", handleWidth);
      screenHeight.value = window.addEventListener("resize", handleHeight);
      handleWidth();
      handleHeight();
    });
    return { screenWidth, screenHeight };
  },
};
</script>

<template>
  <section id="concept" class="container">
    <section class="concept__container">
      <header class="concept__head" data-aos="fade-right">料理理念</header>
      <p class="concept__text" data-aos="fade-right">
        　　歡迎來到 匠心料理
        日式餐廳，一個溫暖而美味的世界。在這裡，我們以精緻的料理和悉心的服務，呈現給您一場獨特的饗宴。每道菜品都蘊藏著傳統的烹飪技藝和對食材的敬意，每一口都彷彿帶您踏入了日本的風土人情。讓我們的料理喚起您對美食的熱愛，與親朋好友共享愉快的時光，感受來自東方的溫馨與美味。
      </p>
      <picture class="concept__image__container">
        <img
          class="concept__image"
          :sizes="screenWidth"
          :style="[
            `width: ${screenWidth}px;`,
            `height:${screenHeight * 2.5}px;`,
          ]"
          srcset="
            @/image/concept@1x.webp  300w,
            @/image/concept@2x.webp  800w,
            @/image/concept@3x.webp 1200w,
            @/image/concept@4x.webp 1600w,
            @/image/concept@5x.webp 1920w,
            @/image/concept@6x.webp 2560w,
            @/image/concept@7x.webp 2800w
          "
          loading="lazy"
          alt="concept"
        />
      </picture>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.container {
  background: #edeae6;
}
.concept__container {
  min-height: 100vh;
  display: flex;
  // max-width: 1150px; (width:1440px)
  // max-width: 79.8vw;
  // margin: auto;
  justify-content: center;
  align-items: center;
  position: relative;
  // padding: 5rem 0;
}
.concept__text {
  width: 450px;
  background: rgba(203, 202, 201, 0.5);
  color: #fefefe;
  // height: 50%;
  z-index: 1;
  position: absolute;
  top: 300px;
  left: 250px;
  padding: 5rem;
  // writing-mode: vertical-lr;
  text-align: justify;
  letter-spacing: 0.1rem;
  margin: 0;
}
.concept__head {
  width: 450px;
  text-align: center;
  font-size: 3.5rem;
  background: rgba(203, 202, 201, 0.5);
  color: #fefefe;
  z-index: 1;
  position: absolute;
  top: 100px;
  left: 250px;
  padding: 2.5rem;
  letter-spacing: 0.1rem;
  cursor: default;
}
.concept__image__container {
  line-height: 0;
}
.concept__image {
  min-height: 100vh;
  object-fit: cover;
  width: 100%;
  position: relative;
  min-width: 100vw;
  // right: 50px;
  z-index: 0;
}
@media screen and (min-width: 1600px) {
  .concept__head {
    width: 31.25vw;
    font-size: 2.43vw;
    top: 6.944vw;
    left: 17.36vw;
    padding: 1.736vw;
    letter-spacing: 0.694vw;
  }
  .concept__text {
    width: 31.25vw;
    // height: 50%;
    top: 20.83vw;
    left: 17.36vw;
    padding: 5rem;
    letter-spacing: 0.394vw;
    font-size: 1.5vw;
  }
  // .concept__image {
  //   max-height: 110vh;
  // }
}

@media screen and (max-width: 1268px) {
  .concept__text {
    font-size: 2rem;
  }
}
@media screen and (max-width: 970px) {
  .concept__head {
    left: 220px;
  }
  .concept__text {
    font-size: 1.8rem;
    left: 220px;
    top: 250px;
  }
}
@media screen and (max-width: 900px) {
  .concept__head {
    left: 20vw;
  }
  .concept__text {
    padding: 4rem;
    left: 20vw;
  }
}
@media screen and (max-width: 750px) {
  .concept__head {
    top: 50px;
    left: 0;
  }
  .concept__text {
    top: 200px;
    writing-mode: horizontal-tb;
    left: 0;
    padding: 3rem;
  }
}
@media screen and (max-width: 650px) {
  .concept__head {
    font-size: 2rem;
    width: 300px;
  }
  .concept__text {
    top: 150px;
    font-size: 1.2rem;
    width: 300px;
    // writing-mode: vertical-lr;
  }
}
@media screen and (max-width: 580px) {
  .concept__container {
    overflow: hidden;
  }
  .concept__head {
    padding: 1rem;
    width: 225px;
  }
  .concept__text {
    top: 150px;
    padding: 1rem;
    width: 225px;
  }
}
@media screen and (max-width: 400px) {
}
</style>
