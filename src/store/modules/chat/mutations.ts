export default {
    addMessage(state: any, newMessage: any) {
        state.messages.push(newMessage);
        // state.messages = [...newMessage];
    },
    setMessages(state, userMessages) {
        console.log(userMessages);
        state.messages = [...userMessages];
    },
    userWhoIsChattingWith(state, userData) {
        state.userWhoIsChattingWith = userData;
    }
}