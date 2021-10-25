import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {useState} from 'react';
import DateTimePicker from 'react-native-date-picker';
import moment from 'moment';

import Modal from 'react-native-modal';

const MyOrdersScreen1 = ({navigation}) => {
  const [city, setCity] = useState('');
  const [pickUpArea, setPickUpArea] = useState('');
  const [sender, setSender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = selectedDate => {
    console.log(selectedDate);
    setDate(moment(selectedDate));
  };
  const onCancelPress = () => {
    setDate(moment());
    setShow(false);
  };

  const onDonePress = () => {
    onChange(date);
    setShow(false);
  };

  console.log(date);

  return (
    <View style={styles.container}>
      <Text style={styles.orderText}>Create an order</Text>
      <Text style={styles.inputText}>Pick up city*</Text>
      <Text style={styles.inputText2}>
        A city where a traveler collects your items
      </Text>
      <TextInput
        style={styles.input}
        value={city}
        placeholder="Start typing city name"
        onChangeText={val => setCity(val)}
      />

      <Text style={styles.inputText}>Closest pick up area*</Text>
      <Text style={styles.inputText2}>
        An area near an airport where a traveler neets your contact person to
        collect you item
      </Text>
      <TextInput
        style={styles.input}
        value={pickUpArea}
        placeholder="Select an airport"
        onChangeText={val => setPickUpArea(val)}
      />
      <Text style={styles.inputText}>Sender name*</Text>
      <Text style={styles.inputText2}>
        Sender is someone who would pass your item to a traveler
      </Text>
      <TextInput
        style={styles.input}
        value={sender}
        placeholder="Enter a name"
        onChangeText={val => setSender(val)}
      />
      <Text style={styles.inputText}>Contant phone number</Text>

      <TextInput
        style={styles.input}
        value={phoneNumber}
        placeholder="Mobile number"
        onChangeText={val => setPhoneNumber(val)}
      />

      <TouchableOpacity onPress={() => setShow(true)}>
        <Text style={styles.dateText}>{moment(date).format('YYYY-MM-DD')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.info}
        onPress={() => {
          navigation.navigate({
            name: 'Order2',
            params: {post: {city, pickUpArea, sender, phoneNumber}},
            merge: true,
          });
        }}>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={show}
        supportedOrientations={['portrait']}
        onRequestClose={() => setShow(false)}
        onBackdropPress={() => setShow(false)}>
        <View style={styles.modal}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              height: 256,
              overflow: 'hidden',
            }}>
            <View
              style={{
                marginTop: 20,
              }}>
              <DateTimePicker
                timeZoneOffsetInMinutes={0}
                value={new Date(date)}
                mode="date"
                minimumDate={
                  new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))
                }
                maximumDate={new Date(moment().format('YYYY-MM-DD'))}
                onDateChange={onChange}></DateTimePicker>
            </View>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={onCancelPress}
              style={[styles.bntText, styles.btnCancel]}>
              <Text>Cancel</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={onDonePress}
              style={[styles.bntText, styles.btnDone]}>
              <Text>Done</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyOrdersScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  orderText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    marginLeft: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#838383',
    marginLeft: 20,
    marginRight: 20,
    padding: 8,
    margin: 10,
  },
  inputText: {
    fontFamily: 'Helvetica',
    marginLeft: 20,
    marginTop: 10,
  },
  inputText2: {
    marginLeft: 20,
    color: '#838383',
  },
  info: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#008B8B',
  },
  button: {
    color: 'white',
    fontSize: 22,
  },
  date: {
    marginHorizontal: 45,
  },
  dateText: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderColor: '#838383',
    borderWidth: 1,
    marginHorizontal: 20,
  },
  bntText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
  modal: {
    top: 305,
  },
});
