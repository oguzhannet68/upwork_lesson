import { createRouter, createWebHistory } from "vue-router";
import AboutView from "./views/AboutView.vue";
import Login from "./views/login.vue";
import AuthGuard from "./utils/auth.guard";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
      meta: { loginRequired: true },
    },
  ],
});

router.beforeEach(AuthGuard);

export default router;
