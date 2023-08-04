<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const wrapperActive = ref(false);
    const toggleOptions = () => {
      // 點一次按鈕就toggle
      wrapperActive.value = !wrapperActive.value;
    };
    const wrapperUnfocus = () => {
      // 當按鈕失焦時，收回來
      wrapperActive.value = false;
    };
    return {
      toggleOptions,
      wrapperUnfocus,
      wrapperActive,
    };
  },
};
</script>
<template>
  <section :class="['wrapper', { wrapperActive: wrapperActive }]">
    <button
      @click="toggleOptions"
      @blur="wrapperUnfocus"
      :class="{
        ['btn']: true,
        [`ri-share-line`]: !wrapperActive,
        [`ri-close-line`]: wrapperActive,
      }"
    >
      <!-- <i class="ri-share-line"></i> -->
    </button>
    <ul class="wrapperList">
      <li class="item">
        <a href="#" class="link ig">
          <i class="ri-instagram-line"></i>
        </a>
      </li>
      <li class="item" style="--d: 0.05s">
        <a href="#" class="link tw">
          <i class="ri-twitter-line"></i>
        </a>
      </li>
      <li class="item" style="--d: 0.1s">
        <a href="#" class="link sc">
          <i class="ri-snapchat-line"></i>
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
/* General styles end */
.wrapper {
  position: fixed;
  cursor: pointer;
  bottom: 70px;
  z-index: 10000;
  right: 70px;
}
.wrapperList {
  padding: 0;
  margin: 0;
}
.wrapper :is(.btn, .link) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  color: #151515;
  border-radius: 50%;
}
.btn {
  position: absolute;
  border: none;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.active .btn,
.btn:hover {
  outline: 3px solid #0561ee;
  outline-offset: -4px;
}
.item {
  position: absolute;
  list-style: none;
  transition: transform 0.5s;
  transition-delay: var(--d);
}
.wrapper.wrapperActive .item:nth-child(1) {
  // transform: translateX(-65px);
  transform: translateX(-67.5px);
  // transform: translateX(-90px);
}
.wrapper.wrapperActive .item:nth-child(2) {
  // transform: translateY(-65px);
  transform: translate(-45px, -45px);
  // transform: translate(-60px, -60px);
}
.wrapper.wrapperActive .item:nth-child(3) {
  // transform: translateX(65px);
  transform: translate(0px, -67.5px);
  // transform: translate(0px, -90px);
}
.link {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.link:hover {
  color: #fff;
  transition: background-color 0.5s;
}
.ig:hover {
  background-image: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}
.tw:hover {
  background-color: #1da1f2;
}
.sc:hover {
  background-color: #fffc00;
  color: inherit;
}
</style>
