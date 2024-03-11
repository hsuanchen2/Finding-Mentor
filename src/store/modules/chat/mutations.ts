export default {
    // addMessage(state: any, newMessage: any) {
    //     state.messages.push(newMessage);
    // },
    setMessages(state, messages) {
        console.log("setting messages in the store...");
        state.messages = messages;
    }
}