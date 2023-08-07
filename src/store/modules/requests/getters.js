export default {
  // 四個參數順序有意義
  receivedRequest(state, getters, rootGetters, rootState) {
    const coachId = rootState.userId;
    return state.requests.filter((request) => {
      return request.coachId === coachId;
    });
  },
  hasRequests(state, getters) {
    return getters.receivedRequest && getters.receivedRequest.length > 0;
  },
};
