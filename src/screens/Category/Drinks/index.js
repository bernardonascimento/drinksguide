import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useRoute} from '@react-navigation/native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {ScrollView} from 'react-native';
import {Container, List, ListItem, ItemWrapper, Thumb, Text} from './style';

import {getAllDrinksByCategory} from '../../../redux/Drinks/action';

const Drinks = ({navigation, dispatch, drinks}) => {
  const route = useRoute();

  useEffect(() => {
    dispatch(getAllDrinksByCategory(route.params.category));
  }, [dispatch, route]);

  function handleNavigateToDetail(idDrink) {
    navigation.navigate('DrinkDetails', {idDrink});
  }

  return (
    <Container>
      <ScrollView>
        <List>
          {drinks.allDrinks.drinks.map((value, index) => (
            <ListItem key={index.toString()}>
              <ItemWrapper>
                <TouchableOpacity
                  onPress={() => handleNavigateToDetail(value.idDrink)}>
                  <Thumb source={{uri: value.strDrinkThumb}} />
                  <Text>{value.strDrink}</Text>
                </TouchableOpacity>
              </ItemWrapper>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = (state) => ({drinks: state.drinks});
export default connect(mapStateToProps)(Drinks);
