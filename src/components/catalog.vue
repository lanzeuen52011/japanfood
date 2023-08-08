<script>
import BookModal from "@/components/bookModal.vue";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
export default {
  components: {
    BookModal,
  },
  props: {
    foodArr: {
      type: Array,
      default: () => [], //這樣裡面一個大括號即代表return。
    },
  },
  setup(props) {
    const foodArr = reactive({ data: [] });
    const friedArr = reactive({ data: [] });
    const stewArr = reactive({ data: [] });
    const stirfryArr = reactive({ data: [] });
    const coldArr = reactive({ data: [] });
    const modalData = reactive({ data: [] });
    axios.get("https://ap9.ragic.com/lanziyun/forms/1?api").then((res) => {
      foodArr.data = res.data;
      foodArr.data = Object.keys(foodArr.data).map((key) => foodArr.data[key]);
      friedArr.data = foodArr.data.filter((method) => method.method == "fried");
      stewArr.data = foodArr.data.filter((method) => method.method == "stew");
      stirfryArr.data = foodArr.data.filter(
        (method) => method.method == "stirfry"
      );
      coldArr.data = foodArr.data.filter((method) => method.method == "cold");
      // console.log(foodArr.data);
      // console.log(friedArr.data);
    });
    const open = ref(false);
    const toggleOpen = (data) => {
      open.value = !open.value;
      modalData.data = data;
    };
    return {
      friedArr,
      stewArr,
      stirfryArr,
      coldArr,
      open,
      toggleOpen,
      modalData,
    };
  },
};
</script>

<template>
  <section class="catalog__all catalog__container">
    <h2>私房菜單</h2>
    <section class="catalog catalog__container catalog-1" id="fried">
      <h3>炸物類</h3>
      <article class="grid">
        <div class="catalog__item-new">
          <h4>暖心餐點</h4>
          <article>
            <h5>grid</h5>
            <ul class="grid">
              <li
                class="catalog__item"
                v-for="item in friedArr.data"
                :key="item._ragicId"
              >
                <button class="catalog__item_info" @click="toggleOpen(item)">
                  <article>
                    <h6>{{ item.nameeng }}</h6>
                    <p class="item__heading">{{ item.name }}</p>
                    <p class="item__text">{{ item.descript }}</p>
                  </article>
                  <img :src="item.url" :alt="item.nameeng" />
                </button>
              </li>
            </ul>
          </article>
        </div>
      </article>
    </section>
    <section class="catalog catalog__container" id="stew">
      <h3>燉煮類</h3>
      <article class="grid">
        <div class="catalog__item-new">
          <h4>暖心餐點</h4>
          <article>
            <h5>grid</h5>
            <ul class="grid">
              <li
                class="catalog__item"
                v-for="item in stewArr.data"
                :key="item._ragicId"
              >
                <button class="catalog__item_info" @click="toggleOpen(item)">
                  <article>
                    <h6>{{ item.nameeng }}</h6>
                    <p class="item__heading">{{ item.name }}</p>
                    <p class="item__text">{{ item.descript }}</p>
                  </article>
                  <img :src="item.url" :alt="item.nameeng" />
                </button>
              </li>
            </ul>
          </article>
        </div>
      </article>
    </section>
    <section class="catalog catalog__container" id="stirfry">
      <h3>煎炒類</h3>
      <article class="grid">
        <div class="catalog__item-new">
          <h4>暖心餐點</h4>
          <article>
            <h5>grid</h5>
            <ul class="grid">
              <li
                class="catalog__item"
                v-for="item in stirfryArr.data"
                :key="item._ragicId"
              >
                <button class="catalog__item_info" @click="toggleOpen(item)">
                  <article>
                    <h6>{{ item.nameeng }}</h6>
                    <p class="item__heading">{{ item.name }}</p>
                    <p class="item__text">{{ item.descript }}</p>
                  </article>
                  <img :src="item.url" :alt="item.nameeng" />
                </button>
              </li>
            </ul>
          </article>
        </div>
      </article>
    </section>
    <section class="catalog catalog__container" id="cold">
      <h3>冷盤類</h3>
      <article class="grid">
        <div class="catalog__item-new">
          <h4>暖心餐點</h4>
          <article>
            <h5>grid</h5>
            <ul class="grid">
              <li
                class="catalog__item"
                v-for="item in coldArr.data"
                :key="item._ragicId"
              >
                <button class="catalog__item_info" @click="toggleOpen(item)">
                  <article>
                    <h6>{{ item.nameeng }}</h6>
                    <p class="item__heading">{{ item.name }}</p>
                    <p class="item__text">{{ item.descript }}</p>
                  </article>
                  <img :src="item.url" :alt="item.nameeng" />
                </button>
              </li>
            </ul>
          </article>
        </div>
      </article>
    </section>
  </section>
  <BookModal :open="open" :toggleOpen="toggleOpen" :modalData="modalData" />
</template>

