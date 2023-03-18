import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageModal from '../components/ImageModal';

test('renders image modal with selected image', () => {
  const image = {
    title: 'Test Image',
    imageUrl: 'https://farmundefined.staticflickr.com/undefined/undefined_undefined_b.jpg',
  };

  render(<ImageModal image={image} />);

  const imgElement = screen.getByAltText(image.title);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', image.imageUrl);
});
