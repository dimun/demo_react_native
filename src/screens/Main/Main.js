import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
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

  render() {
    const { repositoryStore: { repositories }, topicStore: { topics } } = this.props;
    console.log(topics, repositories);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {i18nMessage('screens.main.title')}
        </Text>
        <View>
          <TextInput
            style = {styles.textInput}
            autoCapitalize = "none"
            onChangeText = {this.onKeywordChange}
            autoCorrect={false}
            onSubmitEditing={this.onSearchKeyword}
            value={this.state.keyword}
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    width: '100%',
    fontSize: 24,
  }
});
