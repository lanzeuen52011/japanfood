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
  <Register class="Member" :handleLogin="handleLogin" v-show="!login" />
  <Login class="Member" :handleLogin="handleLogin" v-show="login" />
</template>

<style lang="scss" scoped>
.Member {
  margin: calc(var(--var-first_for_navbar) + 1rem) auto 10rem;
}
</style>
