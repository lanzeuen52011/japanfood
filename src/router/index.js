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
        component: import(
          /* webpackChunkName: "about" */ "@/views/child/Menu.vue"
        ),
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/child/About.vue"),
      },
      {
        path: "/member",
        name: "member",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/child/Member.vue"),
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
