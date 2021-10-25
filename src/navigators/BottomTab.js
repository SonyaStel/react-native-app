import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../../Icon';

export function BottomTab({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const iconName = (label) => {
    switch (label) {
        case 'Home':
          return 'home';
        case 'My orders':
          return 'shopping-bag';
        case 'My trips':
          return 'flight';
        case 'Messages':
          return 'mail';
        case 'Profile':
          return 'user';
      }
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ 
              flex: 1, 
              height:90, 
              alignItems:'center', 
              
              justifyContent: 'center', 
              backgroundColor: '#F6F6F6',
              
            }}
          >
            <Text style={{ 
              color: isFocused ? '#008B8B' : '#222',
              position: 'absolute',
              bottom: 16,
              fontSize: 13,            
              
              }}>
              {label}
            </Text>
            <Icon 
            name={iconName(label)}
            color={ isFocused ? '#008B8B' : '#222'}
            
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}