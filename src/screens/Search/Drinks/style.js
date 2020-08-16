import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${(props) => props.theme.secondary};
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Item = styled.View`
  flex: 1;
  margin: 10px;
`;

export const Thumb = styled.Image`
  width: 100%;
  height: 280px;
  border-radius: 10px;
`;

export const TextWrapper = styled.View`
  margin: 10px 10px;
`;

export const Name = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: 22px;
`;

export const Category = styled.Text`
  color: ${(props) => props.theme.gray};
  font-weight: 100;
  font-size: 14px;
`;
