// import { imageDb } from "@/../config/firebaseAuth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseApp } from "@/../config/firebaseAuth";
import checkIfHourlyRateIsInRange from "@/utils/checkIfHourlyRateIsInRange";
import checkIfJobRatingInRange from "@/utils/checkIfJobRatingInRange";
import checkIfFieldsMatched from "@/utils/checkIfFieldsMatched";
import checkIfSkillsMatched from "@/utils/checkIfSkillsMatched";
// const dbUrl = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY;
// const storageDbUrl = import.meta.env.VITE_FIREBASE_STORAGE_URL;
const storage = getStorage(firebaseApp);

const checkForMoreMentors = async (context: unknown, lastMentorKey: string) => {
  const nextDbUrl = `${import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY}/coaches.json?orderBy="$key"&startAfter="${lastMentorKey}"&limitToFirst=1`;
  const nextResponse = await fetch(nextDbUrl);
  const nextResponseData = await nextResponse.json();
  if (!nextResponseData) {
    context.commit('moreMentorsOrNot', false);
    return false;
  } else {
    return true;
  }
}
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
      return rate;
    };
    const generateJobsDone = () => {
      const count = Math.floor(Math.random() * 100); // Generate a random number less than 100
      return count;
    }
    generateJobRating();
    const coachData = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      hourlyRate: payload.hourlyRate,
      location: payload.location,
      jobTitle: payload.jobTitle,
      fields: payload.fields,
      jobRating: generateJobRating(),
      jobsDone: generateJobsDone(),
      skills: payload.skills,
      aboutMe: payload.aboutMe,
      experience: payload.experience,
      userImage: imageUrl,
    };
    const token = context.rootGetters.token;

    // 將用戶註冊成為mentor的文字資料傳到資料庫
    const dbUrl = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY
    const response = await fetch(
      `${dbUrl}/coaches/${userId}.json?auth=` +
      token,
      {
        // data will be created if exisits, if not, create a new one.
        // POST will crate a new entry.
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );

    const responseData = await response.json();
    // console.log(responseData);

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
    // console.log(coaches);
    context.commit("setCoaches", coaches);
    context.commit("setFetchTimestamp");
  },


  async loadLandingPageMentors(context, payload) {
    let dbUrl = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY;
    const response = await fetch(
      `https://find-mentor-b251a-default-rtdb.firebaseio.com/coaches.json?orderBy="$key"&limitToFirst=7`,
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
  },

  async loadSpecificMentorInfo(context, payload) {
    const response = await fetch(
      `https://find-mentor-b251a-default-rtdb.firebaseio.com/coaches/${payload}.json`,
      {
        method: "GET",
      }
    );
    const responseData = await response.json();
    // console.log(responseData);
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch.");
      throw error;
    }
    const coach = {
      id: payload,
      ...responseData
    };
    context.commit("setCurrentMentor", coach);
  },
  async loadDefaultMentors(context, payload) {
    let pageSize = 7;
    let lastMentorKey;
    let dbUrl = `https://find-mentor-b251a-default-rtdb.firebaseio.com/coaches.json?orderBy="$key"&limitToFirst=${pageSize}`;
    const mentors = [];
    try {
      const response = await fetch(dbUrl);
      const responseData = await response.json();
      for (let key in responseData) {
        const mentor = {
          id: key,
          ...responseData[key]
        };
        lastMentorKey = key;
        mentors.push(mentor);
      }
    } catch (error) {
      console.log(error);
    }
    context.commit("searchedMentors", mentors);
    // console.log(mentors);
    context.commit("setLastMentorKey", lastMentorKey);
    // Try to load one more mentor
    const data = checkForMoreMentors(context, lastMentorKey);
    context.commit("moreMentorsOrNot", data);
  },
  async loadMoreMentors(context, payload) {
    let dbUrl = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY;
    let startAfterKey = context.state.lastMentorKey;
    const mentors = [];
    if (startAfterKey) {
      dbUrl += `/coaches.json?orderBy="$key"&startAfter="${startAfterKey}"&limitToFirst=7`;
    } else {
      return;
    };
    try {
      const response = await fetch(dbUrl);
      const responseData = await response.json();
      const mentors = [];
      let lastMentorKey;

      for (let key in responseData) {
        const mentor = {
          id: key,
          ...responseData[key]
        };
        lastMentorKey = key;
        mentors.push(mentor);
      }
      context.commit("addSearchedMentors", mentors);
      context.commit("setLastMentorKey", lastMentorKey);

      // Try to load one more mentor
      checkForMoreMentors(context, lastMentorKey);
    } catch (error) {
      console.log(error);
    }
  },
  async searchMentors(context, payload) {
    const { fields, hourlyRate, location, skills, rating } = payload;
    let data;
    let dbUrl = import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY;
    dbUrl += `/coaches.json?`;
    payload.location !== "" && (dbUrl += `&orderBy="location"&equalTo="${payload.location}"`);
    try {
      const response = await fetch(dbUrl);
      data = await response.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    if (!data) {
      // console.log(data);
      return;
    } else {
      const mentors = [];
      // console.log(payload);
      for (let key in data) {
        const isValidFields = checkIfFieldsMatched(data[key].fields, fields);
        const isValidSkills = checkIfSkillsMatched(data[key].skills, skills);
        const isValidJobRating = checkIfJobRatingInRange(data[key].jobRating, rating);
        const isHourlyRateInRange = checkIfHourlyRateIsInRange(data[key].hourlyRate, hourlyRate);
        if (isValidFields && isValidSkills && isValidJobRating && isHourlyRateInRange) {
          const mentor = {
            id: key,
            ...data[key]
          };
          // lastMentorKey = key;
          mentors.push(mentor);
        }
      }
      context.commit("searchMentors", mentors);
      context.commit("setSearchCriteria", payload);
      context.commit("moreMentorsOrNot", false);
    }
  },
  // force refresh the mentors list to default
  async clearFilter(context, payload) {
    await context.dispatch('loadDefaultMentors');
    context.commit("clearSearchCriteria", null);
    context.commit("moreMentorsOrNot", true);
  }
}
