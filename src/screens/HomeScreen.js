import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home page</Text>
      {/* <ActivityIndicator size="small" color="#838383" /> */}
      <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'helvetica',
  },
});
