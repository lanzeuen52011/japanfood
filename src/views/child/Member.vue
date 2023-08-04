<script>
import Register from "@/components/register.vue";
import Login from "@/components/login.vue";
import { ref } from "vue";

export default {
  components: {
    Register,
    Login,
  },
  setup() {
    const login = ref(false);
    const handleLogin = () => {
      login.value = !login.value;
      console.log(login.value);
    };
    return {
      handleLogin,
      login,
    };
  },
};
</script>

<template>
  <section class="background"></section>
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
.Member {
  position: absolute;
  margin: 0;
  top: calc(var(--var-first_for_navbar) + 1rem);
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
    transform: translate(-70%, 0%);
  }
}
</style>
