import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {ThemeProvider} from 'styled-components';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Category from './screens/Category';
import Search from './screens/Search';

import dark from './theme/dark';

import store from './redux';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={dark}>
        <StatusBar barStyle={'dark-content'} />

        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                let iconName;

                if (route.name === 'Category') {
                  iconName = 'ios-list';
                } else if (route.name === 'Search') {
                  iconName = 'ios-search';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: dark.blue,
              inactiveTintColor: dark.gray,
              style: {
                backgroundColor: dark.secondary,
                borderTopColor: 'transparent',
              },
            }}>
            <Tab.Screen name="Category" component={Category} />
            <Tab.Screen name="Search" component={Search} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
