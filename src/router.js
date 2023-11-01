import { createRouter, createWebHistory } from "vue-router";
import CoachDetails from "./pages/coaches/CoachDetails.vue";
// import CoachesList from "./pages/coaches/CoachesList.vue";
import MainPage from "./pages/main-page/MainPage.vue";
import CoachesRegistration from "./pages/coaches/CoachRegistration.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsRecevied from "./pages/requests/RequestsRecevied.vue";
import NotFound from "./pages/NotFound.vue";
// import UserAuth from "./pages/auth/UserAuth.vue";
import UserAuth2 from "./pages/auth/UserAuth2.vue";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      component: MainPage,
    },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [
        {
          path: "contact",
          component: ContactCoach,
        },
      ],
    },
    {
      path: "/register",
      component: CoachesRegistration,
      meta: { requireAuth: true },
    },
    {
      path: "/requests",
      component: RequestsRecevied,
      meta: { requireAuth: true },
    },
    {
      path: "/auth",
      component: UserAuth2,
      meta: { requireUnAuth: true },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
// 根據是否登入來跳轉不同頁面
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requireUnAuth && store.getters.isAuthenticated) {
    next("coaches");
  } else {
    next();
  }
});
export default router;
