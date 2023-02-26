import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('renders learn react link', () => {
  render(<Header />);
  const text = screen.getByText(/Hello!/i);
  expect(text).toBeInTheDocument();
});
