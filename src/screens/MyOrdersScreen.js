import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const MyOrdersScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}></Text>
      <Image
        style={styles.imagelocation}
        source={require('../../assets/location.png')}
      />
      <Image style={styles.imagebox} source={require('../../assets/box.png')} />
      <Text style={styles.text}>You don't have any orders.</Text>
      <Text style={styles.text}>Create your first order right now.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Order1')}>
        <Text style={styles.textButton}>Create an order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    marginTop: 10,
  },
  imagelocation: {
    height: 60,
    width: 60,
    opacity: 0.4,
  },
  imagebox: {
    height: 250,
    width: 250,
    marginRight: 30,
  },
  text: {
    color: '#838383',
  },
  button: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
    marginTop: 20,

    backgroundColor: '#008B8B',
  },
  textButton: {
    color: 'white',
    fontSize: 22,
    paddingHorizontal: 80,
    fontFamily: 'Helvetica',
  },
});
