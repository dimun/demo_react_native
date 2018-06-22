import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import Topic from 'src/components/Topic';
import Repository from 'src/components/Repository';
import { i18nMessage } from 'src/i18n';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: undefined,
    };
  }

  onKeywordChange = (keyword) => {
    this.setState({ keyword });
  }

  onSearchKeyword = () => {
    const { fetchRepositories, fetchTopics } = this.props;
    fetchRepositories({ q: this.state.keyword });
    fetchTopics({ q: this.state.keyword });
  }

  topicKeyExtractor = (item) => item.name

  repositoryKeyExtractor = (item) => item.id.toString()
  
  renderTopic = ({ item }) => (<Topic topic={item} />)

  renderRepository = ({ item }) => (<Repository repository={item} />)
  
  render() {
    const { repositoryStore: { repositories }, topicStore: { topics } } = this.props;
    console.log(topics, repositories);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {i18nMessage('screens.main.title')}
        </Text>
        <View style={styles.textInputContainer}>

          <TextInput
            style = {styles.textInput}
            autoCapitalize = "none"
            onChangeText = {this.onKeywordChange}
            autoCorrect={false}
            onSubmitEditing={this.onSearchKeyword}
            value={this.state.keyword}
          />
        </View>
        <View style={styles.topicsContainer}>
          <Text style={styles.title}>
            {i18nMessage('screens.main.topics')}
          </Text>
          <FlatList
            renderItem={this.renderTopic}
            data={topics}
            keyExtractor={this.topicKeyExtractor}
          />
        </View>
        <View style={styles.topicsContainer}>
          <Text style={styles.title}>
            {i18nMessage('screens.main.repositories')}
          </Text>
          <FlatList
            renderItem={this.renderRepository}
            data={repositories}
            keyExtractor={this.repositoryKeyExtractor}
          />
        </View>
      </View>
    );
  }
}

Main.propTypes = {
  fetchRepositories: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
  resetAll: PropTypes.func.isRequired,
  repositoryStore: PropTypes.object.isRequired,
  topicStore: PropTypes.object.isRequired,
};

export default Main;

/*
  TODO Explain
  - flex
  - zIndex
  - elevation
  - position: absolute and relative
  - fontSize by Dimensions
  - ImageBackground
  - Shadows
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: '5%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInputContainer: {
    flex: 1,
  },
  topicsContainer: {
    flex: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    width: '100%',
    fontSize: 24,
  }
});
