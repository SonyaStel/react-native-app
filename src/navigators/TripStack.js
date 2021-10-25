import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import MyTripsScreen from '../screens/MyTripsScreen';
import MyTripsScreen1 from '../screens/MyTripsScreen1';
import MyTripsScreen2 from '../screens/MyTripsScreen2';

const Stack = createStackNavigator();

function TripStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trips"
        component={MyTripsScreen}
        options={{headerTitle: 'Trips'}}
      />
      <Stack.Screen
        name="Trips1"
        component={MyTripsScreen1}
        options={{headerTitle: 'Trips1'}}
      />

      <Stack.Screen
        name="Trips2"
        component={MyTripsScreen2}
        options={{headerTitle: 'Trips2'}}
      />
    </Stack.Navigator>
  );
}

export default TripStack;
