import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {CounterButton} from '../../components/CounterButton';
import {SwipeActions} from '../../components/SwipeActions';
import {CartFood} from '../../models/CartFood';
import {useStore} from '../../store/StoreContext';
import {PrimaryColors} from '../../utils/colors';

interface FoodCartItemProps {
  item: CartFood;
}

export const FoodCartItem: FC<FoodCartItemProps> = observer(
  ({item}) => {
    const {cartStore, favoritesStore} = useStore();
    const {name, photo, price, id, quantity} = item;

    const onIncrement = () =>
      cartStore.increaseQuantity(id);

    const onDecrement = () =>
      cartStore.decreaseQuantity(id);

    const onDelete = () => cartStore.removeFood(id);

    const handleToggleFavorite = () =>
      favoritesStore.handleToggleFavorite(item);

    const itemIsInFavorites =
      favoritesStore.itemIsInFavorites(item.id);

    const handleRenderRightActions = (
      _: Animated.AnimatedInterpolation,
      dragX: Animated.AnimatedInterpolation,
    ) => (
      <SwipeActions
        dragX={dragX}
        inFavorites={itemIsInFavorites}
        handleDelete={onDelete}
        handleToggleFavorite={handleToggleFavorite}
      />
    );

    return (
      <Swipeable
        renderRightActions={handleRenderRightActions}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.itemImage}
            source={{uri: photo}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.itemPrice}>{`N${
              price * quantity * 1000
            }`}</Text>
            <CounterButton
              containerStyle={styles.counterButton}
              quantity={quantity}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </View>
        </View>
      </Swipeable>
    );
  },
);

const screenPaddings = 60;
export const cartItemWidth =
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
  counterButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
