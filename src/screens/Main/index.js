import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepositories, fetchTopics, resetAll } from 'src/actions';
import Main from './Main';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRepositories,
    fetchTopics,
    resetAll,
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    repositoryStore: state.repositoryStore,
    topicStore: state.topicStore,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
