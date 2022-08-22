import {CompositeScreenProps} from '@react-navigation/native';
import {debounce} from 'debounce';
import {observer} from 'mobx-react-lite';
import React, {FC, useContext, useMemo} from 'react';
import {
  Dimensions,
  ListRenderItemInfo,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {GoBackButton} from '../../components/GoBackButton';
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
import {PrimaryColors} from '../../utils/colors';
import {FoodItem} from './FoodItem';
import {ItemNotFound} from './ItemsNotFound';

export const FoodSearch: FC<
  CompositeScreenProps<
    OperationsNavigationScreenType<OperationsNavigationRoutes.Search>,
    MainNavigationScreenType<MainNavigationRoutes.Operations>
  >
> = observer(({navigation}) => {
  const {foodsStore} = useStore();

  const debouncedChange = useMemo(
    () => debounce(foodsStore.setFoodsByQuery, 300),
    [],
  );

  const handlePress = (item: Food) => {
    navigation.navigate(MainNavigationRoutes.Operations, {
      screen: OperationsNavigationRoutes.Details,
      params: item,
    });
  };

  const renderItem = ({
    item,
    index,
  }: ListRenderItemInfo<Food>) => (
    <FoodItem
      containerStyle={styles.itemStyles}
      index={index}
      item={item}
      handlePress={handlePress}
    />
  );

  return (
    <View style={styles.modalContainer}>
      <View style={styles.navigationContainer}>
        <GoBackButton
          style={styles.backButton}
          onPress={navigation.goBack}
        />

        <TextInput
          style={styles.searchInput}
          onChangeText={debouncedChange}
          placeholder="Search"
          autoFocus
        />
      </View>

      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={foodsStore.foodsByQuery}
        numColumns={2}
        renderItem={renderItem}
        ListEmptyComponent={<ItemNotFound />}
      />
    </View>
  );
});

const {width} = Dimensions.get('window');

const contentContainerPadding = 25;
const navigationContainerMargin = 15;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: PrimaryColors.Grey,
    width,
  },
  navigationContainer: {
    width,

    flexDirection: 'row',
    marginVertical: navigationContainerMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    marginHorizontal: 50,
  },
  contentContainer: {
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#f6f6f6',

    justifyContent: 'space-between',

    paddingHorizontal: contentContainerPadding,
  },

  itemStyles: {
    width: width / 2 - contentContainerPadding,
  },
  backButton: {
    marginLeft: 30,
    marginRight: 'auto',
  },
});
