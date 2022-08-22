import {FormikErrors, FormikTouched} from 'formik';
import React, {FC} from 'react';
import {NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputFocusEventData, View, TextInputProps} from 'react-native';

import {PrimaryColors} from '../utils/colors';

interface TextInputComponentProps extends TextInputProps {
  label: string;
  inputName: string;
  password?: boolean;
  form: FormTypes;
}

interface FormTypes {
  handleSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleBlur?: (e?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleChange?: (e?: string | React.ChangeEvent<any>) => void;
  touched?: FormikTouched<{[field: string]: string}>;
  errors?: FormikErrors<{[field: string]: string}>;
}

export const TextFieldUnderlined: FC<TextInputComponentProps> = props => {
  const {form, label, password, inputName} = props;
  const {handleSubmit, handleChange, handleBlur, touched, errors} = form;

  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange(inputName)}
        onSubmitEditing={handleSubmit}
        secureTextEntry={password}
        onBlur={handleBlur(inputName)}
      />
      {touched[inputName] && errors[inputName] ? <Text style={styles.errorText}>{errors[inputName]}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  inputContainer: {
    flex: 1,
    marginTop: 15,
  },
  errorText: {
    marginBottom: 15,
    alignSelf: 'center',
    color: PrimaryColors.Orange,
  },
});
