import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageGrid from '../components/ImageGrid';

test('renders image grid with images', () => {
  const images = [
    {
      id: '1',
      title: 'Test Image 1',
      thumbnailUrl: 'https://farmundefined.staticflickr.com/undefined/1_undefined_q.jpg',
    },
    {
      id: '2',
      title: 'Test Image 2',
      thumbnailUrl: 'https://farmundefined.staticflickr.com/undefined/2_undefined_q.jpg',
    },
  ];

  render(<ImageGrid images={images} />);

  images.forEach((image) => {
    const imgElement = screen.getByAltText(image.title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', image.thumbnailUrl);
  });
});
