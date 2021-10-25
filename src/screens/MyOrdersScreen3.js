import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ListItem} from 'react-native-elements/dist/list/ListItem';
import {useState} from 'react';
import axios from 'axios';

function MyOrdersScreen3({navigation}) {
  const [episodes, setEpisodes] = useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('https://swapi.dev/api/films/')
      .then(function (response) {
        setEpisodes(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  // console.log(JSON.stringify(episodes, null, 2));
  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: 10}}>
        <Text>{item.producer}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.travelersBox}>
        <Avatar
          rounded
          size={50}
          source={{
            uri: 'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
          }}
        />
        <Text style={styles.travelerName}>Jason Duncan</Text>
        <Text>Travels from:</Text>
        {/* <FlatList
          style={styles.moviesList}
          data={episodes}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> */}
        <Text>Travels to</Text>
        <Text>Departure date</Text>
        <Text>Arival date</Text>

        <TouchableOpacity style={styles.chatBtn}>
          <Text style={styles.bntColor}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deliverBtn}>
          <Text style={styles.bntColor}>Request to deliver</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.travelersBox}>
        <Avatar
          rounded
          size={50}
          source={{
            uri: 'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
          }}
        />
        <Text style={styles.travelerName}>Jason Duncan</Text>
        <Text>Travels from</Text>
        <Text>Travels to</Text>
        <Text>Departure date</Text>
        <Text>Arival date</Text>
        <TouchableOpacity style={styles.chatBtn}>
          <Text style={styles.bntColor}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deliverBtn}>
          <Text style={styles.bntColor}>Request to deliver</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.travelersBox}>
        <Avatar
          rounded
          size={50}
          source={{
            uri: 'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
          }}
        />
        <Text style={styles.travelerName}>Jason Duncan</Text>
        <Text>Travels from</Text>
        <Text>Travels to</Text>
        <Text>Departure date</Text>
        <Text>Arival date</Text>
        <TouchableOpacity style={styles.chatBtn}>
          <Text style={styles.bntColor}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deliverBtn}>
          <Text style={styles.bntColor}>Request to deliver</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.travelersBox}>
        <Avatar
          rounded
          size={50}
          source={{
            uri: 'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
          }}
        />
        <Text style={styles.travelerName}>Jason Duncan</Text>
        <Text>Travels from</Text>
        <Text>Travels to</Text>
        <Text>Departure date</Text>
        <Text>Arival date</Text>
        <TouchableOpacity style={styles.chatBtn}>
          <Text style={styles.bntColor}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deliverBtn}>
          <Text style={styles.bntColor}>Request to deliver</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.travelersBox}>
        <Avatar
          rounded
          size={50}
          source={{
            uri: 'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
          }}
        />
        <Text style={styles.travelerName}>Jason Duncan</Text>
        <Text>Travels from</Text>
        <Text>Travels to</Text>
        <Text>Departure date</Text>
        <Text>Arival date</Text>
        <TouchableOpacity style={styles.chatBtn}>
          <Text style={styles.bntColor}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deliverBtn}>
          <Text style={styles.bntColor}>Request to deliver</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.travelersBox}>
        <Avatar
          rounded
          size={50}
          source={{
            uri: 'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
          }}
        />
        <Text style={styles.travelerName}>Jason Duncan</Text>
        <Text>Travels from</Text>
        <Text>Travels to</Text>
        <Text>Departure date</Text>
        <Text>Arival date</Text>
        <TouchableOpacity style={styles.chatBtn}>
          <Text style={styles.bntColor}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deliverBtn}>
          <Text style={styles.bntColor}>Request to deliver</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default MyOrdersScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  travelersBox: {
    marginVertical: 10,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 20,
  },
  travelerName: {
    fontWeight: 'bold',
    marginHorizontal: 60,
    bottom: 40,
    fontSize: 20,
  },
  chatBtn: {
    borderWidth: 1,
    backgroundColor: '#008B8B',
    borderColor: '#008B8B',
    paddingHorizontal: 7,
    marginHorizontal: 150,
    right: 90,
    top: 10,
  },
  deliverBtn: {
    borderWidth: 1,
    backgroundColor: '#008B8B',
    borderColor: '#008B8B',
    marginHorizontal: 100,
    paddingHorizontal: 15,
    left: 60,
    bottom: 9,
  },
  bntColor: {
    color: '#fff',
  },
});
