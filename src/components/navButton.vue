<script>
import { onMounted, ref } from "vue";
export default {
  props: {
    handleNavbar: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const wrapperActive = ref(false);
    const toggleOptions = () => {
      // 點一次按鈕就toggle
      wrapperActive.value = !wrapperActive.value;
    };
    const wrapperUnfocus = () => {
      // 當按鈕失焦時，收回來
      wrapperActive.value = false;
    };
    const goTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const goBottom = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      window.scrollTo({ top: scrollHeight, behavior: "smooth" });
    };
    return {
      toggleOptions,
      wrapperUnfocus,
      wrapperActive,
      goTop,
      goBottom,
      props,
    };
  },
};
</script>
<template>
  <section :class="['wrapper', { wrapperActive: wrapperActive }]">
    <!-- <button
      @click="toggleOptions"
      :class="{
        ['btn']: true,
        [`ri-share-line`]: !wrapperActive,
        [`ri-close-line`]: wrapperActive,
      }"
    > -->
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
        <button @click="goBottom" class="link sc">
          <!-- <i class="ri-snapchat-line"></i> -->
          <div class="goBottom">
            <svg class="arrow">
              <use xlink:href="@/image/arrow.svg#arrow"></use>
            </svg>
            <div class="line"></div>
          </div>
        </button>
      </li>
      <li class="item">
        <button @click="goTop" class="link ig" style="--d: 0.05s">
          <!-- <i class="ri-instagram-line"></i> -->
          <div class="goTop">
            <svg class="arrow">
              <use xlink:href="@/image/arrow.svg#arrow"></use>
            </svg>
            <div class="line"></div>
          </div>
        </button>
      </li>
      <li class="item" style="--d: 0.1s">
        <button @click="props.handleNavbar" class="link tw">
          <!-- <i class="ri-twitter-line"></i> -->
          <img
            class="navbarButton"
            src="@/image/bar.png"
            alt="Ui icons created by Ahsanu Nadia - Flaticon"
          />
        </button>
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
  outline: 0;
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
  flex-direction: column;
  border: 0;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  &:hover {
    > div {
      &.goTop {
        > .arrow {
          animation: arrowAnimation 2s ease;
          // animation: arrowAnimation 2s ease infinite;
        }
        > .line {
          animation: lineAnimation 2s ease;
          // animation: lineAnimation 2s ease infinite;
        }
      }
      &.goBottom {
        > .arrow {
          animation: downarrowAnimation 2s ease;
          // animation: downarrowAnimation 2s ease infinite;
        }
        > .line {
          animation: downlineAnimation 2s ease;
          // animation: downlineAnimation 2s ease infinite;
        }
      }
    }
    > img {
      &.navbarButton {
        animation: NavbarAnimation 2s ease;
        // animation: NavbarAnimation 2s ease infinite;
      }
    }
  }
  &:active {
    > div {
      &.goTop {
        > .arrow {
          animation: arrowActiveAnimation 2s ease;
          // animation: arrowActiveAnimation 2s ease infinite;
        }
        > .line {
          animation: lineActiveAnimation 2s ease;
          // animation: lineActiveAnimation 2s ease infinite;
        }
      }
      &.goBottom {
        > .arrow {
          animation: downarrowActiveAnimation 2s ease;
          // animation: downarrowActiveAnimation 2s ease infinite;
        }
        > .line {
          animation: downlineActiveAnimation 2s ease;
          // animation: downlineActiveAnimation 2s ease infinite;
        }
      }
    }
  }
  > div {
    &.goTop {
      position: absolute;
      > .arrow {
        width: 17px;
        height: 23.25px;
        transform: rotate(-90deg);
        position: absolute;
        top: -14px;
        left: -9.5px;
        fill: var(--color-member_page_darken);
      }
      > .line {
        width: 2px;
        height: 15px;
        background: var(--color-member_page_darken);
        position: absolute;
        border-radius: 10px;
        left: -1.6px;
        top: -5px;
      }
    }
    &.goBottom {
      position: absolute;
      > .arrow {
        width: 17px;
        height: 23.25px;
        transform: rotate(-90deg);
        position: absolute;
        top: -9px;
        left: -8.5px;
        fill: var(--color-member_page_darken);
        rotate: 180deg;
      }
      > .line {
        width: 2px;
        height: 15px;
        background: var(--color-member_page_darken);
        position: absolute;
        border-radius: 10px;
        left: -1.15px;
        top: -11px;
      }
    }
  }
  > img {
    &.navbarButton {
      position: relative;
      width: 100%;
    }
  }
}

