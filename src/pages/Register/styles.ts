import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #121d27;
  padding: 0 40px;
`;

export const Line = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
  margin-top: 5px;
`;
