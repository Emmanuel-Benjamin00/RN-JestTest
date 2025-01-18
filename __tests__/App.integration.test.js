import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';
import React from 'react';

describe('App - Integration Test', () => {
  it('should integrate state change with button press', () => {
    const { getByText } = render(<App />);
    
    // Initial state should show count as 0
    expect(getByText('Count: 0')).toBeTruthy();
    
    // Pressing the button should increment the count
    fireEvent.press(getByText('Increment'));
    
    // Final state should show count as 1
    expect(getByText('Count: 1')).toBeTruthy();
  });
});
