<script>
import NotificationModal from "@/components/notificationModal.vue";
import { computed, onMounted, reactive, ref } from "vue";
export default {
  components: {
    NotificationModal,
  },
  setup() {
    let bookinfo = reactive([]);
    let bookjson = JSON.parse(localStorage.getItem("bookinfo"));
    let isMember;
    let booked = ref(false);
    let bookStatus = ref(false);
    let noticlass = ref(false);
    let bookResult = ref(false);
    let timer;
    let singlePrice;
    let totalAmount;
    let screenWidth = ref();

    // notiModal的開關操作
    const handlebook = () => {
      booked.value = false;
    };

    const handlebookStatus = () => {
      bookStatus.value = !bookStatus.value;
    };

    // 有沒有訂單放到購物車
    const hasBook = ref(false);

    if (bookjson == null) {
      totalAmount = 0;
    } else if (bookjson.length >= 1) {
      bookinfo = bookjson;
      hasBook.value = true;

      // 計算總價(放在這裡是因為，購物車有東西，才需要計算價格)
      totalAmount = bookinfo.reduce(
        (accumulator, current) => accumulator + current.price,
        0
      );
    } else {
      totalAmount = 0;
    }

    // 單品數量增加
    const Incre = (item) => {
      bookinfo.some((element) => {
        // 有相同商品就加在一起
        if (element.goods == item.goods) {
          singlePrice = item.price / item.quantity;
          console.log(singlePrice);
          item.quantity++;
          item.price = item.quantity * singlePrice;
          return true;
        }
      });
      confirmBook();
    };

    // 單品數量減少
    const Decre = (item) => {
      bookinfo.some((element) => {
        // 有相同商品就加在一起
        if (element.goods == item.goods) {
          singlePrice = item.price / item.quantity;
          item.quantity--;
          item.price = item.quantity * singlePrice;
          return true;
        }
      });
      confirmBook();
    };

    // 單品購物車刪除
    const Del = (index) => {
      console.log(index);
      bookinfo.splice(index, 1);
      confirmBook();
    };

    // 購物車確認
    const confirmBook = () => {
      localStorage.setItem("bookinfo", JSON.stringify(bookinfo));
      bookinfo = JSON.parse(localStorage.getItem("bookinfo"));
      window.location.reload();
    };

    // 結帳
    const checking = () => {
      handlebook.value = true;
      booked.value = true;
      timer = setTimeout(() => {
        bookStatus.value = true;
      }, 1000);
      handlebookStatus.value = true;
      isMember = JSON.parse(localStorage.getItem("isMember"));
      if (isMember == null) {
        // alert("您還不是會員！請先至會員註冊");
        noticlass.value = "您還不是會員！請先至會員註冊";
        bookResult.value = false;
      }
    };

    //監聽螢幕寬度
    const handleRWD = () => {
      screenWidth.value = window.screen.availWidth;
    };
    onMounted(() => {
      screenWidth.value = window.addEventListener("resize", handleRWD);
      handleRWD();
    });
    return {
      bookinfo,
      Incre,
      Decre,
      confirmBook,
      Del,
      hasBook,
      checking,
      handlebook,
      booked,
      bookStatus,
      bookResult,
      handlebookStatus,
      noticlass,
      totalAmount,
      screenWidth,
    };
  },
};
</script>
<template>
  <section class="container cart__container">
    <table class="cart__list">
      <tr class="cart__list__item">
        <th class="cart__text cart__head">品項</th>
        <!-- <th class="cart__text cart__head">描述</th>
        <th class="cart__text cart__head">圖片</th> -->
        <th class="cart__text cart__head">數量</th>
        <th class="cart__text cart__head cart__price">單價</th>
        <th class="cart__text cart__head cart__price">總價</th>
        <th class="cart__head cart__price cart__del"></th>
      </tr>
      <tr
        v-for="(item, index) in bookinfo"
        :key="item.goods"
        class="cart__list__item"
        v-show="hasBook"
      >
        <td class="cart__text">
          <img class="img" :src="item.img" :alt="item.nameeng" />
          <article>
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </article>
        </td>

        <!-- <td class="cart__text">{{ item.name }}</td>
        <td class="cart__text">{{ item.desc }}</td>
        <td class="cart__text">
          <img class="img" :src="item.img" :alt="item.nameeng" />
        </td> -->

        <td class="cart__text bookNumber__control">
          <button
            class="bookNumber__button border border__first"
            @click="Incre(item)"
          >
            +
          </button>

          <input
            class="border"
            type="text"
            v-model="item.quantity"
            @keyup.enter="confirmBook"
          />
          <button
            :class="['bookNumber__button', 'border']"
            @click="Decre(item)"
          >
            -
          </button>
        </td>
        <td class="cart__text">
          <p class="cart__price" v-price="item.price / item.quantity"></p>
        </td>
        <td class="cart__text">
          <p class="cart__price" v-price="item.price"></p>
        </td>
        <button class="cart__del" @click="Del(index)">x</button>
      </tr>
      <tr class="cart__list__item" v-show="hasBook">
        <td class="input-group">
          <input
            type="text"
            id="login_email"
            required
            class="input-group__input"
          />
          <label for="login_email" class="input-group__label"
            >輸入折價券代號</label
          >
        </td>
      </tr>
      <tr class="cart__list__item" v-if="!hasBook">
        <td>購物車目前還是空的唷！</td>
      </tr>
    </table>
    <table class="check__table">
      <tr class="cart__check spaceBetween">
        <td class="cart__text">
          <p class="cart__price sum__price cart__head">折扣：</p>
        </td>
        <td class="cart__text">
          <p class="cart__price sum__price">0</p>
        </td>
      </tr>
      <tr class="cart__check spaceBetween">
        <td class="cart__text">
          <p class="cart__price sum__price cart__head">總共：</p>
        </td>
        <td class="cart__text">
          <p
            class="cart__price sum__price doubleUnderline"
            v-price="totalAmount"
          ></p>
        </td>
      </tr>
      <tr class="cart__check">
        <button @click="checking">結帳</button>
      </tr>
    </table>
  </section>
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
.input-group {
  position: relative;
  display: flex;
  align-items: baseline;
  margin-inline: auto;
  margin-top: 1rem;
}
.form__icon {
  font-size: 2rem;
  margin-right: 1rem;
  color: var(--color-member_page_background);
}
.input-group__input {
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
  padding-block: 1rem;
  font: inherit;
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: 0;
  background-color: transparent;
  transition: outline-color 250ms;
}
.input-group__input:focus + .form__bar::before,
.input-group__input:valid + .form__bar::before {
  transform: scaleX(1);
}
.input-group__label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  translate: 40px 12px;
  cursor: text;
  font-size: 2rem;
  transition: translate 250ms, scale 250ms, padding-inline 250ms;
}
.input-group__input:focus + .input-group__label,
.input-group__input:valid + .input-group__label {
  padding-inline: 5px;
  translate: -20px -5px;
  scale: 0.8;
  color: var(--color-member_page_darken);
}

