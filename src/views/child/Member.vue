<script>
import Register from "@/components/register.vue";
import Login from "@/components/login.vue";
import { onMounted, ref } from "vue";

export default {
  components: {
    Register,
    Login,
  },
  setup() {
    const login = ref(false);
    const circle = ref(false);
    const handleLogin = () => {
      login.value = !login.value;
      circle.value = !circle.value;
    };
    const circleAni = () => {
      circle.value = !circle.value;
    };
    let numberOfCircles = ref(60);
    onMounted(() => {
      setInterval(() => {
        circleAni();
      }, 3000);
    });
    return {
      handleLogin,
      login,
      circle,
      numberOfCircles,
    };
  },
};
</script>

<template>
  <section class="background">
    <div
      v-for="i in numberOfCircles"
      :key="i"
      :class="{
        [`circle-${i}`]: true,
        [`circle-${i}-move`]: circle,
      }"
    ></div>
  </section>
  <Register
    id="Register"
    :class="['Member', { ani: !login }]"
    :handleLogin="handleLogin"
  />
  <Login
    id="Login"
    :class="['Member', { ani: login }]"
    :handleLogin="handleLogin"
  />
</template>

<style lang="scss" scoped>
.background {
  min-height: 100vh;
  // margin: calc(var(--var-first_for_navbar) + 1rem) auto 10rem;
  position: relative;
}
// $max-vw: 100;
// $max-vh: 100;
// @for $i from 0 to 60 {
//   $random-left: random($max-vw);
//   $random-top: random($max-vh);

//   // 隨機選取計算符號
//   $calc-operator: null;
//   $random-operator: random();
//   @if $random-operator < 0.5 {
//     $calc-operator: "+";
//   } @else {
//     $calc-operator: "-";
//   }

//   .circle-#{$i} {
//     width: 3.472222vw;
//     position: absolute;
//     height: 3.472222vw;
//     border: 0;
//     border-radius: 100%;
//     z-index: -1;
//     transition: left 0.5s, top 0.5s, right 0.5s, bottom 0.5s;

//     @if $i % 4 == 0 {
//       top: #{$random-top}vh;
//       left: #{$random-left}vw;
//       background: var(--color-member_page_background);
//     } @else if $i % 4 == 1 {
//       top: #{$random-top}vh;
//       right: #{$random-left}vw;
//       background: var(--color-member_page_background1);
//     } @else if $i % 4 == 2 {
//       bottom: #{$random-top}vh;
//       left: #{$random-left}vw;
//       background: var(--color-member_page_darken);
//     } @else {
//       bottom: #{$random-top}vh;
//       right: #{$random-left}vw;
//       background: var(--color-member_page_darken1);
//     }
//   }
//   .circle-#{$i}-move {
//     @if $i % 4 == 0 {
//       top: calc(#{$random-top}vh #{$calc-operator} 3.472222vw);
//       left: calc(#{$random-left}vw #{$calc-operator} 3.472222vw);
//     } @else if $i % 4 == 1 {
//       top: calc(#{$random-top}vh #{$calc-operator} 3.472222vw);
//       right: calc(#{$random-left}vw #{$calc-operator} 3.472222vw);
//     } @else if $i % 4 == 2 {
//       bottom: calc(#{$random-top}vh #{$calc-operator} 3.472222vw);
//       left: calc(#{$random-left}vw #{$calc-operator} 3.472222vw);
//     } @else {
//       bottom: calc(#{$random-top}vh #{$calc-operator} 3.472222vw);
//       right: calc(#{$random-left}vw #{$calc-operator} 3.472222vw);
//     }
//   }
// }

$max-vw: 100;
$max-vh: 100;
@for $i from 0 to 60 {
  $random-left: random($max-vw);
  $random-top: random($max-vh);

  // 隨機選取計算符號
  $calc-operator: null;
  $random-operator: random();
  @if $random-operator < 0.5 {
    $calc-operator: "+";
  } @else {
    $calc-operator: "-";
  }

  .circle-#{$i} {
    width: 3.472222vw;
    position: absolute;
    height: 3.472222vw;
    border: 0;
    border-radius: 100%;
    left: #{$random-left}vw;
    top: #{$random-top}vh;
    z-index: -1;
    transition: left 0.3s, top 0.3s;
    @if $i % 2 == 0 {
      background: var(--color-member_page_background);
    } @else {
      background: var(--color-member_page_darken);
    }
  }
  .circle-#{$i}-move {
    left: calc(#{$random-left}vw #{$calc-operator} 3.472222vw);
    top: calc(#{$random-top}vh #{$calc-operator} 3.472222vw);
  }
}

.Member {
  position: absolute;
  margin: 0;
  top: calc(var(--var-first_for_navbar) + 5vh);
  left: 50%;
  transform: translate(-50%, 0%);
  // transition: display 250ms;
  // transform: display 250ms;
  animation-name: isClicked;
  animation-duration: 0.3s;
}

.ani {
  animation-name: Click;
  animation-duration: 0.3s;
  transition: opacity 0.3s;
  opacity: 0;
  display: none;
}

@keyframes isClicked {
  0% {
    display: none;
    scale: 0.6;
    opacity: 0;
    transform: translate(-30%, 0%);
  }

  50% {
    scale: 1.1;
  }

  100% {
    display: block;
    scale: 1;
    opacity: 1;
    transform: translate(-50%, 0%);
  }
}

@keyframes Click {
  0% {
    display: block;
    scale: 1;
    opacity: 1;
    transform: translate(-50%, 0%);
  }

  50% {
    scale: 0.8;
    transform: translate(-80%, 0%);
  }

  100% {
    scale: 0.6;
    opacity: 0;
    transform: translate(-100%, 0%);
  }
}
</style>
