export default {
    messages(state) {
        return state.messages;
    },
    userWhoIsChattingWith(state) {
        return state.userWhoIsChattingWith;
    },
    getChatList(state) {
        const chatList = [...state.mostRecentMessage];
        if (chatList.length === 1) return chatList;

        return chatList.sort((a, b) => {
            const dateA = new Date(a.latestMessage.timeStamp);
            const dateB = new Date(b.latestMessage.timeStamp);
            return dateB - dateA;
        });
    }
}
