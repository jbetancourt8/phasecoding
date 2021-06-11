import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

function ButtonComponent({title, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    justifyContent: 'center',
    borderColor: 'blue',
    marginBottom: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'blue',
  },
});

export default ButtonComponent;
