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
}

.none {
  display: none;
}

.abso {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
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