.cart__container {
  margin: calc(var(--var-first_for_navbar) + 3rem) auto 3rem;
  display: flex;
  flex-direction: row;
}
.cart__list {
  width: 60%;
  // width: 90%;
  // margin: 0 auto;
  margin: 0 0 0 auto;
  border-collapse: collapse; /* 將表格邊框合併成一個 */
  border-radius: 85px;
  overflow: hidden;
  height: 100%;
}

.cart__list__item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-top: 0.5px;
  border-bottom-style: dotted;
  &:hover {
    > .cart__del {
      opacity: 1;
    }
  }
  &:nth-child(1) {
    border: 1px solid #000;
  }
  &:last-child {
    border-bottom-style: solid;
  }
  > .cart__del {
    text-align: center;
    border: 0;
    background: 0;
    cursor: pointer;
    position: relative;
    left: 0;
    opacity: 0;
    width: 50%;
    transition: opacity 0.1s;
  }
  > .cart__text {
    margin: 0;
    text-align: center;
    font-size: 1.5rem;
    width: 100%;
    // height: inherit;
    // border: 1px solid #000;

    &:nth-child(1) {
      display: flex;
      flex-flow: row nowrap;
      width: 300%;
      margin-left: 3rem;
    }
    &.cart__head {
      display: block;
    }

    > .img {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem 0;
    }
    > article {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      justify-content: center;
      > h3 {
        font-size: 2.5rem;
        margin: 0;
      }
    }
    &.cart__price {
      text-align: end;
    }
    p {
      margin: 0;
    }
    > .cart__price {
      text-align: end;
    }
    > img {
      width: 150px;
      object-fit: contain;
    }
  }
  > .cart__head {
    font-weight: 700;
    font-size: 2rem;
  }
}

