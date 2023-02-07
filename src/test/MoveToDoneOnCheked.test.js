import React, { useState } from 'react';
import { render, fireEvent, findByText} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

test('move to done on cheked' , () => {
    const mock = jest.fn()
    render(<input type="checkbox" checked={false} onChange={() => mock}/>)
    const checked = document.querySelector('input')
    fireEvent.change(checked)
    expect(mock.call.length).toBe(1)
})