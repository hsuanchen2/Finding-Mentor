import moment from "moment";
import { ref, push, onValue, query, orderByChild, equalTo, getDatabase, get, off, onChildAdded } from "firebase/database";
import { db } from "@/../config/firebaseAuth.js";
import { send } from "vite";

interface message {
    id: string;
    content: string;
    senderId: string;
    receiverId: string;
    timeStamp: string;
    senderConversationId: string;
    receiverConversationId: string;
}

export default {

    async sendMessage(context: any, payload: any) {
        // const userId = context.rootGetters.userId;
        const newMessage: message = {
            id: new Date().getTime().toString(),
            content: payload.content,
            senderId: payload.senderId,
            receiverId: payload.receiverId,
            timeStamp: moment().format('YYYY/MM/DD/HH:mm'),
            senderConversationId: `${payload.senderId}-${payload.receiverId}`,
            receiverConversationId: `${payload.receiverId}-${payload.senderId}`
        };
        const dbUrl = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY;
        console.log(newMessage);
        await fetch(`${dbUrl}/messages.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMessage)
        });
    },
    //  當組件初次載入時，我需要抓取所有的對話紀錄，感覺這一步不需要用snapshot;
    // 之後如果用戶開始傳遞訊息，才開始需要用 snapshot
    // 邏輯需要修改
    async subscribeToMessages(context, payload) {
        const messagesRef = ref(db, 'messages');
        let isFirstSubscription = true;
        // const senderQueryRef = query(
        //     messagesRef,
        //     orderByChild('senderConversationId'),
        //     equalTo(`${payload.senderId}-${payload.receiverId}`)
        // );
        // const receiverQueryRef = query(
        //     messagesRef,
        //     orderByChild('receiverConversationId'),
        //     equalTo(`${payload.receiverId}-${payload.senderId}`)
        // );
        // 設置監聽器，當有新訊息時，更新對話紀錄
        const handleSnapshot = (snapshot) => {
            if (isFirstSubscription) {
                isFirstSubscription = false;
                return;
            }
            // data 是整個 messages 的物件
            const data = snapshot.val();
            console.log(data);
            if (data) {
                const userMessages = Object.keys(data)
                    .map(key => data[key])
                    .filter(message =>
                        (message.senderConversationId === `${payload.senderId}-${payload.receiverId}`) || (message.receiverConversationId === `${payload.receiverId}-${payload.senderId}`));
                console.log("user messages", userMessages);
                const newMessage = userMessages.slice(-1)[0];
                // const newMessage = userMessages;
                console.log(newMessage);
                if ((newMessage.senderConversationId === `${payload.senderId}-${payload.receiverId}`) || (newMessage.receiverConversationId === `${payload.receiverId}-${payload.senderId}`)) {
                    context.commit('addMessage', newMessage);
                }
            }
        };
        onValue(messagesRef, handleSnapshot);
        context.commit('setHandleSnapshot', handleSnapshot);
        console.log("handling");
    },
    unsubscribeFromMessages(context, payload) {
        const messagesRef = ref(db, 'messages');

        // 使用保存的 handleSnapshot 函數來取消監聽
        off(messagesRef, context.state.handleSnapshot);

        // 清除 handleSnapshot 函數
        context.commit('setHandleSnapshot', null);
        context.commit('setMessages', []);
        console.log(context.state.handleSnapshot, "unsub!!");
    },
    async setContactUser(context, payload) {
        const dbUrl = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY
        const response = await fetch(`${dbUrl}/coaches/${payload}.json`);
        const data = await response.json();
        context.commit("userWhoIsChattingWith", data);
    },
    async fetchAllMessages(context, payload) {
        const messagesRef = ref(db, 'messages');
        console.log("fetching!!");
        const snapshot = await get(messagesRef);
        const data = await snapshot.val();
        console.log("sender:", payload.senderId);
        console.log("receiver:", payload.receiverId);
        if (data) {
            const userMessages = Object.keys(data)
                .map(key => data[key])
                .filter(message =>
                    (message.senderConversationId === `${payload.senderId}-${payload.receiverId}`) || (message.receiverConversationId === `${payload.receiverId}-${payload.senderId}`)
                );
            context.commit('setMessages', userMessages);
            console.log(userMessages, "fetch all messages");
        }
    },
    clearMessages(context, payload) {
        context.commit('setMessages', []);
    }
}
