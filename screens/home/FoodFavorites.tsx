import {observer} from 'mobx-react-lite';
import React, {FC, useContext} from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import modalIcon from '../../assets/modalIcon.png';
import {Loader} from '../../components/Loader';
import {Food} from '../../models/Food';
import {useStore} from '../../store/StoreContext';
import {useAppTranslation} from '../../utils/TranslationContext';
import {FoodFavoritesItem} from './FoodFavoritesItem';

export const FoodFavorites: FC = observer(() => {
  const {favoritesStore} = useStore();
  const renderItem = ({item}: ListRenderItemInfo<Food>) => (
    <FoodFavoritesItem item={item} />
  );
  const {t} = useAppTranslation();

  return (
    <View style={styles.contentContainer}>
      <Image source={modalIcon} style={styles.modalIcon} />

      <Text style={styles.textStyle}>
        {t('favoritesPageHeader')}
      </Text>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={favoritesStore.foods}
        renderItem={renderItem}
        ListEmptyComponent={<Loader />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 35,
  },
  modalIcon: {
    marginRight: 'auto',
    marginTop: 15,
  },
  textStyle: {
    color: '#000',
    width: 190,
    fontSize: 34,
    fontWeight: '700',

    marginRight: 'auto',
    marginTop: 40,
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 15,
    marginRight: 30,
  },
  listContainer: {
    marginTop: 30,
  },
});
