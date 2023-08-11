import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { numPrice } from "@/lib/tools.js";

const app = createApp(App);

app.directive("price", {
  //TemplateRef
  mounted(el, binding) {
    const p = numPrice(binding.value);
    el.innerHTML = "$ " + p;
  },
  updated(el, binding) {
    //TemplateRef
    const p = numPrice(binding.value);
    el.innerHTML = "$ " + p;
  },
}); //此處為自定義一個函數，並且引入tool.js的函式來使用binding.value，並返回結果至el.innerHTML。

app.use(router).mount("#app");
