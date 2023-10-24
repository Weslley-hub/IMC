import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assents/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 100,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default Header;
