import { render } from '@testing-library/react-native';
import App from '../App';
import React from 'react';

it('renders correctly', () => {
  const { toJSON } = render(<App />);
  expect(toJSON()).toMatchSnapshot();
});
