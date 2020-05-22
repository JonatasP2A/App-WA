import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ClientData from '../../components/ClientData';

import { Container, Title } from './styles';

const Clients: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container>
        <Title>CLIENTES</Title>
        <ClientData
          name="Jonatas P de A Alves"
          number="(21) 98477-1103"
          cpf="174.716.407-07"
          onPress={() => navigation.navigate('Client')}
        />
        <ClientData
          name="Jonatas P de A Alves"
          number="(21) 98477-1103"
          cpf="174.716.407-07"
          onPress={() => navigation.navigate('Client')}
        />
        <ClientData
          name="Jonatas P de A Alves"
          number="(21) 98477-1103"
          cpf="174.716.407-07"
          onPress={() => navigation.navigate('Client')}
        />
        <ClientData
          name="Jonatas P de A Alves"
          number="(21) 98477-1103"
          cpf="174.716.407-07"
          onPress={() => navigation.navigate('Client')}
        />
        <ClientData
          name="Jonatas P de A Alves"
          number="(21) 98477-1103"
          cpf="174.716.407-07"
          onPress={() => navigation.navigate('Client')}
        />
        <ClientData
          name="Jonatas P de A Alves"
          number="(21) 98477-1103"
          cpf="174.716.407-07"
          onPress={() => navigation.navigate('Client')}
        />
        <ClientData
          name="Jonatas P de A Alves"
          number="(21) 98477-1103"
          cpf="174.716.407-07"
          onPress={() => navigation.navigate('Client')}
        />
      </Container>
    </ScrollView>
  );
};

export default Clients;
