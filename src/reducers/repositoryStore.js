/*
  repositories - List of repositories that will be listed in the view.
  fetched - It tells to the view if the repositories were already fetched.
*/
const initialState = {
  repositories: [],
  fetched: false,
};

/*
  It saves the list of repositories.
*/
const repositoryStore = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_REPOSITORIES':
      return {
        repositories: action.repositories,
        fetched: true,
      };
    case 'RESET_ALL':
      return initialState;
    default:
      return state;
  }
};

export default repositoryStore;