import React from 'react';

import {Wrapper, Text, Thumb, Measure} from './style';

function Ingredient({ingredient, measure}) {
  const imageUri = `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(
    ingredient,
  )}-small.png`;

  console.log(imageUri);

  return (
    <Wrapper>
      <Thumb source={{uri: imageUri}} />
      <Text>{ingredient}</Text>
      <Measure>{measure}</Measure>
    </Wrapper>
  );
}

export default Ingredient;
