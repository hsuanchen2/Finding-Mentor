interface UserInfo {
    firstName: string; 
    lastName: string; 
    userImage: string; 
    latestMessage: string; 
}
const getUserData = async (userId: string, latestMessage: string): Promise<Object> => {
    const DB_URL = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY;
    try {
        const response = await fetch(`${DB_URL}/coaches/${userId}.json`);
        const userData = await response.json(); 
        const chatListUserInfo: UserInfo = {
            firstName : "",
            lastName: "",
            userImage: "",
            latestMessage: ""
        }; 
        chatListUserInfo.firstName = userData.firstName; 
        chatListUserInfo.lastName = userData.lastName; 
        chatListUserInfo.userImage = userData.userImage; 
        chatListUserInfo.latestMessage = latestMessage; 
        return chatListUserInfo; 
    } catch (error) {
        console.error(error);
        throw Error; 
    }
}

export default getUserData;