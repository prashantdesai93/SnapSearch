import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../components/Title';

test('renders title', () => {
  render(<Title />);
  const title = screen.getByText(/snapsearch/i);
  expect(title).toBeInTheDocument();
});
