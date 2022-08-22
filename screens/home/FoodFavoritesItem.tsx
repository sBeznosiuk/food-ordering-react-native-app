import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Food} from '../../models/Food';
import {PrimaryColors} from '../../utils/colors';

export const FoodFavoritesItem: FC<{item: Food}> = ({
  item,
}) => (
  <View style={styles.itemContainer}>
    <Image
      style={styles.itemImage}
      source={{uri: item.photo}}
    />
    <View style={styles.textContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{`N${
        item.price * 1000
      }`}</Text>
    </View>
  </View>
);

const screenPaddings = 60;
const favoritesItemWidth =
  Dimensions.get('window').width - screenPaddings;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: favoritesItemWidth,
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    position: 'relative',
  },
  itemImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 20,
    flex: 1,
  },
  itemName: {
    fontWeight: '700',
    fontSize: 17,
    color: '#000',
    marginBottom: 10,
    width: '100%',
  },
  itemPrice: {
    color: PrimaryColors.Orange,
  },
  counterButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
