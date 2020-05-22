import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  Back,
  BackText,
  Menu,
  Profile,
  Text,
  Info,
  TextInfo,
} from './styles';

const Client: React.FC = () => {
  return (
    <Container>
      <Header>
        <Back>
          <Icon name="chevron-left" size={24} color="#fff" />
          <BackText>voltar</BackText>
        </Back>

        <Menu>
          <Icon name="more-vertical" size={24} color="#fff" />
        </Menu>
      </Header>

      <Profile>
        <Icon name="user" size={50} color="#fff" />
      </Profile>

      <View>
        <Text>Jonatas P de A Alves</Text>
      </View>

      <Info>
        <Icon name="phone" size={24} color="#FFF" />
        <TextInfo>(21) 98477-1103</TextInfo>
      </Info>
      <Info>
        <Icon name="user" size={24} color="#FFF" />
        <TextInfo>174.716.40-07</TextInfo>
      </Info>
      <Info>
        <Icon name="home" size={24} color="#FFF" />
        <TextInfo>
          Rod. Amaral Peixoto km 2,4 condomínio cidade jardim rua c casa 233
        </TextInfo>
      </Info>
      <Info>
        <Icon name="briefcase" size={24} color="#FFF" />
        <TextInfo>Estudante</TextInfo>
      </Info>
      <Info>
        <Icon name="instagram" size={24} color="#FFF" />
        <TextInfo>@jonatas.paalves</TextInfo>
      </Info>
      <Info>
        <Icon name="calendar" size={24} color="#FFF" />
        <TextInfo>11/03/1998</TextInfo>
      </Info>
    </Container>
  );
};

export default Client;
