/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {} from 'react';
import HomeScreen from './components/pages/Home/Home';
import VocabeltestScreen from './components/pages/Home/Vocabeltest';
import EingabeScreen from './components/pages/Home/Eingabe';
import {SafeAreaView, StyleSheet} from 'react-native';
import {} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Vocabeltest" component={VocabeltestScreen} />
      <Stack.Screen name="Eingabe" component={EingabeScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default App;
