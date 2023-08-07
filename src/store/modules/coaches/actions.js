export default {
  // 用actions 觸發mutations
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.description,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    const token = context.rootGetters.token;
    // 將用戶註冊成為mentor的資料傳到資料庫
    const response = await fetch(
      `https://find-mentor-b251a-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` +
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
    // we load all coaches here, so dont have to set coach id in the url.
    const response = await fetch(
      `https://find-mentor-b251a-default-rtdb.firebaseio.com/coaches.json`,
      {
        method: "GET",
      }
    );
    const responseData = await response.json();

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
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      console.log(coaches);
      coaches.push(coach);
    }
    // console.log(coaches);
    context.commit("setCoaches", coaches);
    context.commit("setFetchTimestamp");
  },
};
