<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <section id="concept" class="container">
    <section class="concept__container">
      <div class="concept__head">我們的理念</div>
      <div class="concept__text">
        　　歡迎來到我們的日式餐廳，一個溫暖而美味的世界。在這裡，我們以精緻的料理和悉心的服務，呈現給您一場獨特的饗宴。每道菜品都蘊藏著傳統的烹飪技藝和對食材的敬意，每一口都彷彿帶您踏入了日本的風土人情。讓我們的料理喚起您對美食的熱愛，與親朋好友共享愉快的時光，感受來自東方的溫馨與美味。
      </div>
      <img class="concept__image" src="@/image/concept.webp" alt="image" />
    </section>
  </section>
</template>

<style lang="scss" scoped>
.container {
  background: #edeae6;
}
.concept__container {
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
  width: 500px;
  background: rgba(203, 202, 201, 0.5);
  color: #fefefe;
  height: 50%;
  z-index: 1;
  position: absolute;
  top: 300px;
  left: 250px;
  padding: 5rem;
  writing-mode: vertical-lr;
  text-align: justify;
  letter-spacing: 0.1rem;
}
.concept__head {
  width: 500px;
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
}
.concept__image {
  object-fit: contain;
  width: 100%;
  position: relative;
  // right: 50px;
  z-index: 0;
}
</style>
