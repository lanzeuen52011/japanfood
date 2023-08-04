<script>
export default {
  props: {
    handleLogin: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>
<template>
  <div class="container">
    <img class="form__img" src="@/image/favicon.jpg" alt="" />
    <span class="form__title">註冊</span>
    <form class="form">
      <div class="input-group">
        <i class="ri-user-line form__icon"></i>
        <input type="text" id="name" required class="input-group__input" />
        <label for="name" class="input-group__label">姓名</label>
        <span class="form__bar"></span>
      </div>
      <div class="input-group">
        <i class="ri-mail-line form__icon"></i>
        <input type="text" id="email" required class="input-group__input" />
        <label for="email" class="input-group__label">Email電子信箱</label>
        <span class="form__bar"></span>
      </div>
      <div class="input-group">
        <i class="ri-lock-line form__icon"></i>
        <input
          id="password"
          type="password"
          required
          class="input-group__input"
        />
        <label for="password" class="input-group__label">密碼</label>
        <span class="form__bar"></span>
      </div>
      <div class="input-group">
        <i class="ri-lock-line form__icon"></i>
        <input
          id="confirm_password"
          type="password"
          required
          class="input-group__input"
        />
        <label for="confirm_password" class="input-group__label"
          >確認密碼</label
        >
        <span class="form__bar"></span>
      </div>
      <button type="submit" class="form__button">註冊</button>
      <p class="form__switch">
        已經有帳號了嗎？
        <a type="switch" @click="props.handleLogin">點我登入</a>
      </p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
/* ======================== */
/* 
    Ignore the following styles. They are not important to achieve the effect.
    I'm only using them for looks (overall page background/font styles/centering content).
*/
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* ======================== */
/* General styles */
button,
input {
  font: inherit;
  border: none;
  outline: none;
}
/* General styles end */
.container {
  position: relative;
  isolation: isolate;
  width: 40rem;
  padding: 10rem 0;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 1rem rgba(0, 0, 0, 0.1);
  overflow: visible;
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  height: calc(100vh - calc(var(--var-first_for_navbar) + 1rem) - 10vh);
  min-height: 0;
}
.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 10rem;
  background-color: var(--color-member_page_background);
  border-radius: 1rem 1rem 100% 100%;
}
.form__title {
  position: absolute;
  color: #fff;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: default;
  font-weight: 700;
  letter-spacing: 0.5rem;
  margin-left: 1rem;
  font-size: 3rem;
}
.form__img {
  position: absolute;
  width: 25px;
  color: #fff;
  top: 4rem;
  object-fit: contain;
  mix-blend-mode: color-burn;
  left: 20%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  scale: 1.5;
}
.form {
  padding: 2.5rem;
  background-color: inherit;
}
.input-group {
  position: relative;
  display: flex;
  align-items: baseline;
  margin-inline: auto;
  margin-top: 1rem;
}
.form__icon {
  font-size: 2rem;
  margin-right: 1rem;
  color: var(--color-member_page_background);
}
.input-group__input {
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
  padding-block: 1rem;
  font: inherit;
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: 2px solid #fff;
  background-color: transparent;
  transition: outline-color 250ms;
}
.form__bar {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 1px;
}
.form__bar::before {
  content: "";
  position: absolute;
  background-color: var(--color-member_page_background);
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s;
}
.input-group__input:focus + .form__bar::before,
.input-group__input:valid + .form__bar::before {
  transform: scaleX(1);
}
.input-group__label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  translate: 40px 12px;
  cursor: text;

  transition: translate 250ms, scale 250ms, padding-inline 250ms;
}
.input-group__input:focus + .input-group__label,
.input-group__input:valid + .input-group__label {
  padding-inline: 5px;
  translate: -5px -5px;
  scale: 0.8;
  color: var(--color-member_page_darken);
}
.form__button {
  display: block;
  margin: 2.5rem auto 3rem;
  padding: 1rem 5rem;
  background-color: var(--color-member_page_background);
  color: #fff;
  border-radius: 3rem;
  cursor: pointer;
}
.form__button:hover {
  background-color: var(--color-member_page_darken);
}
.form__switch {
  font-size: 1.5rem;
  text-align: center;
  color: #a1a1a1;
}
.form__switch a {
  background: 0;
  text-decoration: none;
  color: var(--color-member_page_background);
  cursor: pointer;
}
.form__switch a:hover {
  text-decoration: underline;
  color: var(--color-member_page_darken);
}
@media screen and (min-width: 43.75em) {
  .container::before {
    height: 30rem;
  }
  .form__title {
    left: 10rem;
    transform: none;
  }
  .form {
    transform: translateX(10rem);
    border-radius: inherit;
    box-shadow: inherit;
  }
}
@media screen and (max-width: 425px) {
  .container {
    width: 90vw;
  }
}
</style>
