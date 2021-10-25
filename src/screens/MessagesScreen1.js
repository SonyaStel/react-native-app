import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';

const MessagesScreen1 = ({navigation}) => (
  <View style={styles.container}>
    <Text>Message screen 2</Text>
  </View>
);

export default MessagesScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
