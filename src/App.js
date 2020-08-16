import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Drinks from './screens/Drinks';
import Categories from './screens/Categories';

import dark from './theme/dark';

import store from './redux';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={dark}>
        <StatusBar barStyle={'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              headerTitleAlign: 'center',
            }}
            headerMode="screen">
            <Stack.Screen
              name="Drinks Guide"
              component={Categories}
              options={{
                headerStyle: {
                  backgroundColor: dark.secondary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 30,
                },
              }}
            />
            <Stack.Screen
              name="Drinks"
              component={Drinks}
              options={{
                headerStyle: {
                  backgroundColor: dark.secondary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 25,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
