import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {PrimaryColors} from '../utils/colors';

export const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" color={PrimaryColors.Orange} />
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
