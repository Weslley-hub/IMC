import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  state = {
    email: '',
    senha: '',
  };

  const navigate = useNavigation;

  const handleEntrar = () => {
    navigate.navigate('IMCScreen');
  }

    return (
      <View>
        <Text>Login</Text>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text) => this.setState({ senha: text })}
        />
        <Button title="Entrar" onPress={handleEntrar} />
      </View>
    );
}

export default SignInScreen;
