import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Line, Icon } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Line>
        <Icon name="user" size={24} color="#fff" />
        <Input name="Name" placeholder="Nome" />
      </Line>
      <Line>
        <Icon name="phone" size={24} color="#fff" />
        <Input name="Phone" placeholder="Telefone/Celular" />
      </Line>
      <Line>
        <Icon name="user" size={24} color="#fff" />
        <Input name="CPF" placeholder="CPF" />
      </Line>
      <Line>
        <Icon name="home" size={24} color="#fff" />
        <Input name="Address" placeholder="Endereço" />
      </Line>
      <Line>
        <Icon name="briefcase" size={24} color="#fff" />
        <Input name="Work" placeholder="Trabalho" />
      </Line>
      <Line>
        <Icon name="instagram" size={24} color="#fff" />
        <Input name="Instagram" placeholder="Instagram" />
      </Line>
      <Line>
        <Icon name="calendar" size={24} color="#fff" />
        <Input name="Birthday" placeholder="Aniversário" />
      </Line>

      <Button>ANAMNESE (opcional)</Button>
      <Button>CADASTRAR</Button>
    </Container>
  );
};

export default SignIn;