.cart__text {
  > .sum__price {
    margin: 0;
    &.doubleUnderline {
      border-bottom: double;
    }
  }
  &.bookNumber__control {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    > input {
      width: 3rem;
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

.check__table {
  // margin: 0 auto 0 0;
  // width: 30%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  // overflow: hidden;
  // border-radius: 10px;
  position: relative;
  top: 50px;
  margin: 0 auto 0 auto;
  width: 20%;
  height: 100%;
  border-top: 10px solid var(--color-member_page_background);
  > .cart__check {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0.5rem;
    &.spaceBetween {
      justify-content: space-between;
    }
    > button {
      position: relative;
      width: auto;
      padding: 1.3rem 2rem;
      cursor: pointer;
      background: var(--color-member_page_darken);
      border: 0;
      color: #fff;
      // overflow: hidden;
      // border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      transition: background 0.15s;

      &:hover {
        // background: var(--color-member_page_darken1);
        background: var(--color-member_page_darken1);
      }
    }
  }
}

@media screen and (max-width: 350px) {
  .cart__container {
    > table {
      &.cart__list {
        width: 99%;
        border-radius: 50px;
      }
    }
  }
  table {
    & .check__table {
      width: 99%;
    }
  }
}
@media screen and (max-width: 600px) {
  .cart__container {
    flex-direction: column;
    > .cart__list {
      width: 90%;
      margin: 0 auto;
    }
  }
  .input-group__input {
    padding-block: 0;
    padding: 0;
  }
  .check__table {
    top: 0;
    width: 90%;
    margin: 2rem auto;
    > .cart__check {
      justify-content: center;
    }
  }
  tr {
    &.cart__check {
      > td {
        &.cart__text {
          font-size: 2.4rem;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .cart__list__item {
    > .cart__del {
      opacity: 1;
    }
    > .cart__text {
      &:nth-child(1) {
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
      }
    }
  }
  .cart__text {
    &.bookNumber__control {
      > .bookNumber__button {
        padding: 0;
        width: 20px;
        height: 20px;
      }
      > input {
        width: 2rem;
        height: 2rem;
        font-size: 0.8rem;
      }
    }
  }
  .cart__check {
    > td {
      &.cart__text {
        font-size: 1.5rem;
      }
    }
  }
}

@media screen and (max-width: 1110px) {
  .cart__list__item {
    > .cart__text {
      > img {
        width: 100px;
      }
      p {
        font-size: 1rem;
      }
      > article {
        > h3 {
          font-size: 1.5rem;
        }
      }
    }
  }
  .cart__check {
    > .cart__text {
      font-size: 2rem;
    }
  }
}
@media screen and (min-width: 1440px) {
  .slider-container {
    width: 71.11111111111111vw;
    // margin: 10.41666vw auto 6.9444444vw;
    margin: calc(var(--var-first_for_navbar) + 4.86111vw) auto 6.9444444vw;
  }
  .bookNumber__control {
    > input {
      font-size: 1.25vw;
    }
    > .bookNumber__button {
      padding: 0 0.6944444vw;
    }
  }
  .input-group {
    margin-top: 0.694444444vw;
  }
  .form__icon {
    font-size: 1.3888888vw;
    margin-right: 0.694444444vw;
  }
  .input-group__input {
    margin-top: 0.347222222vw;
    padding-block: 0.694444444vw;
    padding: 0.694444444vw;
    border-radius: 0.277777777vw;
  }
  .input-group__input:focus + .form__bar::before,
  .input-group__input:valid + .form__bar::before {
    transform: scaleX(calc(0.000694444444 * v-bind(screenWidth)));
  }
  .input-group__label {
    translate: 2.77777777vw 0.83333333vw;
    font-size: 1.3888888vw;
  }
  .input-group__input:focus + .input-group__label,
  .input-group__input:valid + .input-group__label {
    padding-inline: 0.3472222222vw;
    translate: -1.3888888888vw -0.3472222222vw;
    scale: calc(0.00055555555555 * v-bind(screenWidth));
  }
  .cart__list {
    border-radius: 5.90277777777vw;
  }

  .cart__list__item {
    border: 0.069444444vw solid #000;
    border-top: 0.034722222222vw;
    &:nth-child(1) {
      border: 0.069444444vw solid #000;
    }
    > .cart__text {
      font-size: 1.041666666vw;

      &:nth-child(1) {
        margin-left: 2.083333333vw;
      }
      > .img {
        margin: 0.694444444vw 0;
      }
      > article {
        > h3 {
          font-size: 1.7361111111vw;
        }
      }
      > img {
        width: 10.41666666vw;
      }
    }
    > .cart__head {
      font-size: 1.3888888vw;
    }
  }

  .cart__text {
    &.bookNumber__control {
      > input {
        width: 2.083333333vw;
        font-size: 1.25vw;
      }
      > .bookNumber__button {
        padding: 0 0.694444444vw;
      }
    }
  }

  .check__table {
    box-shadow: 0px 0px 0.694444444vw rgba(0, 0, 0, 0.2);
    top: 3.472222222vw;
    border-top: 0.694444444vw solid var(--color-member_page_background);
    > .cart__check {
      margin: 0.694444444vw 0.347222222vw;
      > button {
        padding: 0.9027777777777vw 1.3888888vw;
        box-shadow: 0px 0px 0.694444444vw rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
