// App.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <View>
      <Text testID="countText">Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};

export default App;
