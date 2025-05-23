import { ref, push, onValue, query, orderByChild, equalTo, getDatabase, get, off, set, child } from "firebase/database";
export default {
    addMessage(state: any, message: any) {
        state.messages.push(message);
    },
    setMessages(state, userMessages) {
        // state.messages = [];
        state.messages = userMessages;
    },
    userWhoIsChattingWith(state, userData) {
        state.userWhoIsChattingWith = userData;
    },
    setRecentMessageRef(state, ref) {
        state.recentMessageRef = ref;
    },
    clearRecentMessageRef(state) {
        state.recentMessageRef = null;
    },
    setMostRecentMessageRef(state, ref) {
        state.mostRecentMessageRef = ref;
    },
    setMostRecentMessage(state, payload) {
        state.mostRecentMessage = payload;
    }
}; 