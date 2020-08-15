import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Button} from 'react-native';
import {Wrapper, Text} from './style';

import {getAllCategories} from '../../redux/Categories/action';

function Categories({navigation, dispatch, categories}) {
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <Wrapper>
      {categories.allCategories.drinks &&
        categories.allCategories.drinks.map((value, index) => (
          <Text key={index}>{value.strCategory}</Text>
        ))}

      <Button onPress={() => navigation.navigate('Bebidas')} title="Bebidas" />
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({categories: state.Categories});
export default connect(mapStateToProps)(Categories);
