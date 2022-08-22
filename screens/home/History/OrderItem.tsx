import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {CartFood} from '../../../models/CartFood';
import {PrimaryColors} from '../../../utils/colors';

interface OrderItemProps {
  item: CartFood;
}

export const OrderItem: FC<OrderItemProps> = ({item}) => (
  <View style={styles.itemContainer}>
    <Image
      style={styles.itemImage}
      source={{uri: item.photo}}
    />
    <View style={styles.textContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{`N${
        item.price * item.quantity * 1000
      }`}</Text>
      <Text style={styles.counter}>{item.quantity}</Text>
    </View>
  </View>
);

const screenPaddings = 70;
const cartItemWidth =
  Dimensions.get('window').width - screenPaddings;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: cartItemWidth,
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
  counter: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: PrimaryColors.Orange,
    color: PrimaryColors.White,
    textAlign: 'center',

    width: 20,
    height: 20,

    borderRadius: 10,
  },
});
