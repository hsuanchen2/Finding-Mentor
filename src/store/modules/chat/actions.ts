import moment from "moment";
import { ref, push, onValue, query, orderByChild, equalTo, getDatabase, get, off, set, child } from "firebase/database";
import { db } from "@/../config/firebaseAuth.js";
import getUserData from "@/utils/getUserData"

interface message {
    id: string;
    content: string;
    senderId: string;
    receiverId: string;
    timeStamp: string;
}

interface newMessageNode {
    latestMessage: Object,
    userData: Object,
}

export default {
    async sendMessage(context: any, payload: any) {
        // update message to conversation collection
        const newMessageNode: newMessageNode = {
            latestMessage: {},
            userData: {},
        };
        const db = getDatabase();
        const newMessage: message = {
            id: new Date().getTime().toString(),
            content: payload.content,
            senderId: payload.senderId,
            receiverId: payload.receiverId,
            timeStamp: moment().format('YYYY/MM/DD/HH:mm'),
        };
        const conversationId = [payload.senderId, payload.receiverId].sort().join('-');
        const conversationRef = ref(db, `conversations/${conversationId}`);
        const recentMessagesRef = child(conversationRef, 'recentMessages');
        const newRecentMessageRef = push(recentMessagesRef);

        // make a condition check if the userid is sender or the receiver
        // const userData = await getUserData(payload.receiverId, payload.content); 
        // console.log(userData);
        newMessageNode.latestMessage = newMessage;

        await set(newRecentMessageRef, newMessage);
        // console.log(newMessageNode); 
        // set most recent message
        await context.dispatch('updateMostRecentMessage', newMessageNode);
    },

    subscribeToRecentMessages(context, payload) {
        const db = getDatabase();
        const conversationId = JSON.parse(JSON.stringify([payload.senderId, payload.receiverId].sort().join('-')));
        const recentMessagesRef = ref(db, `conversations/${conversationId}/recentMessages`);
        context.commit("setRecentMessageRef", recentMessagesRef);

        const handleNewMessage = (snapshot) => {
            const messages = snapshot.val();
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
        const DATABASE_URL = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY;
        const response = await fetch(`${DATABASE_URL}/coaches/${payload}.json`);
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
    },

    async updateMostRecentMessage(context: any, newMessage: message) {
        const db = getDatabase();
        const senderData = await getUserData(newMessage.latestMessage.receiverId);
        const receiverData = await getUserData(newMessage.latestMessage.senderId);
        const senderRecentMessageRef = ref(db, `recentMessages/${newMessage.latestMessage.senderId}/${newMessage.latestMessage.receiverId}`);
        const receiverRecentMessageRef = ref(db, `recentMessages/${newMessage.latestMessage.receiverId}/${newMessage.latestMessage.senderId}`);
        const senderNewNode = JSON.parse(JSON.stringify(newMessage));
        const receiverNewNode = JSON.parse(JSON.stringify(newMessage));
        senderNewNode.userData = senderData;
        senderNewNode.userData.userId = newMessage.latestMessage.receiverId;
        receiverNewNode.userData = receiverData;
        receiverNewNode.userData.userId = newMessage.latestMessage.senderId;
        await set(senderRecentMessageRef, senderNewNode);
        await set(receiverRecentMessageRef, receiverNewNode);
    },

    async listenToMostRecentMessage(context, userId: string) {
        const db = getDatabase();
        const mostRecentMessageRef = ref(db, `recentMessages/${userId}`);
        let chatListData;
        const handleNewMessage = async (snapshot) => {
            const data = await snapshot.val();
            // console.log(data);
            chatListData = Object.values(data);
            // console.log(chatListData);
            chatListData && context.commit('setMostRecentMessage', chatListData);
            // console.log(context.state.mostRecentMessage);
        };
        const unsub = onValue(mostRecentMessageRef, handleNewMessage);
        context.commit("setMostRecentMessageRef", unsub);
    },
}; 