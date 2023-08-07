export default {
  // 從action 傳入payload
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
    // state.tokenExpiration = payload.tokenExpiration;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
