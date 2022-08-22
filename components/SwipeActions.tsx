import React, {FC} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import {PrimaryColors} from '../utils/colors';
import {CartFavoriteButton} from './CartFavoriteButton';
import {TrashCanButton} from './TrashCamButton';

interface SwipeActionsProps {
  dragX: Animated.AnimatedInterpolation;
  inFavorites: boolean;
  handleDelete: () => void;
  handleToggleFavorite: () => void;
}

export const SwipeActions: FC<SwipeActionsProps> = ({dragX, inFavorites, handleDelete, handleToggleFavorite}) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const backgroundColor = inFavorites ? '#DF2C2C' : PrimaryColors.DarkGrey;

  return (
    <View style={styles.actionContainer}>
      <Animated.View style={[styles.contentContainer, {transform: [{scale}]}]}>
        <CartFavoriteButton backgroundColor={backgroundColor} onPress={handleToggleFavorite} />
        <TrashCanButton onPress={handleDelete} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    marginLeft: 15,
    alignItems: 'flex-end',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#DF2C2C',

    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIconContainer: {
    marginRight: 15,
  },
});
