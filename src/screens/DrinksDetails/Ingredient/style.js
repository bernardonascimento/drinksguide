import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Thumb = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.white};
  position: absolute;
  left: 100px;
`;

export const Measure = styled.Text`
  color: ${(props) => props.theme.white};
`;
