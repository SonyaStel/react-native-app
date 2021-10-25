import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import HomeScreen1 from '../screens/HomeScreen1';

const Stack = createStackNavigator();

function HomeStack() {
  return (
      
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{headerTitle: 'Home page'}}
      />
      <Stack.Screen 
      name="Home1" 
      component={HomeScreen1} 
      options={{headerTitle: 'Another home page'}}/>
  
    </Stack.Navigator>
    
  );
}

export default HomeStack;