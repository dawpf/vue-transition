import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/aaa",
    name: "Aaa",
    component: () => import(/* webpackChunkName: "aaa" */ "../views/aaa.vue"),
    children: [
      {
        path: "bbb",
        name: "Bbb",
        component: () =>
          import(/* webpackChunkName: "bbb" */ "../views/bbb.vue"),
        children: [
          {
            path: "ccc",
            name: "Ccc",
            component: () =>
              import(/* webpackChunkName: "ccc" */ "../views/ccc.vue"),
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
