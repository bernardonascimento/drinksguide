import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

import {Container, Wrapper, Text, List, AreaIcon} from './style';

import {getAllCategories} from '../../../redux/Categories/action';

function Categories({navigation, dispatch, categories}) {
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  function handleNavigationToDrinks(category) {
    navigation.navigate('Drinks', {category});
  }

  return (
    <Container>
      <Wrapper>
        <ScrollView>
          {categories.allCategories.drinks.map((value, index) => (
            <List key={index.toString()}>
              <Text>{value.strCategory}</Text>
              <RectButton
                onPress={() => handleNavigationToDrinks(value.strCategory)}>
                <AreaIcon>
                  <Icon name="chevron-right" color="#fff" size={24} />
                </AreaIcon>
              </RectButton>
            </List>
          ))}
        </ScrollView>
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = (state) => ({categories: state.categories});
export default connect(mapStateToProps)(Categories);
