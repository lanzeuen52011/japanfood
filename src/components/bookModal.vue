<script>
import NotificationModal from "@/components/notificationModal.vue";
import { onMounted, onUnmounted, reactive, ref } from "vue";
export default {
  components: {
    NotificationModal,
  },
  props: {
    open: {
      type: Boolean,
      default: true,
    },
    toggleOpen: {
      type: Function,
      default: () => {},
    },
    modalData: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const bookNumber = ref(0); // 訂購數量
    const booked = ref(false); // 訂購頁面
    const bookStatus = ref(false); // 訂購的處理狀態
    const bookResult = ref(); // 訂購的處理結果
    const noticlass = ref(""); // 回傳給notification的訊息
    const borderRWD = ref(false);
    let screenWidth = ref();
    var timer = null;
    let bookinfo = reactive([]);
    let bookjson = JSON.parse(localStorage.getItem("bookinfo"));

    if (bookjson != null) {
      // console.log(bookjson.length);
      bookinfo = bookjson;
      // console.log(bookinfo);
    }

    const bookItem = (item) => {
      // 下訂單
      if (bookNumber.value >= 1) {
        // 訂貨數量不得為0
        booked.value = true;
        timer = setTimeout(() => {
          bookStatus.value = true;
        }, 1000);
        bookResult.value = true;
        noticlass.value = "加入購物車成功";

        if (bookinfo.length != 0) {
          // 原本就有訂單的話，執行以下邏輯
          let sameGoods = bookinfo.some((element) => {
            // 有相同商品就加在一起
            if (element.goods == item._ragicId) {
              element.quantity += bookNumber.value;
              element.price = item.price * element.quantity;
              return true;
            }
          });
          if (sameGoods != true) {
            // 沒相同商品就新增商品種類
            bookinfo[bookinfo.length] = {
              goods: item._ragicId,
              name: item.name,
              nameeng: item.nameeng,
              desc: item.descript,
              img: item.url,
              quantity: bookNumber.value,
              price: bookNumber.value * item.price,
            };
          }
        } else {
          // 原本沒有訂單的話，就創造新訂單
          bookinfo[bookinfo.length] = {
            goods: item._ragicId,
            name: item.name,
            nameeng: item.nameeng,
            desc: item.descript,
            img: item.url,
            quantity: bookNumber.value,
            price: bookNumber.value * item.price,
          };
        }
        // 存到LocalStorage
        localStorage.setItem("bookinfo", JSON.stringify(bookinfo));
      } else {
        booked.value = true;

        timer = setTimeout(() => {
          bookStatus.value = true;
        }, 1000);

        bookResult.value = false;
        noticlass.value = "加入購物車失敗";
      }
      // clearTimeout(timer);
    };

    const handlebookStatus = () => {
      bookStatus.value = !bookStatus.value;
    };
    const handlebook = () => {
      booked.value = false;
    };

    const Incre = () => {
      bookNumber.value++;
    };
    const Decre = () => {
      if (bookNumber.value >= 1) {
        bookNumber.value--;
      }
    };
    const handleRWD = () => {
      if (window.screen.availWidth <= 768) {
        borderRWD.value = true;
      } else {
        borderRWD.value = false;
      }
      screenWidth.value = window.screen.availWidth;
    };
    onMounted(() => {
      screenWidth.value = window.addEventListener("resize", handleRWD);
      handleRWD();
    });

    onUnmounted(() => {
      //倒數計時結束前進行手動跳轉，而手動跳轉後，停止計時。
      clearTimeout(timer);
    });
    return {
      props,
      bookNumber,
      bookItem,
      Incre,
      Decre,
      handlebook,
      booked,
      bookStatus,
      bookResult,
      handlebookStatus,
      noticlass,
      handleRWD,
      borderRWD,
      screenWidth,
    };
  },
};
</script>

<template>
  <!-- <div v-if="props.open" class="modal_background"></div> -->
  <div
    v-if="props.open"
    @click="props.toggleOpen"
    class="modal__background"
  ></div>
  <div v-if="props.open" class="modal">
    <li class="catalog__item modal_item">
      <a class="catalog__item_block">
        <p class="item__heading">{{ props.modalData.data.name }}</p>
        <img
          class="modal_img"
          :src="props.modalData.data.url"
          :alt="props.modalData.data.nameeng"
        />
        <article>
          <h6>{{ props.modalData.data.nameeng }}</h6>
          <form action="" class="bookNumber__container">
            <button
              data-tooltip="加入購物車！"
              @click.prevent="bookItem(props.modalData.data)"
              class="border border__first custom-tooltip"
            >
              <svg class="bookNumber__cart">
                <use xlink:href="@/image/cart.svg#cart"></use>
              </svg>
            </button>
            <div class="bookNumber__control">
              <button
                :class="[
                  'bookNumber__button',
                  'border',
                  { border__first: borderRWD },
                ]"
                @click.prevent="Decre"
              >
                -
              </button>
              <input class="border" type="text" :value="bookNumber" />
              <button class="bookNumber__button border" @click.prevent="Incre">
                +
              </button>
            </div>
            <p class="item__price" v-if="!bookNumber">
              單價 {{ props.modalData.data.price }} 元
            </p>
            <p class="item__price" v-if="bookNumber">
              {{ props.modalData.data.price }} 元 * {{ bookNumber }}個 =
              {{ props.modalData.data.price * bookNumber }} 元
            </p>
          </form>
          <p class="item__text modal__text">
            {{ props.modalData.data.longdescript }}
          </p>
        </article>
      </a>
    </li>
    <button @click.prevent="props.toggleOpen">X</button>
  </div>
  <NotificationModal
    :handlebook="handlebook"
    :booked="booked"
    :bookStatus="bookStatus"
    :bookResult="bookResult"
    :handlebookStatus="handlebookStatus"
    :noticlass="noticlass"
  />
