import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const HomeScreen = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const handleShowSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  const handleBack = () => {
    setShowSignUp(false);
    setShowSignIn(false);
  };

  return (
    <View>
      {showSignUp ? (
        <SignUpScreen />
      ) : showSignIn ? (
        <SignInScreen />
      ) : (
        <React.Fragment>
          <Text>Bem-vindo à Tela Inicial</Text>
          <Button title="Criar Conta" onPress={handleShowSignUp} />
          <Button title="Fazer Login" onPress={handleShowSignIn} />
        </React.Fragment>
      )}
      {showSignUp || showSignIn ? (
        <Button title="Voltar" onPress={handleBack} />
      ) : null}
    </View>
  );
};

export default HomeScreen;
