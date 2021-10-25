import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const CreateOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Create an order</Text>
      <Button title="Click here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default CreateOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
