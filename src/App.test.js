import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Flickr Photo Stream', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Flickr Photo Stream/i);
  expect(linkElement).toBeInTheDocument();
});
