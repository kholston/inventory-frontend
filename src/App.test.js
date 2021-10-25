import { render, screen } from '@testing-library/react';
import App from './App';

test('renders basic div', () => {
  render(<App />);
  const divElement = screen.getByText(/inventory frontend/i);
  expect(divElement).toBeInTheDocument();
});
