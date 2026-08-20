import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio sections on the single-page layout', () => {
  render(<App />);
  expect(screen.getAllByRole('heading', { name: /Gayangi Devindi/i })[0]).toBeInTheDocument();
  expect(screen.getByText(/Projects & Works/i)).toBeInTheDocument();
  expect(screen.getByText(/Open to Software Engineering Internship Opportunities/i)).toBeInTheDocument();
});
