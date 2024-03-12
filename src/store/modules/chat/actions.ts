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
        const userId = context.rootGetters.userId;
        const newMessage: message = {
            id: new Date().getTime().toString(),
            content: payload.content,
            senderId: userId,
            receiverId: payload.receiverId,
            timeStamp: moment().format('YYYY/MM/DD/HH:mm'),
        };

        // messages is the name of the table in the firebase rtdb
        const messagesRef = ref(db, 'messages');
        push(messagesRef, newMessage);
    },
    subscribeToMessages(context, payload) {
        // 做兩個查詢 一個是 senderId 一個是 receiverId
        const messagesRef = ref(db, 'messages');
        const senderQuery = query(messagesRef, orderByChild('senderId'), equalTo(payload.receiverId));
        const receiverQuery = query(messagesRef, orderByChild('receiverId'), equalTo(payload.receiverId));

        const handleSnapshot = (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const userMessages = Object.keys(data).map(key => data[key]);
                context.commit('setMessages', userMessages);
                console.log(userMessages);
            }
        };

        onValue(senderQuery, handleSnapshot);
        onValue(receiverQuery, handleSnapshot);
    }

}