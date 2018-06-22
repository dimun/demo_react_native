import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Repository = ({ repository }) => {
  return (
    <View style={styles.repository}>
      <Text>{repository.full_name}</Text>
    </View>
  );
}

Repository.propTypes = {
  repository: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  repository: {
    borderBottomWidth: 1,
  },
});

export default Repository;