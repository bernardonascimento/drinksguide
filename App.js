import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Drinks from './src/screens/Drinks';
import Categories from './src/screens/Categories';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        headerMode="screen">
        <Stack.Screen name="Categorias" component={Categories} />
        <Stack.Screen name="Bebidas" component={Drinks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
