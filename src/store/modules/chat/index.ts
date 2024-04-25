import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
    namespaced: true,
    state() {
        return {
            messages: [],
            userWhoIsChattingWith: {},
            recentMessageRef: null,
            mostRecentMessage: [],
            mostRecentMessageRef: null, 
        };
    },
    mutations: mutations,
    getters: getters,
    actions: actions,
};
