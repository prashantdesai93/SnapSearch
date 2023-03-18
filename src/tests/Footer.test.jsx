import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer', () => {
  render(<Footer />);
  const footerText = screen.getByText(/ 2023 SnapSearch/i);
  expect(footerText).toBeInTheDocument();
});
