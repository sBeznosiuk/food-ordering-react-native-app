import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {PrimaryColors} from '../utils/colors';

interface counterButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  onIncrement: () => void;
  onDecrement: () => void;
  quantity?: number;
}

export const CounterButton: FC<counterButtonProps> = ({containerStyle, onIncrement, onDecrement, quantity}) => (
  <View style={[styles.counterContainer, containerStyle]}>
    <Text style={styles.counterItem} onPress={onDecrement}>
      -
    </Text>
    <Text style={styles.counterResult}>{quantity}</Text>
    <Text style={styles.counterItem} onPress={onIncrement}>
      +
    </Text>
  </View>
);

const styles = StyleSheet.create({
  counterContainer: {
    width: 50,
    height: 20,
    borderRadius: 20,
    backgroundColor: PrimaryColors.Orange,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  counterItem: {
    flex: 0.3,
    color: '#fff',
    fontWeight: '700',
  },
  counterResult: {
    flex: 0.3,
    color: '#fff',
    fontWeight: '700',
  },
});
