import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import searchIcon from '../../assets/feather_search.png';

export const ItemNotFound: FC = () => (
  <View style={styles.messageContainer}>
    <Image style={styles.searchImage} source={searchIcon} />
    <Text style={styles.headlineText}>Item not found</Text>
    <Text style={styles.articleText}>Try searching the item with a different keyword.</Text>
  </View>
);

const contentContainerHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    height: contentContainerHeight,
  },
  headlineText: {
    fontWeight: '700',
    fontSize: 28,
    marginBottom: 15,
  },
  articleText: {
    textAlign: 'center',
    width: 200,
    fontWeight: '400',
    fontSize: 17,
  },
  searchImage: {
    marginTop: contentContainerHeight / 5,
    marginBottom: 30,
  },
});
