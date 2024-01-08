export default {
  // send contact data to firebase
  async contactCoach(context, payload) {
    const newRequests = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      userEmail: payload.email,
      message: payload.message,
      date: payload.date,
    };

    const response = await fetch(
      `https://find-mentor-b251a-default-rtdb.firebaseio.com/request/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequests),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Something went wrong");
      throw error;
    }
    newRequests.id = responseData.name;
    newRequests.coachId = payload.coachId;
    console.log(newRequests);
    context.commit("addRequest", newRequests);
  },

  // only fetch the requests from backend of current active user
  async fetchRequests(context) {
    // 透過getters取得root state中的userId
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://find-mentor-b251a-default-rtdb.firebaseio.com/request/${coachId}.json?auth=${token}`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Something went wrong");
      throw error;
    }
    const requests = [];
    for (let key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    context.commit("setRequest", requests);
  },
};
