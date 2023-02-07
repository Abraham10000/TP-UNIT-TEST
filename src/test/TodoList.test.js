import React from 'react';
import { render, fireEvent, findByText } from '@testing-library/react';
import TodoList from '../Todo';

describe('TodoList', () => {
  test('adds todo', async () => {
    const { getByPlaceholderText, queryByText } = render(<TodoList />);
    const input = getByPlaceholderText('Add a todo');
    const form = input.closest('form');
    fireEvent.change(input, { target: { value: 'Learn Jest' } });
    fireEvent.submit(form);
    const todo = await findByText('Learn Jest');
    expect(todo).toBeInTheDocument();
  });

});
