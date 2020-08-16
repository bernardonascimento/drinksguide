import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${(props) => props.theme.secondary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
`;

export const List = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.outline};
  padding: 25px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.white};
  width: 300px;
  font-size: 20px;
`;

export const AreaIcon = styled.View`
  background: ${(props) => props.theme.graydark};
  height: 36px;
  width: 36px;
  border-radius: 50px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
