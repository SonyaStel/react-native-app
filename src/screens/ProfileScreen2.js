import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {min} from 'moment';

const ProfileScreen2 = ({navigation}) => {
  const logIn = yup.object({
    email: yup.string().required().email(),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  const handleSubmit = values => {
    console.log('values', values);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.logIn}>Log in</Text> */}
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={logIn}>
        {props => {
          const {handleSubmit, handleChange, errors, values, handleReset} =
            props;

          console.log('errors', errors);

          return (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange('password')}
                value={values.password}
              />
              <TouchableOpacity style={styles.submitBnt} onPress={handleSubmit}>
                <Text style={styles.submitBtnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#838383',
    paddingHorizontal: 120,
    marginVertical: 10,
    paddingVertical: 9,
  },
  submitBnt: {
    borderWidth: 1,
    borderColor: '#008B8B',
    backgroundColor: '#008B8B',
    marginVertical: 20,
    paddingVertical: 6,
  },
  submitBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  logIn: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default ProfileScreen2;
