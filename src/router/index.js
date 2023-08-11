import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "@/views/child/Home.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: HomeView,
    children: [
      {
        //此處為點入About時，首先載入的嵌套內容。
        path: "/",
        name: "home",
        component: Home,
      },
      {
        //此處為點入About時，首先載入的嵌套內容。
        path: "/menu",
        name: "menu",
        component: () => import("@/views/child/Menu.vue"),
      },
      // {
      //   path: "/about",
      //   name: "about",
      //   component: () => import("@/views/child/About.vue"),
      // },
      {
        path: "/member",
        name: "member",
        component: () => import("@/views/child/Member.vue"),
      },
      {
        path: "/cart",
        name: "cart",
        component: () => import("@/views/child/Cart.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { left: 0, top: 0 };
    }
  },
});
export default router;
