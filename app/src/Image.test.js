import { render, screen } from '@testing-library/react';
import Image from './Image';

test('renders learn react link', () => {
  render(<Image />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
