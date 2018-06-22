import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Topic = ({ topic }) => {
  return (
    <View style={styles.topic}>
      <Text>{topic.name}</Text>
      <Text>{topic.short_description}</Text>
    </View>
  );
}

Topic.propTypes = {
  topic: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  topic: {
    borderWidth: 1,
  }
})

export default Topic;