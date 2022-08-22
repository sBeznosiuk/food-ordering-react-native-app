import {CompositeScreenProps} from '@react-navigation/native';
import {
  ErrorMessage,
  Field,
  Formik,
  FormikProps,
} from 'formik';
import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';

import {
  ButtonType,
  SubmitButton,
} from '../../components/SubmitButton';
import {TextFieldUnderlined} from '../../components/TextFieldUnderlined';
import {
  MainNavigationRoutes,
  MainNavigationScreenType,
} from '../../navigations/params/AppNavigationParams';
import {
  AuthNavigationRoutes,
  AuthNavigationScreenType,
} from '../../navigations/params/AuthNavigationParams';
import {useStore} from '../../store/StoreContext';
import {useAppTranslation} from '../../utils/TranslationContext';
import {styles} from './styles';

export interface LoginPageForm {
  email: string;
  password: string;
}

const initialValues: LoginPageForm = {
  email: '',
  password: '',
};

export const LoginPage: FC<
  CompositeScreenProps<
    AuthNavigationScreenType<AuthNavigationRoutes.Login>,
    MainNavigationScreenType<MainNavigationRoutes.AuthTabs>
  >
> = ({navigation}) => {
  const {t} = useAppTranslation();
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('invalidEmail'))
      .required(t('required')),
    password: Yup.string()
      .min(8, t('minLengthWarning', {val: 8}))
      .max(20, t('maxLengthWarning', {val: 20}))
      .required(t('required')),
  });

  const {userStore} = useStore();
  const proceedToHomePage = () =>
    navigation.navigate(MainNavigationRoutes.SideMenu);

  const onLogin = async (values: LoginPageForm) => {
    try {
      await userStore.authUser({
        identifier: values.email,
        password: values.password,
      });
      proceedToHomePage();
    } catch (e) {
      setError(`Error: ${e}`);
    }
  };

  const renderError = () => <Text>{error}</Text>;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onLogin}>
      {(props: FormikProps<LoginPageForm>) => (
        <View style={styles.container}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            style={styles.keyboardAware}>
            <View style={styles.formContainer}>
              <Field
                inputName="email"
                label={t('email')}
                component={TextFieldUnderlined}
              />
              <ErrorMessage
                name="email"
                render={renderError}
              />
              <Field
                inputName="password"
                label={t('password')}
                password
                component={TextFieldUnderlined}
              />
            </View>

            <SubmitButton
              buttonType={ButtonType.Orange}
              title={t('signIn')}
              onPress={props.handleSubmit}
            />
          </KeyboardAwareScrollView>
        </View>
      )}
    </Formik>
  );
};
