import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <Container>
      <TextInput
        placeholderTextColor="#837979"
        keyboardAppearance="dark"
        {...rest}
      />
    </Container>
  );
};

export default Input;
