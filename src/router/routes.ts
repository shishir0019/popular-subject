import type { RouteRecordRaw } from "vue-router";
import DefaultLayout from "../layouts/Default.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/popular-subjects",
  },
  {
    path: "/popular-subjects",
    name: "popular-subjects",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "popular-subjects.index",
        component: () => import("../views/populer-subjects/index.vue"),
        meta: {
          title: "Populer Subjects",
        },
      }
    ],
  }
];

export default routes;
