import { createRouter, createWebHistory } from "vue-router";
import CoachDetails from "./pages/coaches/CoachDetails.vue";
import CoachesRegistration from "./pages/coaches/CoachRegistration.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsRecevied from "./pages/requests/RequestsRecevied.vue";
import NotFound from "./pages/NotFound.vue";
import SignUp from "./pages/auth/SignUp.vue";
import SignIn from "./pages/auth/SignIn.vue";
import Talents from "./pages/talents/MentorPage.vue";
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
      path: "/signIn",
      component: SignIn,
      meta: { requireUnAuth: true },
    },
    {
      path: "/signUp",
      component: SignUp,
      meta: { requireUnAuth: true },
    },
    {
      path: "/talents",
      component: Talents,
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
    next("/SignIn");
  } else if (to.meta.requireUnAuth && store.getters.isAuthenticated) {
    next("coaches");
  } else {
    next();
  }
});
export default router;
