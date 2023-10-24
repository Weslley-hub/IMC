import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const IMCScreen = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcResultado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      setIMC(imcResultado);
    }
  };

  return (
    <View>
      <Text>Informe sua altura (cm):</Text>
      <TextInput
        placeholder="Altura"
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />
      <Text>Informe seu peso (kg):</Text>
      <TextInput
        placeholder="Peso"
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {imc !== null && <Text>Seu IMC é: {imc}</Text>}
    </View>
  );
};

export default IMCScreen;
