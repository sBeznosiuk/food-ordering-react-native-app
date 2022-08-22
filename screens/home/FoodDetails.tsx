import {
  CompositeScreenProps,
  useNavigation,
} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {FC, useRef} from 'react';
import {
  Animated,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';

import {CarouselIndicatorItem} from '../../components/CarouselIndicatorItem';
import {FavoriteButton} from '../../components/FavoriteButton';
import {GoBackButton} from '../../components/GoBackButton';
import {Loader} from '../../components/Loader';
import {
  ButtonType,
  SubmitButton,
} from '../../components/SubmitButton';
import {Food} from '../../models/Food';
import {
  MainNavigationRoutes,
  MainNavigationScreenType,
} from '../../navigations/params/AppNavigationParams';
import {
  OperationsNavigationRoutes,
  OperationsNavigationScreenType,
} from '../../navigations/params/OperationNavigationParams';
import {useStore} from '../../store/StoreContext';
import {useAppTranslation} from '../../utils/TranslationContext';
import {FoodDetailsArticle} from './FoodDetailsArticle';

export const FoodDetails: FC<
  CompositeScreenProps<
    OperationsNavigationScreenType<OperationsNavigationRoutes.Details>,
    MainNavigationScreenType<MainNavigationRoutes.Operations>
  >
> = observer(({route}) => {
  const {favoritesStore, cartStore} = useStore();
  const currentFoodItem: Food = route.params;
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const itemIsInFavorites =
    favoritesStore.itemIsInFavorites(currentFoodItem.id);
  const {t} = useAppTranslation();

  const renderItem = ({
    item,
  }: ListRenderItemInfo<string>) => (
    <Image source={{uri: item}} style={styles.imageItem} />
  );

  const renderDot = (_: string, index: number) => (
    <CarouselIndicatorItem
      key={`indicator-${index}`}
      index={index}
      scrollX={scrollX}
    />
  );

  const handleAddDishToCart = () => {
    cartStore.addToCart(currentFoodItem);

    navigation.goBack();
  };

  const handleToggleFavorite = () =>
    favoritesStore.handleToggleFavorite(currentFoodItem);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.iconContainer}>
        <GoBackButton onPress={navigation.goBack} />
        <FavoriteButton
          onPress={handleToggleFavorite}
          inFavorites={itemIsInFavorites}
        />
      </View>
      <View style={styles.galleryContainer}>
        <Animated.FlatList
          horizontal
          disableIntervalMomentum
          data={currentFoodItem.gallery}
          ListEmptyComponent={<Loader />}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          decelerationRate="fast"
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
        <View style={styles.carouselDotContainer}>
          {currentFoodItem.gallery.map(renderDot)}
        </View>
      </View>
      <FoodDetailsArticle />
      <SubmitButton
        onPress={handleAddDishToCart}
        title={t('addToCart')}
        buttonType={ButtonType.Orange}
      />
    </View>
  );
});

const containerHorizontalPadding = 30;
const containerVerticalPadding = 40;
export const galleryContainerWidth = 200;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: containerHorizontalPadding,
    paddingVertical: containerVerticalPadding,

    backgroundColor: '#fff',
  },
  imageItem: {
    width: galleryContainerWidth,
    height: 200,

    borderRadius: 20,
  },
  galleryContainer: {
    width: galleryContainerWidth,
    height: 250,
    marginBottom: 20,

    marginLeft: 'auto',
    marginRight: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carouselDotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});
