import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import {Food} from '../../models/Food';
import {PrimaryColors} from '../../utils/colors';
import {flatListContainerMargin} from './Foods';

interface FoodItemProps extends TouchableOpacityProps {
  item: Food;
  index?: number;
  containerStyle?: StyleProp<ViewStyle>;
  handlePress: (item: Food) => void;
}

export const FoodItem: FC<FoodItemProps> = ({
  index,
  containerStyle,
  item,
  handlePress,
}) => {
  const {name, photo, price} = item;

  const isOdd = index % 2;

  const {colors} = useTheme();

  const onPress = () => handlePress(item);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.itemContainer,
          containerStyle,
          {
            backgroundColor: colors.card,
            marginTop: isOdd
              ? containerTopMargin + 30
              : containerTopMargin,
          },
        ]}>
        <Image
          style={styles.foodPhoto}
          source={{uri: photo}}
        />
        <View style={styles.contentContainer}>
          <Text
            style={[styles.itemText, {color: colors.text}]}>
            {name}
          </Text>
          <Text
            style={styles.priceText}>{`N${price}00`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const {width} = Dimensions.get('window');
const containerPadding = 25;
const containerRightMargin = 25;
const containerTopMargin = 70;
const containerWidth = width - flatListContainerMargin * 2;
const containerHeight = containerWidth * 1.2;

const styles = StyleSheet.create({
  itemContainer: {
    position: 'relative',

    width: containerWidth,
    height: containerHeight,
    marginRight: containerRightMargin,
    marginTop: containerTopMargin,
    marginBottom: 50,

    paddingHorizontal: containerPadding,

    borderRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',
  },

  foodPhoto: {
    position: 'absolute',
    bottom: containerHeight * 0.5,

    width: '100%',
    height: containerHeight * 0.7,

    borderRadius: 20,
  },
  itemText: {
    fontSize: 22,
    textAlign: 'center',

    opacity: 0.9,

    width: 150,
  },
  priceText: {
    color: PrimaryColors.Orange,
    fontStyle: 'normal',
    fontSize: 17,
    textAlign: 'center',

    marginTop: 10,
  },
  contentContainer: {
    position: 'absolute',
    bottom: 35,
  },
});
