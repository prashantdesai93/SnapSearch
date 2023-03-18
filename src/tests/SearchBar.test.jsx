import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';

test('renders search bar', () => {
  const setSearchImageMock = jest.fn();
  render(<SearchBar setSearchImage={setSearchImageMock} />);
  const searchBar = screen.getByPlaceholderText(/search images.../i);
  expect(searchBar).toBeInTheDocument();
});
