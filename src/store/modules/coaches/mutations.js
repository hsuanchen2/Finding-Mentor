export default {
  registerCoach(state, payload) {
    // 將新註冊的教練資料放進coach state中
    state.coaches.push(payload);
  },
  // 把coaches state中的coaches資料以後端回傳的資料取代
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setLandingPageCoaches(state, payload) {
    state.landingPageMentors = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
