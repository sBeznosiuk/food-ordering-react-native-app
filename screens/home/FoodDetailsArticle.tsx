import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {PrimaryColors} from '../../utils/colors';

export const FoodDetailsArticle = () => (
  <>
    <View style={styles.articleContainer}>
      <Text style={styles.headerText}>Delivery info</Text>
      <Text style={styles.articleText}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm.</Text>
    </View>
    <View style={styles.articleContainer}>
      <Text style={styles.headerText}>Return policy</Text>
      <Text style={styles.articleText}>
        All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.
      </Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  articleContainer: {
    marginTop: 30,
  },
  headerText: {
    fontWeight: '700',
    color: '#000',
    fontSize: 17,
    marginRight: 'auto',
  },
  articleText: {
    fontWeight: '400',
    fontSize: 15,
    color: PrimaryColors.DarkGrey,
    marginTop: 7,
  },
});
