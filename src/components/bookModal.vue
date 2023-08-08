<script>
import { ref } from "vue";
export default {
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
    const bookItem = (item) => {
      console.log(item);
      console.log(bookNumber.value);
    };
    const bookNumber = ref(0);
    const Incre = () => {
      bookNumber.value++;
    };
    const Decre = () => {
      if (bookNumber.value >= 1) {
        bookNumber.value--;
      }
    };
    return { props, bookNumber, bookItem, Incre, Decre };
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
              @click.prevent="bookItem(props.modalData)"
              class="border border__first"
            >
              <svg class="bookNumber__cart">
                <use xlink:href="@/image/cart.svg#cart"></use>
              </svg>
            </button>
            <div class="bookNumber__control">
              <button class="bookNumber__button border" @click.prevent="Decre">
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
</template>

<style lang="scss" scoped>
// .modal_background {
//   position: absolute;
//   width: 1300px;
//   height: 800px;
// }
.border {
  border: 1px solid var(--color-member_page_background);
  background: 0;
  width: 30px;
  height: 30px;
  border-left: 0.5px;
  &.border__first {
    border: 1px solid var(--color-member_page_background);
  }
}
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
  }
  > button {
    position: relative;
    width: 45px;
    padding: 0.3rem 1rem;
    cursor: pointer;

    > .bookNumber__cart {
      display: flex;
      height: 100%;
      width: 100%;
      fill: var(--color-member_page_darken1);
      > use {
        scale: 0.5;
      }
    }
    &:hover {
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
</style>
