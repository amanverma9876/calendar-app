
import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

test('renders calendar with days', () => {
  render(<Calendar events={[]} />);
  const dayElement = screen.getByText(/Day 1/i);
  expect(dayElement).toBeInTheDocument();
});
