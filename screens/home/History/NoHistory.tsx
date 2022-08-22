import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import noHistory from '../../../assets/noHistory.png';

export const NoHistory: FC = () => (
  <View style={styles.contentContainer}>
    <Image source={noHistory} style={styles.image} />
    <Text style={styles.headerText}>No history yet</Text>
    <Text style={styles.contentText}>Hit the orange button down below to Create an order</Text>
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,

    marginLeft: 'auto',
    marginRight: 'auto',

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 25,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 28,
    marginBottom: 17,
  },
  contentText: {
    fontWeight: '400',
    fontSize: 17,
  },
});
