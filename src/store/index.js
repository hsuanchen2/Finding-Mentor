import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index.js";
import requestsModule from "./modules/requests/index.js";
import authModule from "./modules/auth/index.js";
import cartModule from "./modules/cart/index.ts";

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
