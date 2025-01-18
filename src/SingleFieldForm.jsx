import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SingleFieldForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState(null);

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Form</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter somethin"
        value={inputValue}
        onChangeText={setInputValue}
      />
      
      <Button title="Submit" onPress={handleSubmit} />

      {submittedValue && (
        <Text style={styles.submittedText}>Submitted Value: {submittedValue}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
  submittedText: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default SingleFieldForm;
