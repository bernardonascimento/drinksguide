import React from 'react';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {
  Container,
  Wrapper,
  Item,
  TextWrapper,
  Thumb,
  Name,
  Category,
} from './style';
import SearchInput from '../../../components/SearchInput';

import {searchDrinksByName} from '../../../redux/Drinks/action';

function Drinks({navigation, dispatch, drinks}) {
  function handleChange(text) {
    dispatch(searchDrinksByName(text));
  }

  function handleNavigateToDetail(idDrink) {
    navigation.navigate('DrinkDetails', {idDrink});
  }

  return (
    <Container>
      <SearchInput search={handleChange} />

      <ScrollView>
        <Wrapper>
          {drinks.searchDrinks.drinks.map((value, index) => (
            <Item key={index.toString()}>
              <TouchableOpacity
                onPress={() => handleNavigateToDetail(value.idDrink)}>
                <Thumb source={{uri: value.strDrinkThumb}} />
                <TextWrapper>
                  <Name>{value.strDrink}</Name>
                  <Category>{value.strCategory}</Category>
                </TextWrapper>
              </TouchableOpacity>
            </Item>
          ))}
        </Wrapper>
      </ScrollView>
    </Container>
  );
}

const mapStateToProps = (state) => ({drinks: state.drinks});
export default connect(mapStateToProps)(Drinks);
