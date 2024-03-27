import moment from "moment";
import { ref, push, onValue, query, orderByChild, equalTo } from "firebase/database";
import { db } from "@/../config/firebaseAuth.js";

interface message {
    id: string;
    content: string;
    senderId: string;
    receiverId: string;
    timeStamp: string;
}

export default {
    sendMessage(context: any, payload: any) {
        // const userId = context.rootGetters.userId;
        const newMessage: message = {
            id: new Date().getTime().toString(),
            content: payload.content,
            senderId: payload.senderId,
            receiverId: payload.receiverId,
            timeStamp: moment().format('YYYY/MM/DD/HH:mm'),
        };

        // messages is the name of the table in the firebase rtdb
        const messagesRef = ref(db, 'messages');
        push(messagesRef, newMessage);
    },
    //  當組件初次載入時，我需要抓取所有的對話紀錄，感覺這一步不需要用snapshot;
    // 之後如果用戶開始傳遞訊息，才開始需要用snapshop
    // 邏輯需要修改
    subscribeToMessages(context, payload) {
        // 做兩個查詢 一個是 senderId 一個是 receiverId
        const messagesRef = ref(db, 'messages');
        const senderQuery = query(messagesRef, orderByChild('senderId'), equalTo(payload.receiverId));
        const receiverQuery = query(messagesRef, orderByChild('receiverId'), equalTo(payload.receiverId));
        const handleSnapshot = (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const userMessages = Object.keys(data)
                    .map(key => data[key])
                    .filter(message => message.senderId === payload.senderId && message.receiverId === payload.receiverId);
                context.commit('addMessage', userMessages);
            }
        };

        onValue(senderQuery, handleSnapshot);
        onValue(receiverQuery, handleSnapshot);
    },

    async setContactUser(context, payload) {
        const dbUrl = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY
        const response = await fetch(`${dbUrl}/coaches/${payload}.json`);
        const data = await response.json();

        context.commit("userWhoIsChattingWith", data);
    }

}