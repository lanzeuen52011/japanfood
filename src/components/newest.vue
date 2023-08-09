<script>
import BookModal from "@/components/bookModal.vue";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
export default {
  components: {
    BookModal,
  },
  setup() {
    const foodArr = reactive({ data: [] });
    const popularArr = reactive({ data: [] });
    const modalData = reactive({ data: [] });
    axios
      .get("https://ap9.ragic.com/lanziyun/forms/1?api")
      .then((res) => {
        foodArr.data = res.data;
        // 將foodArr.data轉成Arr方便跑forEach
        foodArr.data = Object.keys(foodArr.data).map(
          (key) => foodArr.data[key]
        );
        // 將index大於(foodArr.data長度-7)的資料push到popularArr.data
        foodArr.data.forEach((value, index) => {
          if (index >= foodArr.data.length - 6) {
            return popularArr.data.push(value);
          }
        });
        // 將popularArr.data的資料依照_ragicId由大到小排序
        popularArr.data = popularArr.data.sort(
          (a, b) => b._ragicId - a._ragicId
        );
      })
      .catch((error) => {
        console.log(error);
      });
    const open = ref(false);
    const toggleOpen = (data) => {
      open.value = !open.value;
      modalData.data = data;
    };
    return { foodArr, popularArr, open, toggleOpen, modalData };
  },
};
</script>

<template>
  <section class="newest__container container">
    <header class="head_container newest__head_container">
      <h2 class="newest__head head">私房新品</h2>
      <button class="newest__text">
        <svg class="newest__svg">
          <use xlink:href="../image/menu.svg#menu"></use>
        </svg>
        讓我看看還有哪些私房菜
      </button>
    </header>
    <div>
      <article>
        <h5>grid</h5>
        <ul class="grid newest__grid">
          <li
            class="catalog__item"
            v-for="item in popularArr.data"
            :key="item._ragicId"
          >
            <a
              class="catalog__item_a newest__opacity"
              @click="toggleOpen(item)"
            >
              <img :src="item.url" :alt="item.nameeng" />
              <article>
                <h6>{{ item.nameeng }}</h6>
                <p class="item__heading">{{ item.name }}</p>
                <p class="item__text">{{ item.longdescript }}</p>
              </article></a
            >
          </li>
        </ul>
      </article>
    </div>
  </section>
  <BookModal :open="open" :toggleOpen="toggleOpen" :modalData="modalData" />
</template>

<style lang="scss" scoped>
.newest__container {
  margin-top: 2rem;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto auto;
}

.newest__head_container {
  display: flex;
  padding: 3rem 4rem 1rem;
  align-items: center;
}

