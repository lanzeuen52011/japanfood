<script>
import { ref } from "vue";
export default {
  setup() {
    const food = ref(false);
    const home = ref(false);
    const member = ref(false);
    const other = ref(false);
    const footerchevronToggle = (element) => {
      if (element === "food") {
        food.value = !food.value;
      }
      if (element === "home") {
        home.value = !home.value;
      }
      if (element === "member") {
        member.value = !member.value;
      }
      if (element === "other") {
        other.value = !other.value;
      }
    };
    return {
      footerchevronToggle,
      food,
      home,
      member,
      other,
    };
  },
};
</script>

<template>
  <footer class="footer__background">
    <div class="container footer__container grid footer__grid">
      <section
        :class="[
          'collapsible',
          'footer__section',
          { 'collapsible--expanded': home },
        ]"
      >
        <div
          class="collapsible__header footer__header"
          @click="footerchevronToggle('home')"
        >
          <h2 class="collapsible__heading footer__heading footer__content">
            匠心料理
          </h2>
          <svg class="collapsible__chevron footer__chevron">
            <use xlink:href="@/image/chevron.svg#chevron"></use>
          </svg>
        </div>
        <div class="collapsible__content footer__collapsible">
          <ul class="list footer__list">
            <li class="footer__content">
              <router-link :to="{ path: '/', hash: '#main' }"
                >形象官方</router-link
              >
            </li>
            <li class="footer__content">
              <router-link :to="{ path: '/', hash: '#concept' }"
                >料理理念</router-link
              >
            </li>
            <li class="footer__content">
              <router-link :to="{ path: '/', hash: '#newest' }"
                >私房新品</router-link
              >
            </li>
            <li class="footer__content">
              <router-link :to="{ path: '/', hash: '#book' }"
                >心動不如馬上行動！</router-link
              >
            </li>
          </ul>
        </div>
      </section>
      <section
        :class="[
          'collapsible',
          'footer__section',
          { 'collapsible--expanded': food },
        ]"
      >
        <div
          class="collapsible__header footer__header"
          @click="footerchevronToggle('food')"
        >
          <h2 class="collapsible__heading footer__heading footer__content">
            私房菜單
          </h2>
          <svg class="collapsible__chevron footer__chevron">
            <use xlink:href="@/image/chevron.svg#chevron"></use>
          </svg>
        </div>
        <div class="collapsible__content footer__collapsible">
          <ul class="list footer__list">
            <li class="footer__content">
              <router-link :to="{ path: '/menu', hash: '#fried' }"
                >炸物類</router-link
              >
            </li>

            <li class="footer__content">
              <router-link :to="{ path: '/menu', hash: '#stew' }"
                >燉煮類</router-link
              >
            </li>
            <li class="footer__content">
              <router-link :to="{ path: '/menu', hash: '#stirfry' }"
                >煎炒類</router-link
              >
            </li>
            <li class="footer__content">
              <router-link :to="{ path: '/menu', hash: '#cold' }"
                >冷盤類</router-link
              >
            </li>
          </ul>
        </div>
      </section>
      <section
        :class="[
          'collapsible',
          'footer__section',
          { 'collapsible--expanded': member },
        ]"
      >
        <div
          class="collapsible__header footer__header"
          @click="footerchevronToggle('member')"
        >
          <h2 class="collapsible__heading footer__heading footer__content">
            會員專區
          </h2>
          <svg class="collapsible__chevron footer__chevron">
            <use xlink:href="@/image/chevron.svg#chevron"></use>
          </svg>
        </div>
        <div class="collapsible__content footer__collapsible">
          <ul class="list footer__list">
            <li class="footer__content">
              <router-link :to="{ path: '/member' }">活動通知</router-link>
            </li>
            <li class="footer__content">
              <router-link :to="{ path: '/member' }">私房技巧</router-link>
            </li>
            <li class="footer__content">
              <router-link :to="{ path: '/member' }">查看折價券</router-link>
            </li>
            <li class="footer__content">
              <router-link :to="{ path: '/member' }">會員大好禮</router-link>
            </li>
          </ul>
        </div>
      </section>
      <section
        :class="[
          'collapsible',
          'footer__section',
          { 'collapsible--expanded': other },
        ]"
      >
        <div
          class="collapsible__header footer__header"
          @click="footerchevronToggle('other')"
        >
          <h2 class="collapsible__heading footer__heading footer__content">
            其他網站
          </h2>
          <svg class="collapsible__chevron footer__chevron">
            <use xlink:href="@/image/chevron.svg#chevron"></use>
          </svg>
        </div>
        <div class="collapsible__content footer__collapsible">
          <ul class="list footer__list noPadding">
            <li class="footer__content">
              <a href="https://draw-ai.netlify.app/">
                <img
                  class="other__logo footer__other__logo"
                  src="@/image/drawailogo.png"
                  alt="AI畫廊DrawAI"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div class="footer__brand">
        <img
          class="footer__brand__img"
          src="@/image/LetHimCook1.png"
          alt="logo"
        />
        <p class="footer__copyright">Copyright 2023 LanZiYun</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
