import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile1')}>
        <Text style={styles.signUp}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile2')}>
        <Text style={styles.logIn}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  signUp: {
    borderWidth: 1,
    padding: 5,
    color: '#fff',
    backgroundColor: '#008B8B',
    borderColor: '#008B8B',
    fontSize: 20,
    fontFamily: 'Helvetica',
    paddingHorizontal: 80,
  },
  logIn: {
    borderWidth: 1,
    padding: 5,
    color: '#fff',
    backgroundColor: '#008B8B',
    borderColor: '#008B8B',
    fontSize: 20,
    fontFamily: 'Helvetica',
    marginVertical: 10,
    paddingHorizontal: 87,
  },
});
