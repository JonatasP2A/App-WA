import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import {
  Container,
  Line,
  TextName,
  Text,
  CPF,
  Icon,
  UserInitials,
  UserInitialsText,
  Data,
  IconRight,
} from './styles';

interface ClientProps extends RectButtonProperties {
  name: string;
  number: string;
  cpf: string;
}

const ClientData: React.FC<ClientProps> = ({ name, number, cpf, ...rest }) => (
  <Container {...rest}>
    <UserInitials>
      <UserInitialsText>JA</UserInitialsText>
    </UserInitials>
    <Data>
      <Line>
        <Icon name="user" size={24} color="#1E4040" />
        <TextName>{name}</TextName>
      </Line>
      <Line>
        <Icon name="phone" size={24} color="#1E4040" />
        <Text>{number}</Text>
      </Line>
      <Line>
        <CPF>CFP</CPF>
        <Text>{cpf}</Text>
      </Line>
    </Data>
    <IconRight name="chevron-right" size={24} color="#1E4040" />
  </Container>
);

export default ClientData;
