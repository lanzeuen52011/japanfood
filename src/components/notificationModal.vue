<script>
export default {
  props: {
    noticlass: {
      type: String,
      default: true,
    },
    booked: {
      type: Boolean,
      default: true,
    },
    bookStatus: {
      type: Boolean,
      default: true,
    },
    bookResult: {
      type: Boolean,
      default: true,
    },
    handlebook: {
      type: Function,
      default: () => {},
    },
    handlebookStatus: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<template>
  <div
    v-if="props.booked"
    @click="props.handlebook"
    class="modal__background"
  ></div>
  <div v-if="props.booked" class="notiModal__container">
    <article>
      <!-- <div class="notiModal__circle"></div> -->
      <div
        :class="[
          { lds_ring: !props.bookStatus },
          { lds_success: props.bookStatus && props.bookResult },
          { lds_fail: props.bookStatus && !props.bookResult },
        ]"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h6 v-if="!props.bookStatus">處理中</h6>
      <h6 v-if="props.bookStatus">{{ props.noticlass }}！</h6>
      <!-- <button
        @click="handlebookStatus"
        style="position: absolute; top: 0; left: 0"
      >
        測驗按鈕
      </button> -->
    </article>
    <button class="notiModal__close" @click="props.handlebook">x</button>
  </div>
</template>

<style lang="scss" scoped>
.modal__background {
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  z-index: 10001;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.notiModal__container {
  position: fixed;
  z-index: 10002;
  top: 30%;
  left: 30%;
  right: 30%;
  bottom: 30%;
  width: 40vw;
  display: flex;
  flex-flow: column-reverse;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  > article {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: absolute;
    top: 10%;
    right: 10%;
    left: 10%;
    bottom: 10%;
    > h6 {
      display: block;
      margin-bottom: 0;
    }
  }
}

// 驗證中
.lds_ring {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
}
.lds_ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  // width: 64px;
  // height: 64px;
  width: 180px;
  height: 180px;
  margin: 8px;
  border: 8px solid var(--color-member_page_darken);
  border-radius: 50%;
  animation: lds_ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--color-member_page_darken) transparent transparent
    transparent;
}
.lds_ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds_ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds_ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds_ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// 驗證成功
.lds_success {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
}
.lds_success div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: -69px;
  left: -1px;
  border-radius: 0;
  transform: rotate(135deg);
  width: 130px;
  height: 180px;
  margin: 8px;
  border: 8px solid var(--color-member_page_darken);
  animation: lds_line1 1.2s cubic-bezier(0.5, 0, 0.5, 1);
  border-color: var(--color-member_page_darken) transparent transparent
    transparent;
}
.lds_success div:nth-child(3) {
  top: -47px;
  border-radius: 0;
  transform: rotate(225deg);
  width: 70px;
  left: 85.5px;
}

@keyframes lds_line1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

//驗證失敗
.lds_fail {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
}
.lds_fail div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  transform: rotate(315deg);
  top: 70px;
  left: 60px;
  width: 180px;
  height: 180px;
  margin: 8px;
  border: 8px solid var(--color-member_page_darken);
  border-radius: 0;
  border-color: var(--color-member_page_darken) transparent transparent
    transparent;
}

.lds_fail div:nth-child(3) {
  border-color: transparent transparent var(--color-member_page_darken)
    transparent;
  transform: rotate(225deg);
  top: 70px;
  left: -60px;
}

.notiModal__close {
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background: 0;
}
</style>
