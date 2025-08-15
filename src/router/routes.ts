import type { RouteRecordRaw } from "vue-router";
import DefaultLayout from "../layouts/Default.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/subjects/popular",
  },
  {
    path: "/subjects",
    component: DefaultLayout,
    children: [
      {
        path: "popular",
        name: "popular-subjects.index",
        component: () => import("../views/subjects/popular/index.vue"),
        meta: {
          title: "Popular Subjects",
        },
      },
      {
        path: ":subject_id/detail",
        name: "subject-details.index",
        component: () => import("../views/subjects/details/index.vue"),
        meta: {
          title: "Details",
        },
      },
    ],
  }
];

export default routes;
