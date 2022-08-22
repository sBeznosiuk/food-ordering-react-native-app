import {StyleSheet} from 'react-native';

import {PrimaryColors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 30,
    backgroundColor: PrimaryColors.Grey,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 'auto',
    paddingVertical: 'auto',
  },
  keyboardAware: {
    backgroundColor: PrimaryColors.Grey,
    flex: 1,
  },
});
