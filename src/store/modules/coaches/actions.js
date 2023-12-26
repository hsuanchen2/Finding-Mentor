import { imageDb } from "@/../config/firebaseAuth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// const storageDbUrl = import.meta.env.VITE_FIREBASE_STORAGE_URL;
const storage = getStorage();
export default {
  // 用actions 觸發mutations
  async registerCoach(context, payload) {
    let imageUrl;
    const userId = context.rootGetters.userId;
    const file = payload.uploadedImage;
    // upload user's image to firebase storage
    try {
      // the second parameter is the path and file name.
      const imageRef = ref(storage, `userImages/${userId}.${file.name.split('.').pop()}`);
      await uploadBytes(imageRef, file);
      imageUrl = (await getDownloadURL(imageRef)).split("?")[0] + "?alt=media";
      // console.log(imageUrl);
    } catch (error) {
      return error;
    };
    const generateJobRating = () => {
      const rate = (Math.random() * 4 + 1).toFixed(1); // Generate a random number between 1 and 5
      const count = Math.floor(Math.random() * 100); // Generate a random number less than 100
      return `${rate} (${count})`;
    };
    const coachData = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      hourlyRate: payload.hourlyRate,
      location: payload.location,
      jobTitle: payload.jobTitle,
      fields: payload.fields,
      skills: payload.skills,
      aboutMe: payload.aboutMe,
      experience: payload.experience,
      userImage: imageUrl,
      jobRating: generateJobRating(),
    };
    const token = context.rootGetters.token;

    // 將用戶註冊成為mentor的文字資料傳到資料庫
    const dbApi = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY
    const response = await fetch(
      `${dbApi}/coaches/${userId}.json?auth=` +
      token,
      {
        // data will be created if exisits, if not, create a new one.
        // POST will crate a new entry.
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );

    const responseData = await response.json();
    console.log(responseData);

    context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },

  async loadCoaches(context, payload) {
    // forceRefresh 檢測是否為強制重新整理
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    // load all coaches here, so dont have to set coach id in the url.
    const response = await fetch(
      `https://find-mentor-b251a-default-rtdb.firebaseio.com/coaches.json`,
      {
        method: "GET",
      }
    );
    const responseData = await response.json();
    // console.log(responseData);
    if (!response.ok) {
      const error = new Error(response.message || "something went wrong");
      console.log(error);
      throw error;
    }

    const coaches = [];
    // 這邊的key是該coach在firebase中的節點，使用這個節點名稱來當作id
    for (let key in responseData) {
      const coach = {
        id: key,
        jobTitle: responseData[key].jobTitle,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].aboutMe,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].fields,
        userImage: responseData[key].userImage,
        jobRating: responseData[key].jobRating,
      };
      coaches.push(coach);
    }
    console.log(coaches);
    context.commit("setCoaches", coaches);
    context.commit("setFetchTimestamp");
  },


  async loadLandingPageMentors(context, payload) {

    const response = await fetch(
      `https://find-mentor-b251a-default-rtdb.firebaseio.com/coaches.json?orderBy="$key"&limitToFirst=8`,
      {
        method: "GET",
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch.");
      throw error;
    }

    const coaches = [];
    for (let key in responseData) {
      const coach = {
        id: key,
        ...responseData[key]
      };
      coaches.push(coach);
    }
    context.commit("setLandingPageCoaches", coaches);
    context.commit("setFetchTimestamp");
  }
};