<style lang="scss">
.catalog__container {
  min-height: auto;
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

.catalog__item {
  padding: 1rem;
  border-radius: 30px;
  overflow: hidden;
  opacity: 0.7;
  transition: scale 0.15s, opacity 0.15s;
  position: relative;
  outline: 0;
}

.grid img {
  height: 200px;
  object-fit: cover;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
}

/* .catalog__item:hover > .color{
    border-radius: 30px;
    background-image: linear-gradient(180deg,rgb(51, 51, 51) 0,rgba(51,51,51,.338) 3.5%,rgba(51,51,51,.324) 7%,rgba(51,51,51,.306) 10.35%,rgba(51,51,51,.285) 13.85%,rgba(51,51,51,.262) 17.35%,rgba(51,51,51,.237) 20.85%,rgba(51,51,51,.213) 24.35%,rgba(51,51,51,.188) 27.85%,rgba(51,51,51,.165) 31.35%,rgba(51,51,51,.144) 34.85%,rgba(51,51,51,.126) 38.35%,rgba(51,51,51,.112) 41.85%,rgba(51,51,51,.103) 45.35%,#0000001a 48.85%,rgba(51,51,51,.103) 52.35%,rgba(51,51,51,.112) 55.85%,rgba(51,51,51,.126) 59.35%,rgba(51,51,51,.144) 62.85%,rgba(51,51,51,.165) 66.35%,rgba(51,51,51,.188) 69.85%,rgba(51,51,51,.213) 73.35%,rgba(51,51,51,.237) 76.85%,rgba(51,51,51,.262) 80.35%,rgba(51,51,51,.285) 83.85%,rgba(51,51,51,.306) 87.35%,rgba(51,51,51,.324) 90.85%,rgba(51,51,51,.338) 94.35%,rgba(51,51,51,.347) 97.85%,#00000059);
    background-image: linear-gradient(180deg,#00000057 0,rgba(0,0,0,.338) 3.5%,rgba(0,0,0,.324) 7%,rgba(0,0,0,.306) 10.35%,rgba(0,0,0,.285) 13.85%,rgba(0,0,0,.262) 17.35%,rgba(0,0,0,.237) 20.85%,rgba(0,0,0,.213) 24.35%,rgba(0,0,0,.188) 27.85%,rgba(0,0,0,.165) 31.35%,rgba(0,0,0,.144) 34.85%,rgba(0,0,0,.126) 38.35%,rgba(0,0,0,.112) 41.85%,rgba(0,0,0,.103) 45.35%,#0000001a 48.85%,rgba(0,0,0,.103) 52.35%,rgba(0,0,0,.112) 55.85%,rgba(0,0,0,.126) 59.35%,rgba(0,0,0,.144) 62.85%,rgba(0,0,0,.165) 66.35%,rgba(0,0,0,.188) 69.85%,rgba(0,0,0,.213) 73.35%,rgba(0,0,0,.237) 76.85%,rgba(0,0,0,.262) 80.35%,rgba(0,0,0,.285) 83.85%,rgba(0,0,0,.306) 87.35%,rgba(0,0,0,.324) 90.85%,rgba(0,0,0,.338) 94.35%,rgba(0,0,0,.347) 97.85%,#00000059);
} */
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

.grid .catalog__item:hover {
  scale: 1.1;
  opacity: 1;
}

.catalog__item > .catalog__item_info {
  border: 0;
  background: 0;
  cursor: pointer;
  > article {
    display: none;
    position: absolute;
    bottom: 5%;
    left: 20%;
    color: #fff;
    font-weight: 700;
    z-index: 3;
    white-space: nowrap;
    text-align: center;
    margin: 2rem auto;
    min-width: 110px;
    /* text-shadow:5px 5px 10px rgba(0, 0, 0, 1); */
    text-shadow: -5px -5px 10px rgba(0, 0, 0, 1);
    > p {
      cursor: pointer;
    }
  }
}

.catalog__item:hover .catalog__item_info > article {
  display: inline-block;
}

.item__heading {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 700;
}

.item__text {
  max-width: 112px;
  font-size: 1.5rem;
}

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
  div article .grid .catalog__item > .catalog__item_info > article {
    left: 0%;
  }
  article ul.grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
@media screen and (max-width: 350px) {
  div article .grid .catalog__item > .catalog__item_info > article {
    left: 10%;
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
  article .grid .catalog__item > .catalog__item_info > article {
    writing-mode: unset;
    left: 5%;
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
  article .grid .catalog__item > .catalog__item_info > article {
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
  .grid .catalog__item > .catalog__item_info > article {
    left: 24%;
    display: inline-block;
    writing-mode: vertical-lr;
  }
}

@media screen and (max-width: 1350px) {
  .catalog__item > .catalog__item_info > article {
    left: 14%;
  }
}

@media screen and (max-width: 1024px) {
  .catalog__item > .catalog__item_info > article {
    left: 7%;
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
  .catalog__item > .catalog__item_info > article {
    min-width: 7.63888vw;
    text-shadow: -0.347222vw -0.347222vw 0.69444vw rgba(0, 0, 0, 1);
  }
  .item__heading {
    font-size: 1.52777vw;
  }

  .item__text {
    max-width: 7.7777vw;
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
