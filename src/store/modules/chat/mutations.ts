export default {
    addMessage(state: any, message: any) {
        console.log("mutations!!");
        const newMessage = JSON.parse(JSON.stringify(message));
        state.messages.push({ ...newMessage });
    },
    setMessages(state, userMessages) {
        state.messages = userMessages;
    },
    userWhoIsChattingWith(state, userData) {
        state.userWhoIsChattingWith = userData;
    },
    setHandleSnapshot(state, snapshot) {
        state.handleSnapshot = snapshot;
    }
}; 