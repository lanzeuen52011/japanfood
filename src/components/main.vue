<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <section class="main__container container">
    <header>
      <h2 class="none">主看板</h2>
    </header>
    <div class="abso">
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
      <span class="main__anime-text animation-lineu2d">滾動觀看更多</span>
      <span class="main__anime-arrow animation-lineu2d">
        <img src="@/image/arrow.png" alt="" />
      </span>
    </div>
    <div class="main__image">
      <img class="main__background" src="@/image/food.webp" alt="image" />
    </div>
  </section>
</template>

<style lang="scss">
.main__container {
  margin: 0;
  max-width: 100%;
  max-height: 800px;
  overflow: hidden;
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
  cursor: unset;
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
  top: 650px;
  height: 160px;
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
}
.main__anime-arrow {
  width: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  right: 28px;
  position: relative;
  top: 15px;
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
    height: 90%;
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
  filter: contrast(75%);
  z-index: -1;
  position: relative;
}
</style>
