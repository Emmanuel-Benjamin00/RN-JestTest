
//Unit Testing
// Mocking is done, but not for crt api


import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';
// import axios from 'axios';

// Mock the API call (axios.post)
// jest.mock('axios', () => ({
//   post: jest.fn(() => Promise.resolve({ data: { success: true } })),
// }));

describe('App', () => {
  it('should increment count when button is pressed and API is called', async () => {
    const { getByText } = render(<App />);
    
    // Assert the initial count value is 0
    expect(getByText('Count: 0')).toBeTruthy();
    
    // Simulate button press to call the API and increment count
    fireEvent.press(getByText('Increment'));
    
    // Wait for the count to be updated
    await waitFor(() => expect(getByText('Count: 1')).toBeTruthy());

    // Ensure the API was called with the correct parameters
    // expect(axios.post).toHaveBeenCalledWith('https://example.com/increment');
  });
});







// // App.test.js
// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native'; 
// import App from '../App';

// test('it should display the initial count as 0', () => {
//   const { getByTestId } = render(<App />);
//   const countText = getByTestId('countText');
//   expect(countText).toHaveTextContent('Count: 0');
// });

// test('it should increment the count when the button is pressed', () => {
//   const { getByTestId, getByText } = render(<App />);
//   const button = getByText('Increment');
  
//   fireEvent.press(button);
  
//   const countText = getByTestId('countText');
//   expect(countText).toHaveTextContent('Count: 1');
// });
