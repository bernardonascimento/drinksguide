import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Drinks from './Drinks';
import DrinksDetails from '../DrinksDetails';

import dark from '../../theme/dark';

const Stack = createStackNavigator();

function Category() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerTitleAlign: 'center',
      }}
      headerMode="screen">
      <Stack.Screen
        name="Drinks Guide"
        component={Drinks}
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
        name="DrinkDetails"
        component={DrinksDetails}
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
  );
}

export default Category;
