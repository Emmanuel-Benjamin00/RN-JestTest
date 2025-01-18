// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'; 
import App from '../App';

test('it should display the initial count as 0', () => {
  const { getByTestId } = render(<App />);
  const countText = getByTestId('countText');
  expect(countText).toHaveTextContent('Count: 0');
});

test('it should increment the count when the button is pressed', () => {
  const { getByTestId, getByText } = render(<App />);
  const button = getByText('Increment');
  
  fireEvent.press(button);
  
  const countText = getByTestId('countText');
  expect(countText).toHaveTextContent('Count: 1');
});
