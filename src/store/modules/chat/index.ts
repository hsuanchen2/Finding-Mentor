import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
    namespaced: true,
    state() {
        return {
            messages: [
                // give me a message object
            ]
        };
    },
    mutations: mutations,
    getters: getters,
    actions: actions,
};
