export default {
  // send contact data to firebase
  async contactCoach(context, payload) {
    const newRequests = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      userEmail: payload.email,
      message: payload.message,
      coachId: payload.coachId,
      timestamp: new Date().toISOString(),
      meetingDate: payload.meetingDate,
    };
    try {
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
      // console.log(responseData);
      // name is basically the key of the new request named by firebase
      newRequests.id = responseData.name;
      context.commit("addRequest", newRequests);
    } catch (error) {
      console.log(error);
    }
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
    // console.log(responseData);
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
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        timestamp: responseData[key].timestamp,
      };
      requests.push(request);
      // console.log(request);
    }
    context.commit("setRequest", requests);
  },
};
