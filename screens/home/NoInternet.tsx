import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import RNRestart from 'react-native-restart';

import wifiIcon from '../../assets/eva_wifi-off-fill.png';
import {
  ButtonType,
  SubmitButton,
} from '../../components/SubmitButton';
import {useAppTranslation} from '../../utils/TranslationContext';

export const NoInternet: FC = () => {
  const {t} = useAppTranslation();

  return (
    <View style={styles.contentContainer}>
      <Image source={wifiIcon} style={styles.image} />
      <Text style={styles.headerText}>
        {t('noInternet')}
      </Text>
      <Text style={styles.contentText}>
        {t('noInternet')}
      </Text>
      <SubmitButton
        onPress={RNRestart.Restart}
        buttonType={ButtonType.Orange}
        title="Try again"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,

    marginLeft: 'auto',
    marginRight: 'auto',

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 25,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 28,
    marginBottom: 17,
    color: 'black',
  },
  contentText: {
    fontWeight: '400',
    fontSize: 17,
    marginHorizontal: 20,
  },
});
