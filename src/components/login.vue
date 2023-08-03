<script>
export default {};
</script>
<template>
  <div class="container">
    <span class="form__title">Sign up</span>
    <form class="form">
      <div class="input-group">
        <i class="ri-user-line form__icon"></i>
        <input type="text" id="name" required class="input-group__input" />
        <label for="name" class="input-group__label">Name</label>
        <span class="form__bar"></span>
      </div>
      <div class="input-group">
        <i class="ri-mail-line form__icon"></i>
        <input type="text" id="email" required class="input-group__input" />
        <label for="email" class="input-group__label">Email address</label>
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
        <label for="password" class="input-group__label">Password</label>
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
          >Confirm password</label
        >
        <span class="form__bar"></span>
      </div>
      <button type="submit" class="form__button">Sign up</button>
      <p class="form__switch">Already have an account? <a href="#">Login</a></p>
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
html {
  font-size: 62.5%;
}
html,
body {
  height: 100%;
}
body {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  color: #fff;
  background-color: #000;
  display: grid;
  place-items: center;
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
  color: #fff;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 1rem rgba(0, 0, 0, 0.1);
  overflow: visible;
}
.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 10rem;
  background-color: var(--color-body);
  border-radius: 1rem 1rem 100% 100%;
}
.form__title {
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
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
}
.form__icon {
  font-size: 2rem;
  margin-right: 1rem;
  color: var(--color-body);
}
.input-group__input {
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
  padding-block: 1rem;
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
  background-color: var(--color-body);
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
.form__button {
  display: block;
  margin: 2.5rem auto 3rem;
  padding: 1rem 5rem;
  background-color: var(--color-body);
  color: #fff;
  border-radius: 3rem;
  cursor: pointer;
}
.form__button:hover {
  background-color: var(--color-headings);
}
.form__switch {
  font-size: 1.5rem;
  text-align: center;
  color: #a1a1a1;
}
.form__switch a {
  text-decoration: none;
  color: var(--color-body);
}
.form__switch a:hover {
  text-decoration: underline;
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
</style>
