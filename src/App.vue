<template>
  <router-view />
</template>

<style lang="scss">
html {
  font-size: 62.5%;
}

body {
  font-family: 微軟正黑體, Inter, Arial, Arial, Helvetica, sans-serif;
  color: var(--color-body);
  font-size: 2.4rem;
  line-height: 1.5;
  margin: 0;
}

// 調色盤
:root {
  --color-categoreis_background_hover: rgba(34, 34, 34, 0.1);
  --color-categoreis_item_like: #ef7e7e;
  --color-categoreis_item_headtext: #f6f2f2;
  --color-categoreis_item_text: #dddddd;
  --color-categoreis_item_tags: #444;
  --color-body: #5c5c5c;
  --color-headings: #494949;
  --color-line: #000;
  --color-member_page_background1: #fee4e8;
  --color-member_page_background: #f0b9b6;
  --color-member_page_darken: rgba(225, 148, 154, 1);
  // --color-member_page_darken: #e1949a;
  --color-member_page_darken1: #c45961;
  --color-button: #c45961; //af5964
}

// 變數宣告
:root {
  --var-first_for_navbar: 7rem; // nav有空間，所以讓其他網頁內容有空間
  @media screen and (min-width: 426px) {
    --var-first_for_navbar: 10rem;
  }
  @media screen and (min-width: 768px) {
    --var-first_for_navbar: 8rem;
  }

  @media screen and (min-width: 1440px) {
    --var-first_for_navbar: 5.555555vw;
  }
}

// 輔助說明，hover按鈕時，會跳出說明(自製說明，可參考bookModal.vue的，data-tooltip="加入購物車！"，來參考使用)
.custom-tooltip {
  position: relative;
}

.custom-tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  width: 210%;
}

.custom-tooltip:hover::after {
  opacity: 1;
}

/*Typographiy*/

*,
*::after,
*::before {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5 {
  color: var(--color-headings);
  margin-bottom: 1rem;
  line-height: 1.1;
  cursor: default;
}

h2,
h3 {
  display: inline-block;
}

h1 {
  font-size: 7rem;
  display: none;
}

h2 {
  font-size: 4rem;
  color: var(--color-headings);
}

h3 {
  font-size: 3rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
}

h4 {
  margin-top: 0;
  margin-bottom: -2vh;
  margin-left: 3.5vw;
  font-weight: 500;
}

h5,
h6 {
  display: none;
}

p {
  margin-top: 0;
  cursor: default;
}

.none {
  display: none;
}
.container {
  min-height: 100vh;
  overflow: hidden;
}

.abso {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
}
.head {
  font-size: 5rem;
  font-weight: 700;
  margin: 0;
}

.head_container {
  display: flex;
  padding: 3rem 4rem 1rem;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
}

.grid li {
  list-style: none;
}

li {
  list-style: none;
}

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

@media screen and (min-width: 1600px) {
  body {
    font-size: 1.6666vw;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 0.69444vw;
  }

  h1 {
    font-size: 4.86111vw;
  }

  h2 {
    font-size: 2.7777vw;
  }

  h3 {
    font-size: 2.08333vw;
    margin-top: 1.041666vw;
    margin-left: 1.041666vw;
  }

  .abso {
    height: 5.5555vw;
  }
  .head {
    font-size: 3.47222vw;
  }

  .head_container {
    padding: 2.0833vw 2.777777777vw 0.69444444vw;
  }
  .border {
    border: 0.06944444vw solid var(--color-member_page_background);
    width: 2.083333vw;
    height: 2.083333vw;
    border-left: 0.034722222vw;
    &.border__first {
      border: 0.06944444vw solid var(--color-member_page_background);
    }
  }
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
