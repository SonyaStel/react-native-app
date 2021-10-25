import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileScreen1 from '../screens/ProfileScreen1';
import ProfileScreen2 from '../screens/ProfileScreen2';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerTitle: 'Profile'}}
      />
      <Stack.Screen
        name="Profile1"
        component={ProfileScreen1}
        options={{headerTitle: 'Sign up'}}
      />
      <Stack.Screen
        name="Profile2"
        component={ProfileScreen2}
        options={{headerTitle: 'Log in'}}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
