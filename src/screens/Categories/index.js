import React from 'react';
import {View, Button} from 'react-native';

function Categories({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text>Categories</Text> */}
      <Button onPress={() => navigation.navigate('Bebidas')} title="Bebidas" />
    </View>
  );
}

export default Categories;
