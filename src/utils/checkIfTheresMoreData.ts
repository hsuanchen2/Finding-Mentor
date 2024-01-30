// import { ActionContext } from 'vuex';
// import { State } from "@../store/modules/coaches/index.js";
const checkForMoreMentors = async (context, lastMentorKey) => {
    const nextDbUrl = `${import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_API_KEY}/coaches.json?orderBy="$key"&startAfter="${lastMentorKey}"&limitToFirst=1`;
    const nextResponse = await fetch(nextDbUrl);
    const nextResponseData = await nextResponse.json();
    if (!nextResponseData) {
        context.commit('setHasMoreMentors', false);
    }
}

export default checkForMoreMentors;