@keyframes arrowAnimation {
  0% {
  }
  30% {
    fill: var(--color-member_page_darken);
    top: -3px;
    scale: 1.2;
  }
  50% {
    top: -26px;
    scale: 1;
    fill: var(--color-member_page_darken1);
  }
  80% {
    fill: var(--color-member_page_darken);
    // top: -10px;
    top: -8px;
    scale: 1.1;
  }

  100% {
  }
}
@keyframes lineAnimation {
  30% {
    background: var(--color-member_page_darken);
    // scale: 1.3;
    height: 5px;
    top: 6px;
  }
  50% {
    // scale: 1;
    top: -12px;
    height: 17px;
    background: var(--color-member_page_darken1);
  }
  80% {
    background: var(--color-member_page_darken);
    height: 9px;
    // scale: 1.1;
    // top: 0px;
    top: 3px;
  }

  100% {
  }
}

@keyframes downarrowAnimation {
  0% {
  }
  30% {
    fill: var(--color-member_page_darken);
    top: -20px;
    scale: 1.2;
  }
  50% {
    top: 0px;
    scale: 1;
    fill: var(--color-member_page_darken1);
  }
  80% {
    fill: var(--color-member_page_darken);
    // top: -10px;
    top: -16px;
    scale: 1.1;
  }

  100% {
  }
}
@keyframes downlineAnimation {
  30% {
    background: var(--color-member_page_darken);
    // scale: 1.3;
    height: 5px;
    top: -11px;
  }
  50% {
    // scale: 1;
    top: -4px;
    height: 17px;
    background: var(--color-member_page_darken1);
  }
  80% {
    background: var(--color-member_page_darken);
    height: 9px;
    // scale: 1.1;
    // top: 0px;
    top: -11px;
  }

  100% {
  }
}
@keyframes downarrowActiveAnimation {
  0% {
  }
  30% {
    fill: var(--color-member_page_darken);
    top: -20px;
    scale: 1.2;
  }
  50% {
    top: 20px;
    scale: 1;
  }
  80% {
    opacity: 0;
  }

  100% {
  }
}
@keyframes downlineActiveAnimation {
  30% {
    background: var(--color-member_page_darken);
    // scale: 1.3;
    height: 5px;
    top: -11px;
  }
  50% {
    // scale: 1;
    top: 16px;
    height: 17px;
  }
  80% {
    opacity: 0;
  }

  100% {
  }
}

@keyframes arrowActiveAnimation {
  0% {
  }
  30% {
    fill: var(--color-member_page_darken);
    top: -3px;
    scale: 1.2;
  }
  50% {
    top: -33px;
    scale: 1;
  }
  80% {
    opacity: 0;
  }

  100% {
  }
}
@keyframes lineActiveAnimation {
  30% {
    background: var(--color-member_page_darken);
    // scale: 1.3;
    height: 5px;
    top: 6px;
  }
  50% {
    // scale: 1;
    top: -24px;
    height: 17px;
  }
  80% {
    opacity: 0;
  }

  100% {
  }
}

@keyframes NavbarAnimation {
  0% {
    top: 0px;
  }
  50% {
    top: -35px;
  }
  100% {
    top: 0px;
  }
}

.link:hover {
  color: #fff;
  transition: background-color 0.15s;
}
.ig.link {
  background-color: var(--color-member_page_background1);
}
// .ig:hover {
//   //   background-image: radial-gradient(
//   //     circle at 30% 107%,
//   //     #fdf497 0%,
//   //     #fdf497 5%,
//   //     #fd5949 45%,
//   //     #d6249f 60%,
//   //     #285aeb 90%
//   //   );
//   background-color: var(--color-member_page_background1);
// }
// .tw:hover {
//   //   background-color: #1da1f2;
//   background-color: var(--color-categoreis_item_headtext);
// }
.tw.link {
  background-color: var(--color-categoreis_item_headtext);
}
// .sc:hover {
//   background-color: #fffc00;
//   color: inherit;
// }
.sc.link {
  background-color: #fff;
}

// @media screen and (min-width: 1600px) {
//   /* General styles end */
//   .wrapper {
//     bottom: 4.8611111vw;
//     right: 4.8611111vw;
//   }
//   .wrapper :is(.btn, .link) {
//     width: 3.472222vw;
//     height: 3.472222vw;
//   }
//   .btn {
//     box-shadow: 0px 0px 0.6944444vw rgba(0, 0, 0, 0.2);
//   }
//   .active .btn,
//   .btn:hover {
//     outline: 0.20833vw solid #0561ee;
//     outline-offset: -0.27777777vw;
//   }
//   .wrapper.wrapperActive .item:nth-child(1) {
//     transform: translateX(-4.6875vw);
//   }
//   .wrapper.wrapperActive .item:nth-child(2) {
//     transform: translate(-3.125vw, -3.125vw);
//   }
//   .wrapper.wrapperActive .item:nth-child(3) {
//     transform: translate(0px, -4.6875vw);
//   }
//   .link {
//     box-shadow: 0px 0px 0.6944444vw rgba(0, 0, 0, 0.2);
//     > div {
//       &.goTop {
//         > .arrow {
//           width: 1.1805555555vw;
//           height: 1.61458333vw;
//           top: -0.9722222vw;
//           left: -0.65972222vw;
//           scale: 0.06944444vw;
//         }
//         > .line {
//           width: 0.1388888vw;
//           height: 1.0416666vw;
//           border-radius: 0.69444444vw;
//           left: -0.1111111111vw;
//           top: -0.347222vw;
//         }
//       }
//       &.goBottom {
//         > .arrow {
//           width: 1.180555555vw;
//           height: 1.614583333vw;
//           top: -0.625vw;
//           left: -0.59027777vw;
//           scale: 0.06944444vw;
//         }
//         > .line {
//           width: 0.138888vw;
//           height: 1.0416666vw;
//           border-radius: 0.69444444vw;
//           left: -0.0798611vw;
//           top: -0.7638888vw;
//         }
//       }
//     }
//   }

