import React from 'react';
import {connect} from 'react-redux';

import {ScrollView} from 'react-native';
import {Container, List, ListItem, Thumb, Text} from './style';

const Drinks = ({drinks}) => {
  return (
    <Container>
      <ScrollView>
        <List>
          {drinks.allDrinks.drinks.map((value, index) => (
            <ListItem key={index.toString()}>
              {value.strDrinkThumb ? (
                <Thumb source={{uri: value.strDrinkThumb}} />
              ) : (
                <Thumb source={require('../../assets/no-image-found.png')} />
              )}
              <Text>{value.strDrink}</Text>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = (state) => ({drinks: state.drinks});
export default connect(mapStateToProps)(Drinks);
