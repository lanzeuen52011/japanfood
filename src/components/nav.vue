<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const nav = ref(false);
    const navchevronToggle = (element) => {
      nav.value = !nav.value;
      console.log(nav.value);
    };
    const scrollingdown = ref(false);
    let prevScrollPos = window.pageYOffset;
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos >= 40) {
        if (prevScrollPos < currentScrollPos) {
          // 向下滾動
          scrollingdown.value = true;
        }
        if (prevScrollPos > currentScrollPos) {
          // 向下滾動
          scrollingdown.value = false;
        }
      }

      prevScrollPos = currentScrollPos;
    });
    return { navchevronToggle, nav, scrollingdown };
  },
};
</script>

<template>
  <header>
    <h1>Let Him Cook</h1>
    <nav :class="['navbar', { hide: scrollingdown }]">
      <router-link :class="['navbar__a']" to="/"
        ><img class="logo navbar__logo" src="@/image/LetHimCook1.png" alt=""
      /></router-link>
      <div
        :class="[
          'collapsible',
          'navbar__list',
          { 'collapsible--expanded': nav },
        ]"
      >
        <svg @click="navchevronToggle" class="icon nav__toggler">
          <use xlink:href="@/image/sprite.svg#menu"></use>
        </svg>
        <ul :class="['list', 'collapsible__content', 'header__list']">
          <li class="nav__item">
            <router-link class="list__items" to="/about">關於我們</router-link>
          </li>
          <li class="nav__item">
            <router-link class="list__items" to="/menu">私房菜單</router-link>
          </li>
          <li class="nav__item">
            <router-link class="list__items" to="/member">會員</router-link>
          </li>
          <li class="nav__item">
            <router-link class="list__items" to="/cart">購物車</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>
/* navbar */

.navbar.hide {
  opacity: 0;
  overflow: hidden;
  height: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.2);
  font-size: 1.6rem;
  flex-wrap: wrap;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  max-width: 100vw;
  position: fixed;
  width: 100%;
  background: #fff;
  opacity: 0.8;
  top: 0;
  z-index: 10000;
  transition: opacity 0.3s, height 0.3s;
}
@media screen and (min-width: 1600px) {
  nav.navbar {
    font-size: 1.11vw;
    height: 5.555vw;
  }
  nav.navbar .navbar__logo {
    width: 19.4vw;
  }
}

a {
  text-decoration: none;
}

a:visited,
a {
  color: var(--color-headings);
}

.navbar__a {
  max-height: 100%;
  height: inherit;
}

.list {
  list-style: none;
  display: flex;
}

.list .list__items {
  padding: 1rem;
  text-align: center;
}

.navbar__logo {
  width: 300px;
  justify-content: center;
  display: flex;
  height: inherit;
}

.navbar__list {
  position: relative;
  padding: 2rem;
}
.header__list {
  position: absolute;
  right: 1%;
  top: 100%;
  z-index: 999;
  background: rgba(255, 255, 255, 0.2);
}

@media screen and (max-width: 426px) {
  .navbar__logo {
    width: 100%;
    object-fit: contain;
  }
  .navbar__a {
    justify-content: center;
    display: flex;
    width: 50%;
  }
  .header__list {
    background: rgba(255, 255, 255, 0.2);
  }
  .icon.nav__toggler {
    width: 20px;
    height: 20px;
  }
}

@media screen and (min-width: 1024px) {
  .navbar__a {
    padding-left: 3vw;
  }
  .navbar .navbar__logo {
    width: 280px;
  }
  .list.collapsible__content {
    max-height: 100vh;
    opacity: 1;
    flex-direction: row;
    padding-right: 5rem;
  }
  .icon.nav__toggler {
    display: none;
  }
  .navbar {
    align-items: center;
    height: 80px;
  }
  .nav__item {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .nav__item::before {
    top: 0;
    left: 0;
    height: 1px;
  }
  .nav__item::after {
    bottom: 0;
    right: 0;
    height: 1px;
  }

  .nav__item::after,
  .nav__item::before {
    content: "";
    position: absolute;

    width: 0;
    transition: 1s;
    background: #000;
    z-index: 10;
  }
  .nav__item:hover::after,
  .nav__item:hover::before {
    width: 100%;
  }
  .nav__item .list__items {
    display: block;
    padding: 2rem;
    font-weight: 700;
  }
  .nav__item:hover .list__items {
    transition: color 0.15s ease-in-out;
    color: #000;
  }
  .navbar__list {
    position: unset;
    padding: 0;
  }
  .header__list {
    position: unset;
    right: 0;
    top: 0;
    z-index: 0;
  }
  .collapsible--expanded .collapsible__content {
    background: none;
  }
}

.logo {
  padding: 1rem 2rem;
}

img {
  width: 100%;
}

/* collapsible */
.collapsible__header {
  display: flex;
  justify-content: space-between;
}

.collapsible__heading {
  margin-top: 0;
  font-size: 3rem;
}

.collapsible__chevron {
  transform: rotate(0);
  transition: transform 0.3s;
}

.collapsible__content {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  min-width: 85px;
}

.collapsible--expanded .collapsible__chevron {
  transform: rotate(90deg);
}

.collapsible--expanded .collapsible__content {
  max-height: 100vh;
  opacity: 1;
}
.navbar__a .collapsible--expanded .collapsible__content {
  background: rgba(255, 255, 255, 0.7);
}

.nav__toggler {
  opacity: 0.5;
  transition: box-shadow 0.15s;
  cursor: pointer;
  display: flex;
  width: 40px;
  height: 40px;
}

.nav.collapsible__content .nav__toggler {
  opacity: 1;
  box-shadow: 0 0 0 3px #666;
  border-radius: 5px;
}

.collapsible {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
