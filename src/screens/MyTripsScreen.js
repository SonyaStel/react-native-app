import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getMovies} from '../actions/trips';

const MyTripsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.tripReducer.movies);
  const loading = useSelector(state => state.tripReducer.loading);

  console.log('loading', loading);

  // React.useEffect(() => {
  //   dispatch(getMovies());
  // }, []);

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
      {loading ? (
        <ActivityIndicator size="large" color="#838383" />
      ) : (
        <>
          <Text style={styles.movies}>Movies</Text>
          <FlatList
            style={styles.moviesList}
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </>
      )}
    </View>
  );
};

export default MyTripsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  viewMore: {
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
  text: {
    color: '#fff',
  },
  movies: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  moviesList: {},
});
