import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #121d27;
  padding: 0 15px 14px;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Back = styled(BorderlessButton)`
  flex-direction: row;
`;

export const BackText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  margin-left: 3px;
`;

export const Menu = styled(BorderlessButton)``;

export const Profile = styled.View`
  height: 180px;
  width: 180px;
  border-radius: 180px;
  background-color: #837979;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 60px;
`;

export const Info = styled.View`
  width: 100%;
  margin-left: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

export const TextInfo = styled.Text`
  font-weight: 600;
  font-size: 15px;
  color: #fff;
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 0 30px 0 0;
`;
