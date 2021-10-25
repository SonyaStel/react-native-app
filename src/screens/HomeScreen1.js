import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home page 2</Text>
    </View>
  );
};

export default HomeScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
