<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <section id="main" class="main__container container">
    <header>
      <h2 class="none">主看板</h2>
    </header>
    <div class="main__article__container abso">
      <article class="main__article animation-articleContainer">
        <h3 class="main__head animation-articleText">
          品味日本之美，享受精緻料理的獨特饗宴
        </h3>
        <p class="main__text animation-articleText">
          『細緻匠心，呈現日本烹飪的完美藝術』
        </p>
      </article>
    </div>
    <div class="main__anime abso">
      <router-link
        class="main__anime-text animation-lineu2d"
        :to="{ path: '/', hash: '#concept' }"
        >滾動觀看更多</router-link
      >
      <router-link
        class="main__anime-arrow animation-lineu2d"
        :to="{ path: '/', hash: '#concept' }"
      >
        <img src="@/image/arrow.png" alt="Arrow-direction" />
        <p style="display: none">往下</p>
      </router-link>
    </div>
    <div class="main__image">
      <!-- <img class="main__background" src="@/image/main.webp" alt="image" /> -->
      <picture>
        <img
          class="main__background"
          sizes="(max-width: 1920px) 100vw, 1920px"
          srcset="
            @/image/main@1x.webp  300w,
            @/image/main@2x.webp  750w,
            @/image/main@3x.webp 1080w,
            @/image/main@4x.webp 1920w,
            @/image/main@5x.webp 2560w,
            @/image/main@6x.webp 2800w
          "
          loading="lazy"
          alt="main"
        />
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
.main__container {
  margin: 0;
  max-width: 100%;
}
.main__article__container {
  min-height: 100vh;
}
.main__article {
  padding-top: 1.5rem;
  color: #fff;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 200px;
  width: 50%;
  overflow: hidden;
}
.main__head {
  color: #fff;
  // cursor: unset;
  margin-right: 1.5rem;
  overflow: hidden;
  white-space: nowrap;
}
.main__text {
  overflow: hidden;
  white-space: nowrap;
}
.main__anime {
  align-items: unset;
  top: 85vh;
  height: 160px;
  overflow: hidden;
  z-index: 5000;
}
.main__anime-line {
  width: 2px;
  border: 2px solid #fff;
  border-radius: 5px;
  height: 20%;
  writing-mode: vertical-rl;
  white-space: nowrap;
  color: #fff;
  font-size: 2rem;
}
.main__anime-text {
  height: 20%;
  writing-mode: vertical-rl;
  white-space: nowrap;
  color: #fff;
  font-size: 1.5rem;
  overflow: hidden;
  padding-right: 0.5rem;
  letter-spacing: 0.2rem;
  position: relative;
  left: 15px;
  cursor: pointer;
}
.main__anime-arrow {
  width: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  right: 13px;
  position: relative;
  top: 15px;
  cursor: pointer;
}
.main__anime-text:visited {
  color: #fff;
}
.main__anime-arrow:visited {
  color: #fff;
}

.animation-lineu2d {
  animation-name: lineu2d;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes lineu2d {
  0% {
    height: 0%;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  70% {
    height: 75%;
  }
  71% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.animation-articleText {
  animation-name: articleText;
  animation-duration: 2.5s;
}

@keyframes articleText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animation-articleContainer {
  animation-name: articleContainer;
  animation-duration: 1.5s;
}

@keyframes articleContainer {
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
}

.main__image {
  font-size: 0;
  line-height: 0;
  filter: contrast(75%);
  z-index: -1;
  position: relative;
  .main__background {
    min-height: 100vh;
    object-fit: cover;
  }
}

@media screen and (min-width: 1600px) {
  .main__container {
    // max-height: 61vw;
    // max-height: 50vw;
    min-height: 100vh;
  }
  .abso {
    // height: 61vw;
    min-height: 100vh;
  }
  @keyframes lineu2d {
    0% {
      height: 0%;
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    70% {
      height: 12%;
    }
    71% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  .main__head {
    font-size: 2vw;
  }
  .main__article {
    font-size: 1.66vw;
    height: 14vw;
  }
  .main__anime-text {
    font-size: 1.04vw;
  }
  .main__anime-arrow {
    right: 0.85vw;
  }
}

@media screen and (max-width: 1095px) {
  .main__head {
    font-size: 2.5rem;
  }
  .main__text {
    font-size: 1.5rem;
  }
  .main__anime-text {
    font-size: 1rem;
  }
  .main__anime-arrow {
    right: 12px;
  }
  @keyframes lineu2d {
    0% {
      height: 0%;
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    70% {
      height: 60%;
    }
    71% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  // .main__image {
  //   font-size: 0;
  //   line-height: 0;
  // }
}
@media screen and (max-width: 920px) {
  .main__head {
    font-size: 2rem;
  }
  // .main__article__container {
  //   height: 600px;
  // }
  .main__anime {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  @keyframes articleContainer {
    0% {
      width: 0;
    }
    100% {
      width: 80%;
    }
  }
  .main__article {
    width: 80%;
  }
}
@media screen and (max-width: 600px) {
  .main__background {
    width: 150%; // 將圖片置中
  }
}
@media screen and (max-width: 472px) {
  .main__article {
    padding-top: 1rem;
    height: 100px;
  }
  .main__head {
    font-size: 1.8rem;
  }
  // .main__article__container {
  //   height: 500px;
  // }
  .main__anime {
    top: 400px;
  }
}
@media screen and (max-width: 415px) {
  .main__article {
    padding-top: 0;
  }
  .main__head {
    font-size: 1.3rem;
  }
  .main__text {
    font-size: 1rem;
  }
}
</style>
