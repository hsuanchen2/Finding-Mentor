import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index";
import requestsModule from "./modules/requests/index";
import authModule from "./modules/auth/index";
import cartModule from "./modules/cart/index";

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
    cart: cartModule,
  },
  // root state: current logged in user id
});
export default store;
