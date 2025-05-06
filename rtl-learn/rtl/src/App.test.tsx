import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Todo List', () => {
  test('test', () => {
    render(<App />);
    expect(screen.getByText(123)).toBeInTheDocument();
  });
});
