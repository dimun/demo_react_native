/*
  topics - List of topics that will be listed in the view.
  fetched - It tells to the view if the topics were already fetched.
*/
const initialState = {
  topics: [],
  fetched: false,
};

/*
  It saves the list of topics.
*/
const topicStore = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_TOPICS':
      return {
        topics: action.topics,
        shouldRefresh: false,
        fetched: true,
      };
    case 'RESET_ALL':
      return initialState;
    default:
      return state;
  }
};

export default topicStore;