import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FadeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    backgroundColor: 'blue',
    height: 150,
    width: 150,
  },
});
