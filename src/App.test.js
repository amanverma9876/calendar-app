import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Calendar heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Calendar/i);
  expect(linkElement).toBeInTheDocument();
});
