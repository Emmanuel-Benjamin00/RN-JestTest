import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';
import React from 'react';

describe('App - User Interaction', () => {
  it('should update the count when the increment button is pressed', () => {
    const { getByText } = render(<App />);
    
    // Initial text
    expect(getByText('Count: 0')).toBeTruthy();
    
    // Simulate user clicking the increment button
    fireEvent.press(getByText('Increment'));
    
    // Check if count text updated
    expect(getByText('Count: 1')).toBeTruthy();
  });
});