</template>

<style lang="scss" scoped>
// .modal_background {
//   position: absolute;
//   width: 1300px;
//   height: 800px;
// }

.modal__background {
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal {
  position: fixed;
  z-index: 10000;
  /* top: 20%;
  left: 50%;
  width: 300px; */

  top: 11%;
  left: 10%;
  /* width: 300px; */
  right: 10%;
  bottom: 10%;
  width: 80vw;
  display: flex;
  flex-flow: column-reverse;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  > button {
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    background: 0;
    cursor: pointer;
    padding: 0 1rem;
    font-size: 3rem;
    height: 3rem;
  }
}
.modal_item {
  height: 100%;
  width: 100%;
  opacity: 1;
}
.catalog__item_block {
  display: flex;
  flex-flow: column wrap;
  place-items: center;
  place-content: center;

  height: 100%;
  > .item__heading {
    // padding: 2rem;
    font-size: 4rem;
    position: absolute;
    top: 50px;
  }
  > .modal_img {
    // width: 450px;
    margin: 2rem;
    // width: 50%;
    width: 35%;
    margin-top: 9rem;
  }
  > article {
    // width: 100%;
    width: 50%;

    > .item__text {
      text-align: center;
      max-width: fit-content;
      &.modal__text {
        display: block;
      }
    }
  }
}

.bookNumber__container {
  display: flex;
  font-size: 1.8rem;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 1rem;
  > p {
    margin: 0;
    padding: 0 1rem;
    color: var(--color-member_page_darken1);
    white-space: nowrap;
  }
  > button {
    position: relative;
    width: 45px;
    padding: 0.3rem 1rem;
    cursor: pointer;
    background: var(--color-member_page_darken);

    > .bookNumber__cart {
      display: flex;
      height: 100%;
      width: 100%;
      // fill: var(--color-member_page_darken1);
      fill: #fff;
      > use {
        scale: 0.5;
      }
    }
    &:hover {
      // background: var(--color-member_page_darken1);
      background: var(--color-member_page_darken1);
      > .bookNumber__cart {
        fill: #fff;
      }
    }
  }
  > .bookNumber__control {
    display: flex;
    flex-flow: row wrap;
    // flex-flow: column-reverse nowrap;
    > input {
      margin: 0;
      text-align: center;
      font-size: 1.8rem;
      color: var(--color-member_page_darken1);
      cursor: text;
      outline-color: var(--color-member_page_darken1);
    }
    > .bookNumber__button {
      padding: 0 1rem;
      color: var(--color-member_page_darken1);
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 768px) {
  .bookNumber__container {
    flex-flow: column wrap;
    > button {
      width: 90px;
      padding: 0.3rem 3.3rem;
      background: var(--color-member_page_darken1);
      > .bookNumber__cart {
        fill: #fff;
      }
    }
  }

  .catalog__item_block {
    > .item__heading {
      top: 0;
    }
    > .modal_img {
      width: 250px;
      margin-top: 3rem;
      object-fit: contain;
    }
    > article {
      > .modal__text {
        font-size: 1rem;
      }
    }
  }
}
@media screen and (max-width: 663px) {
  .catalog__item_block {
    // > .item__heading {
    //   top: 25px;
    // }
    > .modal_img {
      margin-top: 2.5rem;
      object-fit: contain;
    }
    > article {
      width: 90%;
    }
  }
}
@media screen and (max-width: 360px) {
  .catalog__item_block {
    > .item__heading {
      top: 0;
    }
    > .modal_img {
      width: 90%;
      height: auto;
    }
  }
}
@media screen and (min-width: 1600px) {
  .modal {
    box-shadow: 0px 0px 0.6944444vw rgba(0, 0, 0, 0.2);
    border-radius: 0.6944444vw;
    > button {
      padding: 0 0.6944444vw;
      font-size: 2.083333vw;
      height: 2.083333vw;
    }
  }
  .catalog__item_block {
    > .item__heading {
      font-size: 2.7777777vw;
      top: 1.3888888888vw;
    }
    > .modal_img {
      margin: 1.3888888vw;
      margin-top: 4.166665vw;
      width: 35%;
    }
    > article {
      width: 50%;
    }
  }

  .bookNumber__container {
    font-size: 1.25vw;
    padding: 0 0.6944444vw 0.6944444vw;
    > p {
      padding: 0 0.6944444vw;
    }
    > button {
      width: 3.125vw;
      padding: 0.2083333vw 0.6944444vw;

      > .bookNumber__cart {
        > use {
          scale: calc(0.00034722222 * v-bind(screenWidth));
        }
      }
    }
    > .bookNumber__control {
      > input {
        font-size: 1.25vw;
      }
      > .bookNumber__button {
        padding: 0 0.6944444vw;
      }
    }
  }
}
</style>
