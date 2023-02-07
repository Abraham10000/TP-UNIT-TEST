import React from 'react';
import { shallow } from 'enzyme';
import { useState } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });

const TodoList = () => {
  const [todos, setTodos] = useState([]);
 const mock = jest.fn()
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <input type="checkbox" onChange={() => setTodos(prev => [...prev.slice(0, index), !todo.isChecked, ...prev.slice(index + 1)])} />
        </li>
      ))}
    </ul>
  );
};

describe('Todo list component', () => {
 const {getAllByRole} = render(<TodoList />)

  it('should render a list of todos', async () => {
    const list = await getAllByRole('list');
    expect(list.length).toBe(TodoList.call.length);
  });
});
