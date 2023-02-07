import React from 'react';
import { render, fireEvent, findByText } from '@testing-library/react';
import TodoList from '../Todo';

describe('add the to do in the input', () => {
  test('adds todo on submit with enter', () => {
   const mockSubmit = jest.fn();
    render(<form className='inpput' onSubmit={mockSubmit}/>)
    const submit = document.querySelector("form")
    fireEvent.submit(submit)
    expect(mockSubmit.mock.calls.length).toBe(1)
  });
});
