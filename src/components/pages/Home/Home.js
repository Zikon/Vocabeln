import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Vocabeltrainer</Text>
      <Button
        title="Vocabeltest"
        onPress={() =>
          navigation.navigate('Vocabeltest', {name: 'Teste Dich!'})
        }
      />
      <Button
        title="Vocabeln eingeben"
        onPress={() => navigation.navigate('Eingabe', {name: ''})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: 'lightgrey',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
