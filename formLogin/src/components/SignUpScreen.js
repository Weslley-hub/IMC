import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';

class SignUpScreen extends Component {
  state = {
    nome: '',
    email: '',
    senha: '',
    confirmaoSenha: ''
  };

  handleSignUp = () => {

  };

  render() {
    return (
      <View>
        <Text>Cadastro de Usuário</Text>
        <TextInput
          placeholder="Nome"
          onChangeText={(text) => this.setState({ nome: text })}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text) => this.setState({ senha: text })}
        />
        <TextInput
          placeholder="Confirmação de Senha"
          secureTextEntry
          onChangeText={(text) => this.setState({ confirmacaoSenha: text })}
        />
        <Button title="Cadastrar" onPress={this.handleSignUp} />
      </View>
    );
  }
}

export  default SignUpScreen; 

