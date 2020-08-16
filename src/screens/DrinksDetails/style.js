import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${(props) => props.theme.secondary};
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Thumb = styled.Image`
  width: 100%;
  height: 280px;
  border-radius: 10px;
`;

export const TextWrapper = styled.View`
  margin: 35px 20px;
`;

export const Name = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: 28px;
`;

export const Category = styled.Text`
  color: ${(props) => props.theme.gray};
  font-weight: 100;
  font-size: 14px;
`;

export const Type = styled.Text`
  color: ${(props) => props.theme.red};
  margin-top: 20px;
  font-size: 20px;
`;

export const InstructionsLabel = styled.Text`
  color: ${(props) => props.theme.gray};
  margin-top: 32px;
  font-size: 14px;
`;

export const InstructionsText = styled.Text`
  color: ${(props) => props.theme.white};
  margin-top: 5px;
  font-size: 16px;
`;

export const IngredientLabel = styled.Text`
  color: ${(props) => props.theme.gray};
  margin-top: 32px;
  font-size: 14px;
`;

export const IngredientText = styled.Text`
  color: ${(props) => props.theme.white};
`;
