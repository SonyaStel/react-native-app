import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useState} from 'react';
import {Alert, Pressable} from 'react-native';
import Modal from 'react-native-modal';

function MyOrdersScreen2({navigation, route}) {
  const {city, pickUpArea, sender, phoneNumber} = route.params?.post;
  const [modalVisible, setModalVisible] = useState(false);

  const viewTravelers = () => {
    navigation.navigate('Order3');
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.information}>Pick up city: {city}</Text>
        <Text style={styles.information}>Pick up area: {pickUpArea}</Text>
        <Text style={styles.information}>Sender name: {sender}</Text>
        <Text style={styles.information}>
          Contact phone number: {phoneNumber}
        </Text>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.success}>Success!</Text>
              <Text style={styles.modalText}>
                Your order is confirmed!{'\n'}
                Now invite travelers to deliver your order or wait for them to
                request delivery.
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => viewTravelers()}>
                <Text style={styles.textStyle2}>View available travelers</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default MyOrdersScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  information: {
    fontSize: 20,
    color: 'black',

    marginRight: 40,
  },
  infoContainer: {
    marginTop: 200,
    marginLeft: 20,
  },
  textInfo: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Helvetica',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    paddingHorizontal: 40,
  },
  buttonOpen: {
    backgroundColor: '#008B8B',
    paddingHorizontal: 120,
    marginBottom: 120,
  },
  buttonClose: {
    backgroundColor: '#008B8B',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontSize: 20,
  },
  textStyle2: {
    color: 'white',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  success: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
