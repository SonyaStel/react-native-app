import React from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList, Text} from 'react-native';

import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getPlanets} from '../actions/trips2';

const MyTripsScreen2 = ({navigation, route}) => {
  const dispatch = useDispatch();
  const planets = useSelector(state => state.trip2Reducer.planets);
  const loading = useSelector(state => state.trip2Reducer.loading);

  console.log('loading', loading);

  React.useEffect(() => {
    dispatch(getPlanets());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: 10}}>
        <Text>{item.name}</Text>
        <TouchableOpacity
          style={styles.viewMore}
          onPress={() => navigation.navigate('Trips2', {url: item.url})}>
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
          <Text style={styles.textPlanets}>Planets</Text>
          <FlatList
            style={styles.planetsList}
            data={planets}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </>
      )}
    </View>
  );
};

export default MyTripsScreen2;

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
  textPlanets: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
  },
  planetsList: {},
});
