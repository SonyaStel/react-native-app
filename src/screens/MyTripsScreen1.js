import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useState} from 'react';
import axios from 'axios';

const MyTripsScreen1 = ({navigation, route}) => {
  const [film, setFilm] = useState({});

  React.useEffect(() => {
    getData(route.params.url);
  }, []);

  const getData = url => {
    axios
      .get(url)
      .then(function (response) {
        setFilm(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: 10}}>
        <Text>{item.title}</Text>

        <TouchableOpacity
          style={styles.viewMore}
          onPress={() => navigation.navigate('Trips1', {url: item.url})}>
          <Text style={styles.text}>View more</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{film.title}</Text>
      <Text style={styles.title}>Director: {film.director}</Text>
      <Text>{film.opening_crawl}</Text>
      <FlatList
        style={styles.moviesList}
        data={film}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.planets}
        onPress={() => navigation.navigate('Trips2')}>
        <Text style={styles.textPlanets}>Planets</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyTripsScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
  },
  planets: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'black',
    marginBottom: 120,
  },
  textPlanets: {
    fontSize: 20,
    color: '#fff',
  },
});
