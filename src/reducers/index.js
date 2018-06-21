import { combineReducers } from 'redux';
import topicStore from './topicStore';
import repositoryStore from './repositoryStore';

const iimApp = combineReducers({
  topicStore,
  repositoryStore,
});

export default iimApp;
