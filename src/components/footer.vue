<script>
import { ref } from "vue";
export default {
  setup() {
    const food = ref(false);
    const event = ref(false);
    const suggest = ref(false);
    const about = ref(false);
    const footerchevronToggle = (element) => {
      if (element === "food") {
        food.value = !food.value;
      }
      if (element === "event") {
        event.value = !event.value;
      }
      if (element === "suggest") {
        suggest.value = !suggest.value;
      }
      if (element === "about") {
        about.value = !about.value;
      }
    };
    return {
      footerchevronToggle,
      food,
      event,
      suggest,
      about,
    };
  },
};
</script>

<template>
  <footer class="footer__background">
    <div class="container grid footer__content footer__grid">
      <section
        :class="[
          'collapsible',
          'footer__section',
          { 'collapsible--expanded': food },
        ]"
      >
        <div class="collapsible__header footer__header">
          <h2 class="collapsible__heading footer__heading footer__content">
            食譜分類
          </h2>
          <svg
            class="collapsible__chevron footer__chevron"
            @click="footerchevronToggle('food')"
          >
            <use xlink:href="@/image/chevron.svg#chevron"></use>
          </svg>
        </div>
        <div class="collapsible__content footer__collapsible">
          <ul class="list footer__list">
            <li class="footer__content"><a href="#">炸物類</a></li>
            <li class="footer__content"><a href="#">煎炒類</a></li>
            <li class="footer__content"><a href="#">燉煮類</a></li>
            <li class="footer__content"><a href="#">冷盤類</a></li>
          </ul>
        </div>
      </section>
      <section
        :class="[
          'collapsible',
          'footer__section',
          { 'collapsible--expanded': event },
        ]"
      >
        <div class="collapsible__header footer__header">
          <h2 class="collapsible__heading footer__heading footer__content">
            活動參予
          </h2>
          <svg
            class="collapsible__chevron footer__chevron"
            @click="footerchevronToggle('event')"
          >
            <use xlink:href="@/image/chevron.svg#chevron"></use>
          </svg>
        </div>
        <div class="collapsible__content footer__collapsible">
          <ul class="list footer__list">
            <li class="footer__content"><a href="#">廚力教學</a></li>
            <li class="footer__content"><a href="#">廚力滿點通識</a></li>
            <li class="footer__content"><a href="#">廚藝比賽投稿</a></li>
            <li class="footer__content"><a href="#">清寒廚力教學贊助</a></li>
          </ul>
        </div>
      </section>
      <section
        :class="[
          'collapsible',
          'footer__section',
          { 'collapsible--expanded': suggest },
        ]"
      >
        <div class="collapsible__header footer__header">
          <h2 class="collapsible__heading footer__heading footer__content">
            推薦廚具
          </h2>
          <svg
            class="collapsible__chevron footer__chevron"
            @click="footerchevronToggle('suggest')"
          >
            <use xlink:href="@/image/chevron.svg#chevron"></use>
          </svg>
        </div>
        <div class="collapsible__content footer__collapsible">
          <ul class="list footer__list">
            <li class="footer__content"><a href="#">刀具</a></li>
            <li class="footer__content"><a href="#">鍋子</a></li>
            <li class="footer__content"><a href="#">盤子</a></li>
            <li class="footer__content"><a href="#">碗與其他類</a></li>
          </ul>
        </div>
      </section>
      <section
        :class="[
          'collapsible',
          'footer__section',
          { 'collapsible--expanded': about },
        ]"
      >
        <div class="collapsible__header footer__header">
          <h2 class="collapsible__heading footer__heading footer__content">
            關於我們
          </h2>
          <svg
            class="collapsible__chevron footer__chevron"
            @click="footerchevronToggle('about')"
          >
            <use xlink:href="@/image/chevron.svg#chevron"></use>
          </svg>
        </div>
        <div class="collapsible__content footer__collapsible">
          <ul class="list footer__list">
            <li class="footer__content"><a href="#">了解我們</a></li>
            <li class="footer__content"><a href="#">聯絡我們</a></li>
            <li class="footer__content"><a href="#">參觀我們</a></li>
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

<style>
/* footer */

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
  background: #1f1f1f;
  padding: 10px 20px 50px;
}

.footer__content {
  color: #fff;
}

.footer__content a:visited,
.footer__content a {
  color: #d0d0d0;
}

.footer__grid {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, minmax(10px, 1fr));
}

.footer__brand {
  margin-top: 5rem;
  text-align: center;
}

.footer__brand .footer__brand__img {
  height: 100%;
  max-height: 100px;
  border-radius: 2px;
}

.footer__copyright {
  font-size: 2.1rem;
  color: #fff;
  opacity: 0.8;
  letter-spacing: 0.05rem;
}

@media screen and (min-width: 1440px) {
  .footer__content .footer__brand .footer__brand__img {
    height: 60px;
    align-self: center;
  }
}

@media screen and (min-width: 1024px) {
  .footer__content .footer__brand .footer__brand__img {
    height: 50px;
    align-self: center;
  }
}

@media screen and (min-width: 768px) {
  .footer__grid {
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

  .footer__background .container {
    margin-top: 3rem;
  }

  .footer__brand {
    order: -1;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 2rem;
  }
  .footer__brand .footer__brand__img {
    height: 36px;
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
  .footer__content {
    max-width: 1140px;
  }
}

@media screen and (max-width: 350px) {
  .footer__content .footer__brand .footer__brand__img {
    height: 80px;
    align-self: center;
  }
}
</style>
