import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from '../screens/ProfileScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen1';
import MyTripsScreen from '../screens/MyTripsScreen';
import MessagesScreen from '../screens/MessagesScreen';

import HomeStack from './HomeStack';
import OrderStack from './OrderStack';
import TripStack from './TripStack';
import ProfileStack from './ProfileStack';
import MessagesStack from './MessagesStack';

import {BottomTab} from './BottomTab';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="My orders"
        component={OrderStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="My trips"
        component={TripStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
