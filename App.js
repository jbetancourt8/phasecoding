import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import InputComponent from './src/component/InputComponent';
import ButtonComponent from './src/component/ButtonComponent';

function App() {
  const [amount, setAmount] = useState(0);
  const [apr, setApr] = useState(0);
  const [term, setTerm] = useState(0);
  const [calculation, setCalculation] = useState(null);

  const calculatePrinciple = () => {
    const monthlyRate = apr / 1200;
    setCalculation(
      (amount * monthlyRate) / (1 - Math.pow(1 / (1 + monthlyRate), term)),
    );
  };

  const displayResults =
    calculation != null ? (
      <Text style={styles.resultText}>
        Your Monthly Principle would be: ${calculation}
      </Text>
    ) : null;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Mortage Calculator</Text>
      <InputComponent
        title="Desired Loan Amount"
        placeholder="$"
        onChangeText={setAmount}
      />
      <InputComponent
        title="Estimated APR"
        placeholder="%"
        onChangeText={setApr}
      />
      <InputComponent title="Desired Term" onChangeText={setTerm} />

      <ButtonComponent title="Calculate" onPress={() => calculatePrinciple()} />

      {displayResults}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  titleText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
  },
});

export default App;
