import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const NeueVocabel = () => {
  const [french, onChangeFrench] = React.useState(null);
  const [german, onChangeGerman] = React.useState(null);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFrench}
        value={french}
        placeholder="französich"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeGerman}
        value={german}
        placeholder="deutsch"
      />
    </View>
  );
};

const EingabeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Vocabeleingabe</Text>
      <Button
        title="back to home screen"
        onPress={() => navigation.navigate('Home')}
      />
      <NeueVocabel />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default EingabeScreen;
