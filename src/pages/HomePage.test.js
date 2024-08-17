
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './HomePage';
import { EventProvider } from '../context/EventContext';

test('filters events by category', () => {
  render(
    <EventProvider>
      <HomePage />
    </EventProvider>
  );
  const filterSelect = screen.getByLabelText(/Filter Events/i);
  fireEvent.change(filterSelect, { target: { value: 'Work' } });
  expect(screen.getByText(/Filtered events/i)).toBeInTheDocument();
});
