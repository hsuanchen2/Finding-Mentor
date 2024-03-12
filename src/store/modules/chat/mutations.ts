export default {
    // addMessage(state: any, newMessage: any) {
    //     state.messages.push(newMessage);
    // },
    setMessages(state, userMessages) {
        state.messages = [...userMessages];
    },
    setContactId(state, contactId) {
        state.userWhoIsChattingWith = contactId;
    }
}