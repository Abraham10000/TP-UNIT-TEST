import { findAllByAltText, getAllByText, render, screen } from '@testing-library/react';
import App from '../App';

test('renders TodoList component', () => {
  const { getAllByText } = render(<App />);
  const linkElements = getAllByText('Todo');
  expect(linkElements.length).toBeGreaterThan(0);
});