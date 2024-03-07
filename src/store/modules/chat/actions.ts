interface message {
    id: string;
    content: string;
    senderId: string;
    receiverId: string;
    timeStamp: number;
}

export default {
    sendMessage(context: any, payload: any) {
        const newMessage: message = {
            id: new Date().getTime().toString(),
            content: payload.message,
            senderId: context.rootGetters.userId,
            receiverId: payload.receiverId,
            timeStamp: new Date().getTime(),
        };
        context.commit("addMessage", newMessage);
    }
}