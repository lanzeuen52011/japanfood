<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    let preload = ref("none");
    let autoplay = ref(false);
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollBottom = window.pageYOffset + window.innerHeight;
      // 以下註解為測試用
      // console.log("總長度：", scrollHeight, "現在位置：", scrollBottom);
      if (scrollBottom / scrollHeight >= 0.6) {
        // 手動製作影片的lazyload
        preload.value = "auto";
        autoplay.value = true;
        // 一旦滿足條件，移除 scroll 事件監聽器
        window.removeEventListener("scroll", handleScroll);
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    return { preload, autoplay };
  },
};
</script>

<template>
  <section id="book" class="container">
    <article>
      <video
        class="book__article-backgroundVideo"
        loop
        muted
        playsinline
        :preload="preload"
        :autoplay="autoplay"
      >
        <!-- playsinline是蘋果系列產品的autoplay -->
        <source
          src="@/video/backward_sushi_1080.mp4"
          type="video/mp4"
          alt="cottonbro studio 拍攝的影片: https://www.pexels.com/zh-tw/video/3297825/"
        />
        <source
          src="@/video/backward_sushi_1080.webm"
          type="video/webm"
          alt="cottonbro studio 拍攝的影片: https://www.pexels.com/zh-tw/video/3297825/"
        />
        <!-- <source
          src="@/video/backward_sushi_1080.ogv"
          type="video/ogv"
          alt="cottonbro studio 拍攝的影片: https://www.pexels.com/zh-tw/video/3297825/"
        /> -->
      </video>
      <header class="head_container">
        <h2 class="head">心動不如馬上行動！</h2>
      </header>
      <div class="book__content">
        <p>不想出門？</p>
        <p>好懶！不想動？</p>
        <p>想吃好吃的？</p>
        <router-link :to="{ path: '/menu' }">點我訂餐！</router-link>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  > article {
    min-height: 100vh;
    position: relative;
  }
}
.head_container {
  display: flex;
  padding: 3rem 4rem 1rem;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
  > h2 {
    padding: 1rem;
    backdrop-filter: blur(100px); /* 使用 blur(8px) 來添加模糊效果 */
    color: #969696;
  }
  > h2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255 255 255 / 50%);
    filter: blur(10px); /* 使用模糊效果 */
    z-index: -1;
  }
}

.book__content {
  position: absolute;
  width: 100%;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  > p {
    padding: 1rem;
    backdrop-filter: blur(5px); /* 使用 blur(8px) 來添加模糊效果 */
    color: #969696;
    font-size: 5rem;
    margin: 1rem;
    cursor: default;
    &:nth-child(1) {
      // translate: -250px 50px;
      // translate: -16.129032vw 3.2258064vw;
      translate: -16.129032vw 7.5vh;
      transform: rotate(28deg);
    }
    &:nth-child(2) {
      // translate: 450px 50px;
      // translate: 27.03225vw 7.2258vw;
      translate: 27.03225vw 9vh;
      transform: rotate(-19deg);
    }
    &:nth-child(3) {
      // translate: -300px 275px;
      // translate: -19.35483vw 16.7419354vw;
      translate: -19.35483vw 26.741935vh;
      transform: rotate(-12deg);
    }
  }
  > p::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255 255 255 / 30%);
    filter: blur(10px); /* 使用模糊效果 */
    z-index: -1;
  }
  > a {
    translate: 0 -60%;
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    height: 100px;
    /* display: inline-block; */
    font-weight: 400;
    line-height: 1.5;
    cursor: pointer;
    background-color: transparent;
    padding: 3.375rem 2.75rem;
    border-radius: 0;
    position: relative;
    z-index: 1;
    transition: 0.3s;
    outline: 0;
    font-weight: 700;

    color: #fff;
    // color: #5c5c5c;
    /* color: #e0840a; */

    border: 1px solid #fff;
    // border: 1px solid #5c5c5c;
    /* border: 1px solid #f0d1a8; */
  }
  > a:hover {
    background: transparent;
    color: #fff;
    border: 1px solid var(--color-button);
  }
  > a::before,
  a:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #fff;
    z-index: -1;
  }
  > a::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform 0.4s ease;

    background: var(--color-button);
    /* background: #f0d1a8; */
  }

  > a:hover::before {
    transform-origin: 0 50%;
    transform: scaleX(1);
  }
}
.book__article-backgroundVideo {
  min-height: 100vh;
  height: 100%;
  display: flex;
  // width: 100vw;
  position: absolute;
  z-index: -1;
  opacity: 0.6;
  width: 100%;
  object-fit: cover;
}

@media screen and (min-width: 1600px) {
  .head_container {
    padding: 2.0833vw 2.7777vw 0.69444vw;
    > h2 {
      font-size: 3.47222vw;
      padding: 0.69444vw;
    }
  }
  .book__content {
    padding: 0 2.7777vw;
    > p {
      padding: 0.69444vw;
      font-size: 3.4722vw;
      margin: 0.69444vw;
    }
    > a {
      font-size: 2.0833vw;
      height: 6.94444vw;
      padding: 2.34375vw 1.9097222vw;
    }
  }
}
// @media screen and (max-width: 768px) {
//   .book__content {
//     > a {
//       background: transparent;
//       color: #fff;
//     }
//     > a::before {
//       transform: scaleX(1);
//     }
//   }
// }

@media screen and (max-width: 550px) {
  .head_container {
    > h2 {
      font-size: 3.4rem;
      white-space: nowrap;
    }
  }
  .book__content {
    > p {
      font-size: 2.4rem;
      &:nth-child(2) {
        translate: 27.03225vw 8vh;
      }
    }
    > a {
      font-size: 2.4rem;
      height: 50px;
    }
  }
}

@media screen and (max-width: 325px) {
  .head_container {
    h2 {
      font-size: 3rem;
    }
  }
}
</style>