//   @keyframes arrowAnimation {
//     0% {
//     }
//     30% {
//       fill: var(--color-member_page_darken);
//       top: -0.2083333vw;
//       scale: 0.08333333vw;
//     }
//     50% {
//       top: -1.8055555vw;
//       scale: 0.06944444vw;
//       fill: var(--color-member_page_darken1);
//     }
//     80% {
//       fill: var(--color-member_page_darken);
//       top: -0.5555555vw;
//       scale: 0.076388888vw;
//     }

//     100% {
//     }
//   }
//   @keyframes lineAnimation {
//     30% {
//       background: var(--color-member_page_darken);
//       height: 0.34722222vw;
//       top: 0.41666666vw;
//     }
//     50% {
//       top: -0.8333333vw;
//       height: 1.18055555vw;
//       background: var(--color-member_page_darken1);
//     }
//     80% {
//       background: var(--color-member_page_darken);
//       height: 0.625vw;
//       top: 0.208333vw;
//     }

//     100% {
//     }
//   }

//   @keyframes downarrowAnimation {
//     0% {
//     }
//     30% {
//       fill: var(--color-member_page_darken);
//       top: -1.38888888vw;
//       scale: 0.08333333vw;
//     }
//     50% {
//       top: 0;
//       scale: 0.06944444vw;
//       fill: var(--color-member_page_darken1);
//     }
//     80% {
//       fill: var(--color-member_page_darken);
//       top: -1.1111111vw;
//       scale: 0.076388888vw;
//     }

//     100% {
//     }
//   }
//   @keyframes downlineAnimation {
//     30% {
//       background: var(--color-member_page_darken);
//       height: 0.3472222vw;
//       top: -0.76388888vw;
//     }
//     50% {
//       top: -0.27777vw;
//       height: 1.18055555vw;
//       background: var(--color-member_page_darken1);
//     }
//     80% {
//       background: var(--color-member_page_darken);
//       height: 0.625vw;
//       top: -0.763888888vw;
//     }

//     100% {
//     }
//   }
//   @keyframes downarrowActiveAnimation {
//     0% {
//     }
//     30% {
//       fill: var(--color-member_page_darken);
//       top: -1.3888888vw;
//       scale: 0.08333333vw;
//     }
//     50% {
//       top: 1.3888888vw;
//       scale: 0.069444444vw;
//     }
//     80% {
//       opacity: 0;
//     }

//     100% {
//     }
//   }
//   @keyframes downlineActiveAnimation {
//     30% {
//       background: var(--color-member_page_darken);
//       height: 0.3472222vw;
//       top: -0.763888888vw;
//     }
//     50% {
//       top: 1.111111111vw;
//       height: 1.1805555vw;
//     }
//     80% {
//       opacity: 0;
//     }

//     100% {
//     }
//   }

//   @keyframes arrowActiveAnimation {
//     0% {
//     }
//     30% {
//       fill: var(--color-member_page_darken);
//       top: -0.208333333vw;
//       scale: 0.08333333vw;
//     }
//     50% {
//       top: -2.2916666vw;
//       scale: 0.06944444vw;
//     }
//     80% {
//       opacity: 0;
//     }
//     100% {
//     }
//   }
//   @keyframes lineActiveAnimation {
//     30% {
//       background: var(--color-member_page_darken);
//       height: 0.34722222vw;
//       top: 0.41666666vw;
//     }
//     50% {
//       top: -1.66666666666vw;
//       height: 1.180555555vw;
//     }
//     80% {
//       opacity: 0;
//     }
//     100% {
//     }
//   }

//   @keyframes NavbarAnimation {
//     0% {
//       top: 0px;
//     }
//     50% {
//       top: -2.430555555vw;
//     }
//     100% {
//       top: 0px;
//     }
//   }
// }
</style>
