import React, {FC} from 'react';
import {Animated, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {galleryContainerWidth} from '../screens/home/FoodDetails';
import {PrimaryColors} from '../utils/colors';

interface CarouselIndicatorItemProps {
  index: number;
  scrollX: Animated.Value & Animated.AnimatedProps<StyleProp<ViewStyle>>;
}

export const CarouselIndicatorItem: FC<CarouselIndicatorItemProps> = ({index, scrollX}) => {
  const inputRange = [(index - 1) * galleryContainerWidth, index * galleryContainerWidth, (index + 1) * galleryContainerWidth];

  const inactiveScale = 0.8;
  const activeScale = 1.4;

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [inactiveScale, activeScale, inactiveScale],
  });

  const background = scrollX.interpolate({
    inputRange,
    outputRange: [PrimaryColors.Grey, PrimaryColors.Orange, PrimaryColors.Grey],
  });
  return <Animated.View style={[styles.carouselDot, {transform: [{scale}], backgroundColor: background}]} key={`indicator-${index}`} />;
};

const styles = StyleSheet.create({
  carouselDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',

    margin: 10,
  },
});
