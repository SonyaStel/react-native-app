import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyOrdersScreen1 from '../screens/MyOrdersScreen1';
import MyOrdersScreen2 from '../screens/MyOrdersScreen2';
import MyOrdersScreen3 from '../screens/MyOrdersScreen3';

const Stack = createStackNavigator();

function OrderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Order"
        component={MyOrdersScreen}
        options={{headerTitle: 'My orders'}}
      />
      <Stack.Screen
        name="Order1"
        component={MyOrdersScreen1}
        options={{headerTitle: 'Create an order'}}
      />

      <Stack.Screen
        name="Order2"
        component={MyOrdersScreen2}
        options={{headerTitle: 'Check information'}}
      />

      <Stack.Screen
        name="Order3"
        component={MyOrdersScreen3}
        options={{headerTitle: 'Available travelers'}}
      />
    </Stack.Navigator>
  );
}

export default OrderStack;
