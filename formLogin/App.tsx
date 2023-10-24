/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import Header from './src/components/Header';
import HomeScreen from './src/components/HomeScreen';
import IMCScreen from './src/components/IMCScreen';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Header/>
          <IMCScreen/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
