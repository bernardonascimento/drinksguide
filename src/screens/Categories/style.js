import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: ${(props) => props.theme.secondary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.white};
`;
