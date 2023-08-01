<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <section class="container">
    <article>
      <video class="book__article-backgroundVideo" autoplay loop muted>
        <source
          src="@/video/backward_sushi_1080.mp4"
          type="video/mp4"
          alt="cottonbro studio 拍攝的影片: https://www.pexels.com/zh-tw/video/3297825/"
        />
      </video>
      <header class="head_container">
        <h2 class="head">心動不如馬上行動！</h2>
      </header>
      <div class="book__content">
        <p>不想出門？</p>
        <p>好懶！不想動？</p>
        <p>想吃好吃的？</p>
        <button>快點我訂位！</button>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  > article {
    height: 52.5vw;
    position: relative;
  }
}
.head_container {
  display: flex;
  padding: 2rem 4rem 0;
  align-items: center;
  justify-content: center;
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
  height: 30vw;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  > p {
    padding: 1rem;
    backdrop-filter: blur(5px); /* 使用 blur(8px) 來添加模糊效果 */
    color: #fff;
    font-size: 5rem;
    margin: 1rem;
    cursor: default;
    &:nth-child(1) {
      // translate: -250px 50px;
      translate: -16.129032vw 3.2258064vw;
      transform: rotate(28deg);
    }
    &:nth-child(2) {
      // translate: 450px 50px;
      translate: 27.03225vw 7.2258vw;
      transform: rotate(-19deg);
    }
    &:nth-child(3) {
      // translate: -300px 275px;
      translate: -19.35483vw 16.7419354vw;
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
  > button {
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

    color: #3c3c3c;
    // color: #5c5c5c;
    /* color: #e0840a; */

    border: 1px solid #3b3a3a;
    // border: 1px solid #5c5c5c;
    /* border: 1px solid #f0d1a8; */
  }
  > button:hover {
    background: transparent;
    color: #fff;
  }
  > button::before,
  button:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #fff;
    z-index: -1;
  }
  > button::before {
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

    background: #000;
    /* background: #f0d1a8; */
  }

  > button:hover::before {
    transform-origin: 0 50%;
    transform: scaleX(1);
  }
}
.book__article-backgroundVideo {
  display: flex;
  width: 100vw;
  position: absolute;
  z-index: -1;
  opacity: 0.6;
}
</style>