.newest__head {
  font-size: 5rem;
  font-weight: 700;
  margin: 0;
}
.newest__text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3.5rem;
  height: 50px;
  font-size: 1.6rem;
  /* display: inline-block; */
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  background-color: transparent;
  padding: 0.375rem 0.75rem;
  border-radius: 0;
  position: relative;
  z-index: 1;
  transition: 0.3s;
  outline: 0;
  font-weight: 700;

  color: var(--color-button);
  /* color: #e0840a; */

  border: 1px solid var(--color-button);
  /* border: 1px solid #f0d1a8; */
}
.newest__text:hover {
  background: transparent;
  color: #fff;
}
.newest__text::before,
.newest__text:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #fff;
  z-index: -1;
}
.newest__text::before {
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

.newest__text:hover::before {
  transform-origin: 0 50%;
  transform: scaleX(1);
}
.newest__svg {
  width: 25px;
  height: 25px;
  position: relative;
  scale: 1.3;
  margin: 1rem;

  fill: var(--color-button);
  /* fill: #f0d1a8; */
}
.newest__text:hover .newest__svg {
  fill: #fff;
}

.grid .catalog__item {
  opacity: 1;
}
.grid .catalog__item:hover {
  // scale: 1.05;
  scale: 1;
  opacity: 1;
}
.newest__grid.grid {
  grid-template-columns: repeat(3, 1fr);
  padding: 0 4rem;
  grid-template-rows: 1fr 1fr;
}

.catalog__item > .color {
  bottom: 0;
  left: 10px;
  position: absolute;
  right: 0;
  top: 10px;
  height: 200px;
  width: 112px;
  z-index: 0;
}

.catalog__item:hover .catalog__item_a > article {
  display: inline-block;
}
.catalog__item .catalog__item_a {
  opacity: 0.7;
  &.newest__opacity {
    cursor: pointer;
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
  > article {
    white-space: nowrap;
    text-align: center;
    z-index: 3;
    font-weight: 700;
    display: inline-block;
    min-width: 110px;
    width: 100%;
    position: relative;
    left: 0%;
    margin: 0;
    bottom: 0;
    padding: 1rem;
    border-radius: 10px;
    height: 100px;
    background: rgba(235, 232, 228, 0.3);
    text-shadow: 5px 5px 5px rgba(255, 255, 255, 1);
    color: var(--color-body);
    > p {
      cursor: pointer;
    }
  }
}
.grid img {
  height: 200px;
  object-fit: cover;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.item__text {
  max-width: 100%;
  white-space: normal;
  font-size: 1.5rem;
}
.item__heading {
  margin-bottom: 0.6rem;
  font-size: 2.2rem;
}
.catalog__item {
  padding: 1rem;
  border-radius: 30px;
  overflow: hidden;
  opacity: 0.7;
  transition: scale 0.15s, opacity 0.15s;
  position: relative;
  opacity: 0;
  animation-name: newest_catolog-animation;
  animation-duration: 2s;
}

@keyframes newest_catolog-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 1600px) {
  .newest__container {
    margin-top: 1.388vw;
    max-width: 90.2777vw;
  }

  .newest__head_container {
    padding: 2.08333vw 2.777vw 0.7vw;
  }

  .newest__head {
    font-size: 3.4722vw;
  }
  .newest__text {
    margin-left: 1.04166vw;
    height: 3.4722vw;
    font-size: 1.111vw;
    padding: 0.2604166vw 0.520833vw;
  }
  .newest__svg {
    scale: 2.3;
    margin: 0.7vw;
  }

  .newest__grid.grid {
    padding: 0 2.77vw;
    grid-template-rows: 22.833vw 22.833vw;
  }
  .catalog__item .catalog__item_a > article {
    padding: 0.7vw;
    border-radius: 0.7vw;
    height: 7vw;
  }
  .grid img {
    border-radius: 0.7vw;
    height: 13.888vw;
  }
  .item__heading {
    margin-bottom: 0.4166vw;
    font-size: 1.5277vw;
  }
  .item__text {
    font-size: 1.04166vw;
  }
}

@media screen and (max-width: 900px) {
  .grid .catalog__item > .catalog__item_a > article {
    left: 0%;
    writing-mode: horizontal-tb;
    > .item__heading {
      font-size: 1.6rem;
    }
    > .item__text {
      font-size: 1rem;
      display: block;
    }
  }
}
@media screen and (max-width: 700px) {
  .grid .catalog__item > .catalog__item_a > article {
    left: 0%;
    writing-mode: horizontal-tb;
    height: 120px;
    > .item__heading {
      font-size: 1.4rem;
    }
    > .item__text {
      font-size: 0.8rem;
      display: block;
    }
  }
}
@media screen and (max-width: 540px) {
  .newest__head_container {
    justify-content: center;
  }
  .newest__head {
    font-size: 3.4rem;
  }
  .newest__text {
    font-size: 0.6rem;
  }
  .newest__grid.grid {
    display: flex;
    flex-direction: column;
  }
  .grid .catalog__item > .catalog__item_a {
    > img {
      opacity: 1;
    }
    > article {
      height: 140px;
      > .item__heading {
        font-size: 2.4rem;
      }
      > .item__text {
        font-size: 1.8rem;
        display: block;
      }
    }
  }
}
@media screen and (max-width: 430px) {
  .newest__head_container {
    flex-direction: column;
  }
  .newest__head {
    font-size: 4rem;
    margin-bottom: 1rem;
    letter-spacing: 0.8rem;
  }
  .newest__text {
    height: 35px;
    margin: 0;
  }
  .newest__svg[data-v-41f73a14] {
    // scale: 1;
    margin: 0rem;
  }
  .grid .catalog__item > .catalog__item_a > article {
    > .item__text {
      font-size: 1.5rem;
    }
  }
}

/* catalog */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
}

.grid li {
  list-style: none;
}

.catalog__all h2 {
  margin-top: 0;
}

.catalog__item-new > h4,
.catalog__item-populer > h4 {
  border-bottom: 1px solid #000;
}

/* .catalog__item:hover > .color{
    border-radius: 30px;
    background-image: linear-gradient(180deg,rgb(51, 51, 51) 0,rgba(51,51,51,.338) 3.5%,rgba(51,51,51,.324) 7%,rgba(51,51,51,.306) 10.35%,rgba(51,51,51,.285) 13.85%,rgba(51,51,51,.262) 17.35%,rgba(51,51,51,.237) 20.85%,rgba(51,51,51,.213) 24.35%,rgba(51,51,51,.188) 27.85%,rgba(51,51,51,.165) 31.35%,rgba(51,51,51,.144) 34.85%,rgba(51,51,51,.126) 38.35%,rgba(51,51,51,.112) 41.85%,rgba(51,51,51,.103) 45.35%,#0000001a 48.85%,rgba(51,51,51,.103) 52.35%,rgba(51,51,51,.112) 55.85%,rgba(51,51,51,.126) 59.35%,rgba(51,51,51,.144) 62.85%,rgba(51,51,51,.165) 66.35%,rgba(51,51,51,.188) 69.85%,rgba(51,51,51,.213) 73.35%,rgba(51,51,51,.237) 76.85%,rgba(51,51,51,.262) 80.35%,rgba(51,51,51,.285) 83.85%,rgba(51,51,51,.306) 87.35%,rgba(51,51,51,.324) 90.85%,rgba(51,51,51,.338) 94.35%,rgba(51,51,51,.347) 97.85%,#00000059);
    background-image: linear-gradient(180deg,#00000057 0,rgba(0,0,0,.338) 3.5%,rgba(0,0,0,.324) 7%,rgba(0,0,0,.306) 10.35%,rgba(0,0,0,.285) 13.85%,rgba(0,0,0,.262) 17.35%,rgba(0,0,0,.237) 20.85%,rgba(0,0,0,.213) 24.35%,rgba(0,0,0,.188) 27.85%,rgba(0,0,0,.165) 31.35%,rgba(0,0,0,.144) 34.85%,rgba(0,0,0,.126) 38.35%,rgba(0,0,0,.112) 41.85%,rgba(0,0,0,.103) 45.35%,#0000001a 48.85%,rgba(0,0,0,.103) 52.35%,rgba(0,0,0,.112) 55.85%,rgba(0,0,0,.126) 59.35%,rgba(0,0,0,.144) 62.85%,rgba(0,0,0,.165) 66.35%,rgba(0,0,0,.188) 69.85%,rgba(0,0,0,.213) 73.35%,rgba(0,0,0,.237) 76.85%,rgba(0,0,0,.262) 80.35%,rgba(0,0,0,.285) 83.85%,rgba(0,0,0,.306) 87.35%,rgba(0,0,0,.324) 90.85%,rgba(0,0,0,.338) 94.35%,rgba(0,0,0,.347) 97.85%,#00000059);
} */

.catalog {
  border: 2px solid var(--color-categoreis_item_tags);
  border-radius: 30px;
  margin-bottom: 1.5rem;
  padding: 0.5rem 2rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.grid ul {
  border-bottom: 2px dotted var(--color-categoreis_item_tags);
}

.catalog-1 {
  margin-top: 0;
}

@media screen and (max-width: 300px) {
  article ul.grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
@media screen and (min-width: 400px) {
  article ul.grid {
    grid-template-columns: repeat(7, minmax(50px, 1fr));
  }
}
@media screen and (max-width: 400px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  .catalog__item-new {
    > article {
      border-right: 1px dotted #000;
    }
  }
  .grid img {
    height: 130px;
  }
  .item__heading {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 376px) {
  article .grid .catalog__item > .catalog__item_a > article {
    left: 0%;
  }
}

@media screen and (max-width: 900px) {
  article .grid {
    padding: 0;
  }
  .catalog__item {
    padding: 1rem;
  }
  .catalog__all {
    border: 2px solid var(--color-categoreis_item_tags);
    border-radius: 30px;
    margin-bottom: 1.5rem;
  }
  .catalog {
    border: 0;
    border-radius: 0;
    box-shadow: 0px 0px 0px #fff;
  }
  .catalog__all h2 {
    padding-left: 1.5rem;
  }
  .item__text {
    display: none;
  }
}

@media screen and (min-width: 1440px) {
  .catalog__item {
    padding: 0.69444vw;
    border-radius: 2.08333vw;
  }

  .grid img {
    height: 13.888vw;
    box-shadow: 0.347222vw 0.347222vw 0.69444vw rgba(0, 0, 0, 0.2);
    border-radius: 2.08333vw;
  }

  /* .catalog__item:hover > .color{
    border-radius: 30px;
    background-image: linear-gradient(180deg,rgb(51, 51, 51) 0,rgba(51,51,51,.338) 3.5%,rgba(51,51,51,.324) 7%,rgba(51,51,51,.306) 10.35%,rgba(51,51,51,.285) 13.85%,rgba(51,51,51,.262) 17.35%,rgba(51,51,51,.237) 20.85%,rgba(51,51,51,.213) 24.35%,rgba(51,51,51,.188) 27.85%,rgba(51,51,51,.165) 31.35%,rgba(51,51,51,.144) 34.85%,rgba(51,51,51,.126) 38.35%,rgba(51,51,51,.112) 41.85%,rgba(51,51,51,.103) 45.35%,#0000001a 48.85%,rgba(51,51,51,.103) 52.35%,rgba(51,51,51,.112) 55.85%,rgba(51,51,51,.126) 59.35%,rgba(51,51,51,.144) 62.85%,rgba(51,51,51,.165) 66.35%,rgba(51,51,51,.188) 69.85%,rgba(51,51,51,.213) 73.35%,rgba(51,51,51,.237) 76.85%,rgba(51,51,51,.262) 80.35%,rgba(51,51,51,.285) 83.85%,rgba(51,51,51,.306) 87.35%,rgba(51,51,51,.324) 90.85%,rgba(51,51,51,.338) 94.35%,rgba(51,51,51,.347) 97.85%,#00000059);
    background-image: linear-gradient(180deg,#00000057 0,rgba(0,0,0,.338) 3.5%,rgba(0,0,0,.324) 7%,rgba(0,0,0,.306) 10.35%,rgba(0,0,0,.285) 13.85%,rgba(0,0,0,.262) 17.35%,rgba(0,0,0,.237) 20.85%,rgba(0,0,0,.213) 24.35%,rgba(0,0,0,.188) 27.85%,rgba(0,0,0,.165) 31.35%,rgba(0,0,0,.144) 34.85%,rgba(0,0,0,.126) 38.35%,rgba(0,0,0,.112) 41.85%,rgba(0,0,0,.103) 45.35%,#0000001a 48.85%,rgba(0,0,0,.103) 52.35%,rgba(0,0,0,.112) 55.85%,rgba(0,0,0,.126) 59.35%,rgba(0,0,0,.144) 62.85%,rgba(0,0,0,.165) 66.35%,rgba(0,0,0,.188) 69.85%,rgba(0,0,0,.213) 73.35%,rgba(0,0,0,.237) 76.85%,rgba(0,0,0,.262) 80.35%,rgba(0,0,0,.285) 83.85%,rgba(0,0,0,.306) 87.35%,rgba(0,0,0,.324) 90.85%,rgba(0,0,0,.338) 94.35%,rgba(0,0,0,.347) 97.85%,#00000059);
} */
  .catalog__item > .color {
    left: 0.69444vw;
    top: 0.69444vw;
    height: 13.8888vw;
    width: 7.7777vw;
  }
  .item__heading {
    font-size: 1.52777vw;
  }

  .item__text {
    font-size: 1.041666vw;
  }

  .catalog {
    border: 0.138888vw solid var(--color-categoreis_item_tags);
    border-radius: 2.08333vw;
    margin-bottom: 1.041666vw;
    padding: 0.347222vw 1.388888vw;
    box-shadow: 0.347222vw 0.347222vw 0.694444vw rgba(0, 0, 0, 0.2);
  }
  .grid ul {
    border-bottom: 0.13888vw dotted var(--color-categoreis_item_tags);
  }
}
</style>
