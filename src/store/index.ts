import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index";
import requestsModule from "./modules/requests/index";
import authModule from "./modules/auth/index";
import cartModule from "./modules/cart/index";
import chatModule from "./modules/chat/index";
const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
    cart: cartModule,
    chat: chatModule,
  },
  // root state: current logged in user id
});
export default store;
