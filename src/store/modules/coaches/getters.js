export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state, getters, rootState, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    // some 方法用於檢查陣列中是否至少有一個元素符合指定的條件
    return coaches.some((coach) => {
      return coach.id === userId;
    });
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    // if lastFetch is falsy, then should update
    if (!lastFetch) {
      return true;
    } else {
      const currentTimeStamp = new Date().getTime();
      //判斷是否超過一分鐘
      return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
  },
  landingPageMentors(state) {
    return state.landingPageMentors;
  },
};
