import React, {FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Order} from '../../../models/Order';
import {PrimaryColors} from '../../../utils/colors';

export const OrderInformation: FC<{order: Order}> = ({
  order,
}) => (
  <View style={styles.orderDetails}>
    <Text
      style={
        styles.orderDetailsHeader
      }>{`Order #${order.id}`}</Text>
    <Text
      style={
        styles.orderDetailsText
      }>{`Phone number: ${order.phone}`}</Text>
    <Text
      style={
        styles.orderDetailsText
      }>{`Address: ${order.address}`}</Text>
    <Text
      style={
        styles.orderDetailsText
      }>{`Delivery method: ${order.deliveryMethod}`}</Text>
    <Text
      style={
        styles.orderDetailsText
      }>{`Payment method: ${order.payment}`}</Text>
    <Text
      style={
        styles.orderDetailsText
      }>{`Date: ${order.createdAt}`}</Text>
    <Text
      style={
        styles.orderDetailsText
      }>{`Total price: ${order.totalPrice}`}</Text>
  </View>
);

const screenPaddings = 70;
const orderDetailsWidth =
  Dimensions.get('window').width - screenPaddings;

const styles = StyleSheet.create({
  orderDetails: {
    width: orderDetailsWidth,
    paddingTop: 22,
    paddingBottom: 20,
    paddingHorizontal: 12,
    marginTop: 30,
    marginBottom: 20,

    borderRadius: 20,
    backgroundColor: PrimaryColors.White,
  },
  orderDetailsHeader: {
    fontWeight: '700',
    color: '#000',
    fontSize: 18,
    lineHeight: 21,
  },
  orderDetailsText: {
    fontWeight: '400',
    color: PrimaryColors.DarkGrey,
    fontSize: 13,

    paddingTop: 9,
  },
});
