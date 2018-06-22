import apiCalls from '../api-client/apiCalls';

const receiveTopics = topics => (
  {
    type: 'RECEIVE_TOPICS',
    topics,
  }
);

export const fetchTopics = (params = {}) => (
  dispatch =>
    apiCalls.getTopics(params)
    .then(response => response.json())
    .then(topics => dispatch(receiveTopics(topics.items)))
    .catch(error => console.warning('Fetch error in topics'))
);
