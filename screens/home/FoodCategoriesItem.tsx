import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {PrimaryColors} from '../../utils/colors';

interface FoodCategoriesItemProps {
  handleSelectCategory: (id: number) => void;
  item: {title: string; id: number};
  isActive: boolean;
}

export const FoodCategoriesItem: FC<FoodCategoriesItemProps> =
  observer(({handleSelectCategory, item, isActive}) => {
    const {title, id} = item;

    const handlePress = () => {
      handleSelectCategory(id);
    };
    return (
      <TouchableOpacity
        style={styles.labeLContainer}
        onPress={handlePress}>
        <Text
          style={[
            styles.item,
            {
              color: isActive
                ? PrimaryColors.Orange
                : PrimaryColors.DarkGrey,
            },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  });

const {width} = Dimensions.get('window');
const containerMargin = 50;

const styles = StyleSheet.create({
  item: {
    fontSize: 17,
  },

  labeLContainer: {
    width: (width - containerMargin) / 4,
  },
});
