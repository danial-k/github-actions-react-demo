import { render, screen } from '@testing-library/react';
import Footer from './components/Footer';

test('renders learn react link', () => {
  render(<Footer />);
  const text = screen.getByText(/Hello!/i);
  expect(text).toBeInTheDocument();
});
