import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import MessagesScreen from '../screens/MessagesScreen';
import MessagesScreen1 from '../screens/MessagesScreen1.js';

const Stack = createStackNavigator();

function MessagesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{headerTitle: 'Messages'}}
      />
      <Stack.Screen
        name="Messages1"
        component={MessagesScreen1}
        options={{headerTitle: 'Messages2'}}
      />
    </Stack.Navigator>
  );
}

export default MessagesStack;
