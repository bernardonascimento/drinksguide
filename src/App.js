import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar, View} from 'react-native';

import {ThemeProvider} from 'styled-components';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Drinks from './screens/Drinks';
import Categories from './screens/Categories';

import dark from './theme/dark';

import store from './redux';

const Stack = createStackNavigator();

const options = {
  headerStyle: {
    backgroundColor: dark.secondary,
  },
  headerTitleStyle: {
    alignSelf: 'auto',
  },
  headerTintColor: '#fff',
};

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
              name="Categorias"
              component={Categories}
              options={{
                headerStyle: {
                  backgroundColor: dark.secondary,
                },
                // headerTitleStyle: {
                //   alignSelf: 'center',
                // },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Bebidas"
              component={Drinks}
              options={{
                headerStyle: {
                  backgroundColor: dark.secondary,
                },
                // headerTitleStyle: {alignSelf: 'center'},
                headerTintColor: '#fff',
                // headerRight: <View />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
