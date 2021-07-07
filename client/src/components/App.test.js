import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

test('renders learn react link', () => {
  const { getByText } = render(<Contact />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});