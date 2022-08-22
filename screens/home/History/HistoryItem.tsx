import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import {Order} from '../../../models/Order';
import {PrimaryColors} from '../../../utils/colors';

interface HistoryItemProps extends TouchableOpacityProps {
  item: Order;
  handleProceedToDetails: (item: Order) => void;
}

export const HistoryItem: FC<HistoryItemProps> = ({
  item,
  handleProceedToDetails,
  ...props
}) => {
  const onPress = () => handleProceedToDetails(item);

  return (
    <TouchableOpacity
      {...props}
      style={styles.itemContainer}
      onPress={onPress}>
      <Image
        style={styles.itemImage}
        source={{uri: item.orderLogo}}
      />
      <View style={styles.textContainer}>
        <Text
          style={
            styles.itemName
          }>{`Order #${item.id}`}</Text>
        <Text
          style={
            styles.itemPrice
          }>{`qty: ${item.totalQuantity}`}</Text>
        <Text
          style={
            styles.itemPrice
          }>{`total: ${item.totalPrice}$`}</Text>
      </View>
    </TouchableOpacity>
  );
};

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
});
