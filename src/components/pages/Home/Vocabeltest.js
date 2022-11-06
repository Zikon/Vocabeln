import React from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';

const VocabeltestScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Vocabeltest</Text>
      <Button
        title="back to home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: 'lightgrey',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default VocabeltestScreen;
