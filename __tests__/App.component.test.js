import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';
import React from 'react';

describe('App - Component Test', () => {
  it('should render and display count correctly', () => {
    const { getByTestId, getByText } = render(<App />);
    
    // Ensure count text is displayed correctly
    expect(getByText('Count: 0')).toBeTruthy(); // Using getByText instead of getByTestId
    
    // Simulate pressing the increment button
    fireEvent.press(getByText('Increment'));
    
    // Ensure count is updated
    expect(getByText('Count: 1')).toBeTruthy(); // Same here, check for the updated text
  });
});
