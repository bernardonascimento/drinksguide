import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: ${(props) => props.theme.secondary};

  padding: 2px 6px;
  width: 100%;
  height: 57px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 39px;
  font-size: 16px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: ${(props) => props.theme.graydark};
  color: ${(props) => props.theme.white};
`;