/* footer */
.footer__container {
  min-height: auto;
  overflow: visible;
}

.footer__chevron {
  width: 40px;
  color: #d0d0d0;
  cursor: pointer;
}

.footer__header {
  height: 40px;
  padding: 0 15px;
}

.footer__heading {
  margin: auto 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.5;
}

.footer__collapsible > .list {
  margin: 0;
  flex-direction: column;
}

.footer__section {
  align-items: unset;
  border-bottom: 1px solid #393939;
}

.grid ul.footer__list {
  border-bottom: 0;
}

.footer__background {
  height: 500px;
  background: #1f1f1f;
  padding: 20px 20px 50px;
  display: flex;
  justify-content: center;
}

.footer__content {
  color: #fff;
}

.footer__content a:visited,
.footer__content a {
  color: #d0d0d0;
}

.grid.footer__grid {
  grid-template-columns: 1fr;
  // grid-template-rows: repeat(auto-fit, minmax(10px, 1fr));
}

.footer__brand {
  margin-top: 5rem;
  text-align: center;
}

.footer__brand .footer__brand__img {
  height: 100%;
  max-height: 100px;
  border-radius: 2px;
  object-fit: contain;
}

.footer__copyright {
  font-size: 2.1rem;
  color: #fff;
  opacity: 0.8;
  letter-spacing: 0.05rem;
}

img.other__logo.footer__other__logo {
  width: 100%;
  min-width: 100px;
  height: 60px;
  object-fit: contain;
  border-radius: 0px;
}

@media screen and (min-width: 1440px) {
  .footer__background {
    padding: 1.38888vw 1.38888vw 3.472222vw;
  }
  .footer__content .footer__brand .footer__brand__img {
    height: 60px;
    align-self: center;
  }
  .footer__heading {
    &.collapsible__heading {
      font-size: 1.11111vw;
    }
  }
  .footer__content {
    font-size: 1.041666vw;
  }
  .footer__container {
    &.container {
      max-width: 79.1666vw;
    }
  }
  .footer__brand {
    .footer__copyright {
      font-size: 1.0416666vw;
    }
  }
  img.other__logo.footer__other__logo {
    min-width: 7vw;
    height: 4.166vw;
  }
}

@media screen and (min-width: 1024px) {
  .footer__content .footer__brand .footer__brand__img {
    height: 50px;
    align-self: center;
  }
}

@media screen and (min-width: 768px) {
  .grid.footer__grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .footer__chevron {
    display: none;
  }
  .footer__section .collapsible__content {
    max-height: 100vh;
    opacity: 1;
  }
  .footer__section {
    justify-content: start;
  }

  .footer__background {
    height: auto;
    .container {
      margin-top: 3rem;
    }
  }

  .footer__brand {
    order: -1;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 2rem;
  }
  .footer__brand .footer__brand__img {
    // height: 36px;
    align-self: center;
  }

  .footer__section {
    border: 0;
  }

  .footer__heading {
    font-size: 1.6rem;
  }
  .footer__copyright {
    font-size: 1.5rem;
  }
  .collapsible__content .list {
    font-size: 1.5rem;
  }
  .footer__container {
    max-width: 1140px;
  }
  .footer__content {
    a {
      &:hover {
        color: #fff;
      }
    }
  }
  img.other__logo.footer__other__logo {
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
}
@media screen and (max-width: 768px) {
  .footer__brand {
    margin-top: 0;
  }
  .noPadding {
    padding: 0;
  }
}

@media screen and (max-width: 350px) {
  .footer__content .footer__brand .footer__brand__img {
    height: 80px;
    align-self: center;
  }
}
</style>
