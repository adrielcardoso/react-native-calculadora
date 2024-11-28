import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function App() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handlePress = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input); 
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Erro');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleScientific = (func: string) => {
    try {
      const evalResult = eval(`${func}(${input})`);
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.result}>{result || '0'}</Text>
        <Text style={styles.input}>{input}</Text>
        <View style={styles.row}>
          <Button label="7" onPress={() => handlePress('7')} />
          <Button label="8" onPress={() => handlePress('8')} />
          <Button label="9" onPress={() => handlePress('9')} />
          <Button label="/" onPress={() => handlePress('/')} />
        </View>
        <View style={styles.row}>
          <Button label="4" onPress={() => handlePress('4')} />
          <Button label="5" onPress={() => handlePress('5')} />
          <Button label="6" onPress={() => handlePress('6')} />
          <Button label="*" onPress={() => handlePress('*')} />
        </View>
        <View style={styles.row}>
          <Button label="1" onPress={() => handlePress('1')} />
          <Button label="2" onPress={() => handlePress('2')} />
          <Button label="3" onPress={() => handlePress('3')} />
          <Button label="-" onPress={() => handlePress('-')} />
        </View>
        <View style={styles.row}>
          <Button label="0" onPress={() => handlePress('0')} />
          <Button label="." onPress={() => handlePress('.')} />
          <Button label="=" onPress={calculateResult} />
          <Button label="+" onPress={() => handlePress('+')} />
        </View>
        <View style={styles.row}>
          <Button label="C" onPress={clearInput} />
          <Button label="^" onPress={() => handlePress('**')} />
          <Button label="√" onPress={() => handleScientific('Math.sqrt')} />
        </View>
      </ScrollView>
    </View>
  );
}

type ButtonProps = {
  label: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  result: {
    fontSize: 48,
    textAlign: 'right',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    fontSize: 24,
    textAlign: 'right',
    marginBottom: 20,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#007BFF',
    margin: 5,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
