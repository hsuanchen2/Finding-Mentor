export default {
  // 四個參數順序有意義
  receivedRequest(state, getters, rootGetters, rootState) {
    const mentorId = rootState.userId;
    const requests = state.requests.filter((request) => {
      return request.coachId === mentorId;
    });
    return requests;
  },
  hasRequests(state, getters) {
    return getters.receivedRequest && getters.receivedRequest.length > 0;
  },
  // sortRequestsByTime(state, getters) {
  //   const mentorId = rootState.userId;
  //   const receivedRequests = state.request.filter((request) => {
  //     return request.coachId === mentorId;
  //   });
  //   return receivedRequests.sort((requestA, requestB) => {
  //     return requestA.time > requestB.time;
  //   });
  // }
};
