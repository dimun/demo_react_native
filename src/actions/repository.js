import apiCalls from '../api-client/apiCalls';

const receiveRepositories = repositories => (
  {
    type: 'RECEIVE_REPOSITORIES',
    repositories,
  }
);

export const fetchRepositories = (params = {}) => (
  dispatch =>
    apiCalls.getRepositories(params)
    .then(response => response.json())
    .then(repositories => dispatch(receiveRepositories(repositories)))
    .catch(error => console.warning('Fetch error in repositories'))
);
