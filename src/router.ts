import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      name: "landing-page",
      path: "/coaches",
      component: () => import("./pages/main-page/MainPage.vue"),
    },
    {
      path: "/coaches/:id",
      // component: CoachDetails,
      component: () => import("./pages/coaches/MentorDetail.vue"),
      props: true,
      children: [
        {
          path: "contact",
          component: () => import("./pages/coaches/ContactMentor.vue"),
        },
      ],
    },
    {
      path: "/register",
      component: () => import("./pages/coaches/CoachRegistration.vue"),
      meta: { requireAuth: true },
    },
    {
      path: "/requests",
      component: () => import("./pages/requests/RequestsRecevied.vue"),
      meta: { requireAuth: true },
    },
    {
      path: "/signIn",
      component: () => import("./pages/auth/SignIn.vue"),
      meta: { requireUnAuth: true },
    },
    {
      path: "/signUp",
      component: () => import("./pages/auth/SignUp.vue"),
      meta: { requireUnAuth: true },
    },
    {
      path: "/talents/:page?",
      name: "talents",
      component: () => import("./pages/talents/MentorPage.vue"),
    },
    {
      path: "/:notFound(.*)",
      component: () => import("./pages/NotFound.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});
// 根據是否登入來跳轉不同頁面
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.getters.isAuthenticated) {
    next("/SignIn");
  } else if (to.meta.requireUnAuth && store.getters.isAuthenticated) {
    next("coaches");
  } else {
    next();
  }
});
export default router;
