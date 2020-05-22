import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 90px;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 14px;
  justify-content: center;
  flex-direction: row;
`;

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 16px;
  margin-bottom: 2px;
`;

export const TextName = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 5px;
`;

export const IconRight = styled(FeatherIcon)`
  margin-top: 33px;
  margin-left: 5px;
`;

export const CPF = styled.Text`
  color: #1e4040;
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 12px;
  margin-right: 5px;
  margin-left: 2px;
`;

export const UserInitials = styled.View`
  background-color: #dae7f2;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 15px;
  height: 60px;
  width: 60px;
  border-radius: 60px;
`;

export const UserInitialsText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #1e4040;
`;

export const Data = styled.View`
  flex: 1;
  justify-content: center;
`;
