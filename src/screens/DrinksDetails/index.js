import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native';

import {
  Container,
  Wrapper,
  Thumb,
  TextWrapper,
  Name,
  Category,
  Type,
  InstructionsLabel,
  InstructionsText,
  IngredientLabel,
} from './style';
import Ingredient from './Ingredient';

import {getDrinkByID} from '../../redux/Drinks/action';

function DrinksDetails({dispatch, drinks}) {
  const route = useRoute();

  useEffect(() => {
    dispatch(getDrinkByID(route.params.idDrink));
  }, [dispatch, route]);

  return (
    <Container>
      {drinks.current.drinks.map((value, index) => (
        <ScrollView key={index.toString()}>
          <Wrapper>
            <Thumb source={{uri: value.strDrinkThumb}} />

            <TextWrapper>
              <Name>{value.strDrink}</Name>
              <Category>{value.strCategory}</Category>

              <Type>{value.strAlcoholic}</Type>

              <InstructionsLabel>Instructions</InstructionsLabel>
              <InstructionsText>{value.strInstructions}</InstructionsText>

              <IngredientLabel>Ingredients</IngredientLabel>
              {value.strIngredient1 && (
                <Ingredient
                  ingredient={value.strIngredient1}
                  measure={value.strMeasure1}
                />
              )}
              {value.strIngredient2 && (
                <Ingredient
                  ingredient={value.strIngredient2}
                  measure={value.strMeasure2}
                />
              )}
              {value.strIngredient3 && (
                <Ingredient
                  ingredient={value.strIngredient3}
                  measure={value.strMeasure3}
                />
              )}
              {value.strIngredient4 && (
                <Ingredient
                  ingredient={value.strIngredient4}
                  measure={value.strMeasure4}
                />
              )}
            </TextWrapper>
          </Wrapper>
        </ScrollView>
      ))}
    </Container>
  );
}

const mapStateToProps = (state) => ({drinks: state.drinks});
export default connect(mapStateToProps)(DrinksDetails);
