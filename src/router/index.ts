import { createRouter, createWebHistory } from "vue-router";

import routes from "../router/routes";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

router.beforeResolve(async (to) => {
  document.title = `${to.meta.title || "Education Hub"}`;
});

export default router;
