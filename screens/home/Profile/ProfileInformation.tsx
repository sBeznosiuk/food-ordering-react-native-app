import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import avatar from '../../../assets/Rectangle.png';
import penIcon from '../../../assets/pen.png';
import {User} from '../../../models/User';
import {PrimaryColors} from '../../../utils/colors';
import {useAppTranslation} from '../../../utils/TranslationContext';

interface ProfileInformationProps {
  user: User | null;
}

export const ProfileInformation: FC<
  ProfileInformationProps
> = ({user}) => {
  const {t} = useAppTranslation();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeader}>
        {t('profileInfo')}
      </Text>
      <View style={styles.informationContainer}>
        <Image
          source={avatar}
          style={styles.avatarStyles}
        />
        <View style={styles.informationContentContainer}>
          <Text style={styles.informationText}>
            {user?.username}
          </Text>
          <Text style={styles.informationText}>
            {user?.email}
          </Text>
          <Image source={penIcon} style={styles.penIcon} />
        </View>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const screenPadding = 30;

const styles = StyleSheet.create({
  avatarStyles: {
    height: 60,
    width: 60,
    marginRight: 15,
  },
  sectionHeader: {
    fontWeight: '700',
    fontSize: 17,
    color: '#000',
    marginRight: 'auto',
    marginBottom: 20,
  },
  sectionContainer: {
    flex: 0.2,
    marginTop: 20,
  },
  informationContainer: {
    flexDirection: 'row',

    width: width - screenPadding * 2,
    backgroundColor: PrimaryColors.White,
    borderRadius: 20,
    paddingVertical: 20,

    paddingLeft: 16,
    paddingRight: 25,
  },
  informationText: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  penIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  informationContentContainer: {
    position: 'relative',
    flex: 1,
  },
});
