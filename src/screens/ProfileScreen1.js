import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useState} from 'react';
import {Avatar} from 'react-native-elements';
import {SafeAreaView} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import {ScrollView} from 'react-native';
import {Modal} from 'react-native';

const ProfileScreen1 = ({navigation}) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [image, setImage] = useState(
    'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const takePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const changeAvatar = () => {};

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.avatar}>
        <Avatar
          rounded
          size={110}
          onPress={changeAvatar}
          source={{
            uri: image,
          }}
        />
      </SafeAreaView>

      <View style={styles.signUpForm}>
        <View style={styles.cameraOptions}>
          <TouchableOpacity onPress={takePhotoFromCamera}>
            <Text style={styles.cameraText1}>Open camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhotoFromLibrary}>
            <Text style={styles.cameraText}>Download Image from library</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sign}>Sign up</Text>
        <Text style={styles.signText}>
          Please sign up to complete your order.
        </Text>
        <Text style={styles.signUpText}>First name</Text>
        <TextInput
          style={styles.signInput}
          value={firstName}
          placeholder="Enter your first name"
          onChangeText={val => setFirstName(val)}
        />
        <Text style={styles.signUpText}>Last name</Text>
        <TextInput
          style={styles.signInput}
          value={lastName}
          placeholder="Enter your last name"
          onChangeText={val => setLastName(val)}
        />
        <Text style={styles.signUpText}>Email adress</Text>
        <TextInput
          style={styles.signInput}
          value={email}
          placeholder="Enter your email"
          onChangeText={val => setEmail(val)}
        />
        <Text style={styles.signUpText}>Password</Text>

        <TextInput
          style={styles.signInput}
          value={password}
          placeholder="********"
          onChangeText={val => setPassword(val)}
        />
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  signInput: {
    borderWidth: 1,
    borderColor: '#838383',
    marginLeft: 40,
    marginRight: 40,
    padding: 8,
    margin: 10,
  },
  sign: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 120,
    marginHorizontal: 150,
  },
  signUpText: {
    marginTop: 10,
    marginLeft: 40,
  },
  signText: {
    marginHorizontal: 65,
    marginTop: 10,
  },
  signUpButton: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 10,
    marginTop: 20,
    marginRight: 40,
    marginLeft: 40,
    backgroundColor: '#008B8B',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 20,
  },
  avatar: {
    position: 'absolute',
    marginHorizontal: 144,
    marginVertical: 20,
  },
  signUpForm: {
    position: 'absolute',
    marginVertical: 65,
  },
  cameraText: {
    fontSize: 15,
    color: '#838383',
  },
  cameraText1: {
    fontSize: 15,
    color: '#838383',
    marginHorizontal: 55,
  },
  cameraOptions: {
    position: 'absolute',
    marginVertical: 80,
    marginHorizontal: 90,
  },
});
