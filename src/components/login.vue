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
  <section class="container">
    <img class="form__img" src="@/image/favicon.jpg" alt="" />
    <span class="form__title">登入</span>
    <form class="form" action="">
      <div class="input-group">
        <i class="ri-mail-line form__icon"></i>
        <input
          type="text"
          id="login_email"
          required
          class="input-group__input"
        />
        <label for="login_email" class="input-group__label"
          >Email電子信箱(帳號)</label
        >
        <span class="form__bar"></span>
      </div>
      <div class="input-group">
        <i class="ri-lock-line form__icon"></i>
        <input
          id="login_password"
          type="password"
          required
          class="input-group__input"
        />
        <label for="login_password" class="input-group__label">密碼</label>
        <span class="form__bar"></span>
      </div>
      <button type="submit" class="form__button">登入</button>
      <p class="form__switch">
        沒有帳號嗎？
        <a type="switch" @click="props.handleLogin">點我註冊</a>
      </p>
    </form>
  </section>
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

@media screen and (min-width: 1600px) {
  /* General styles end */
  .container {
    width: 27.7777vw;
    padding: 6.944444vw 0;
    border-radius: 0.6944444vw;
    box-shadow: 0 0.06944444vw 0.6944444vw rgba(0, 0, 0, 0.1);
    font-size: 1.11111vw;
  }
  // .container::before {
  //   height: 2.08333vw;
  //   border-radius: 0.6944444vw 0.6944444vw 100% 100%;
  // }
  .form__title {
    top: 2.430555vw;
    letter-spacing: 0.3472222vw;
    margin-left: 0.6944444vw;
    font-size: 2.08333vw;
    left: 6.944444vw;
  }
  .form__img {
    width: 1.7361111vw;
    top: 2.777777vw;
    font-size: 1.7361111vw;
  }
  .form {
    padding: 1.7361111vw;
    transform: translateX(6.9444444vw);
  }
  .input-group {
    margin-top: 0.6944444vw;
  }
  .form__icon {
    font-size: 1.388888vw;
    margin-right: 0.6944444vw;
  }
  .input-group__input {
    margin-top: 0.3472222vw;
    padding-block: 0.6944444vw;
    padding: 0.6944444vw;
    border-radius: 0.27777777vw;
    outline: 0.1388888vw solid #fff;
  }
  .form__bar {
    height: 0.06944444vw;
  }
  .form__bar::before {
    height: 0.13888888vw;
  }
  .input-group__label {
    translate: 2.7777777vw 0.833333333vw;
  }
  .input-group__input:focus + .input-group__label,
  .input-group__input:valid + .input-group__label {
    padding-inline: 0.34722222vw;
    translate: -0.34722222vw -0.34722222vw;
  }
  .form__button {
    margin: 1.7361111vw auto 2.08333333vw;
    padding: 0.6944444vw 3.4722222vw;
    border-radius: 2.08333333vw;
  }
  .form__switch {
    font-size: 1.04166666vw;
  }
}
</style>
