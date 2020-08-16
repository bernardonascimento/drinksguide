import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${(props) => props.theme.secondary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const List = styled.View`
  background: ${(props) => props.theme.secondary};
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const ListItem = styled.View`
  width: 50%;
  height: 245px;
  border-radius: 10px;
  padding: 10px;

  flex-direction: column;
  align-items: center;
`;

export const ItemWrapper = styled.View`
  flex: 1;
  align-self: stretch;
`;

export const Thumb = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.white};
  position: relative;
  font-size: 15px;
  text-align: center;
`;
