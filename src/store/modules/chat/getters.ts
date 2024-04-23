export default {
    messages(state) {
        return state.messages;
    },
    userWhoIsChattingWith(state) {
        return state.userWhoIsChattingWith;
    },
    getChatList(state) {
        return Object.values(state.mostRecentMessage || {});
    }
}