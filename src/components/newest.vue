<script>
import { onMounted, reactive } from "vue";
import axios from "axios";
export default {
  setup() {
    const foodArr = reactive({ data: [] });
    const popularArr = reactive({ data: [] });
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
    return { foodArr, popularArr };
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
            <a class="catalog__item_a" href="#">
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

  color: #5c5c5c;
  /* color: #e0840a; */

  border: 1px solid #5c5c5c;
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

  background: #000;
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

  fill: #5c5c5c;
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
.catalog__item .catalog__item_a {
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  > article {
    display: inline-block;
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
  }
}
.grid img {
  border-radius: 10px;
}
.item__text {
  max-width: 100%;
  white-space: normal;
}
.item__heading {
  margin-bottom: 0.6rem;
}
.catalog__item {
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
</style>
