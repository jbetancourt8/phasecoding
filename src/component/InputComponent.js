import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

function InputComponent({title, placeholder, onChangeText}) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        style={styles.inputBox}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inputBox: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
  },
});

export default InputComponent;
