import moment from "moment";
import { ref, push, onValue, query, orderByChild, equalTo, getDatabase, get, off, set, child } from "firebase/database";
import { db } from "@/../config/firebaseAuth.js";
import { send } from "vite";

interface message {
    id: string;
    content: string;
    senderId: string;
    receiverId: string;
    timeStamp: string;
}

export default {
    async sendMessage(context: any, payload: any) {
        const db = getDatabase();
        const newMessage: message = {
            id: new Date().getTime().toString(),
            content: payload.content,
            senderId: payload.senderId,
            receiverId: payload.receiverId,
            timeStamp: moment().format('YYYY/MM/DD/HH:mm'),
        };

        // Write the message to the 'messages' node
        // const messagesRef = ref(db, 'messages');
        // const newMessageRef = push(messagesRef);
        // await set(newMessageRef, newMessage);

        // Also write the message to the 'recentMessages' of the conversation
        const conversationId = [payload.senderId, payload.receiverId].sort().join('-');
        console.log(conversationId);
        const conversationRef = ref(db, `conversations/${conversationId}`);
        const recentMessagesRef = child(conversationRef, 'recentMessages');
        const newRecentMessageRef = push(recentMessagesRef);
        await set(newRecentMessageRef, newMessage);

        // Update the 'participantIds' of the conversation
        // const participantIdsRef = child(conversationRef, 'participantIds');
        // await set(participantIdsRef, [payload.senderId, payload.receiverId]);
    },
    // 初步估計是沒有成功 off掉 listener
    subscribeToRecentMessages(context, payload) {
        console.log("start subbing!");
        // console.log(context.state.chat.recentMessageRef);
        const db = getDatabase();
        const conversationId = JSON.parse(JSON.stringify([payload.senderId, payload.receiverId].sort().join('-')));
        const recentMessagesRef = ref(db, `conversations/${conversationId}/recentMessages`);
        context.commit("setRecentMessageRef", recentMessagesRef);
        console.log(payload.senderId + " " + payload.receiverId);
        console.log(conversationId);
        //  onValue is triggered once when the listener is attached and again every time the data, including children, changes
        const handleNewMessage = (snapshot) => {
            console.log("listening to" + " " + conversationId);
            const messages = snapshot.val();
            console.log(messages);
            const messagesArray = Object.values(messages);
            const lastMessage = messagesArray.slice(-1)[0];
            const lastMessageId = lastMessage.id;
            const isMessageDuplicate = context.state.messages.some((message: any) => message.id === lastMessageId);
            !isMessageDuplicate && context.commit('addMessage', JSON.parse(JSON.stringify(lastMessage)));
        };
        const unsub = onValue(recentMessagesRef, handleNewMessage);
        context.commit("setRecentMessageRef", unsub);
    },

    unSubscribeToRecentMessages(context) {
        const unsub = context.state.recentMessageRef;
        if (unsub) {
            unsub();
            context.commit("setRecentMessageRef", null);
        };
    },


    async setContactUser(context, payload) {
        const dbUrl = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY;
        const response = await fetch(`${dbUrl}/coaches/${payload}.json`);
        const data = await response.json();
        context.commit("userWhoIsChattingWith", data);
    },

    async fetchAllMessages(context, payload) {
        context.commit("setMessages", []);
        const { senderId, receiverId } = payload;
        const conversationId = [senderId, receiverId].sort().join('-');
        const messagesRef = ref(db, `conversations/${conversationId}/recentMessages`);
        const snapshot = await get(messagesRef);
        const data = await snapshot.val();
        let dataArray;
        if (!data) {
            context.commit('setMessages', []);
            return;
        };
        dataArray = Object.values(data);
        context.commit('setMessages', [...dataArray]);
    }
}; 