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
        console.log(payload);
        const messagesQuery = query(ref(db, 'messages'), orderByChild('senderId'), equalTo(payload.receiverId));
        onValue(messagesQuery, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (data) {
                console.log(data);
                const userMessages = Object.keys(data).map(key => data[key]);
                console.log(userMessages);
                context.commit('setMessages', userMessages);
            }
        });
    }
}