import React, { useState } from 'react';
import './Todo.css'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  function moveToDone(index) {
    const todo = todos[index];
    setDone([...done, todo]);
    removeTodo(index);
  }

  return (
    <div className='principal'>
      <div className='head'>
      <form className='inpput'
        onSubmit={e => {
          e.preventDefault();
          addTodo(e.target.todo.value);
          e.target.todo.value = '';
        }}
      >
        <input type="text" name="todo" placeholder="Add a todo" />
      </form>
      <h1 className='todoHeader'>Todo</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <input type="checkbox" checked={isChecked} onChange={() => moveToDone(index)}/>
          </li>
        ))}
      </ul>
      </div>
      <div className='done'>
      <h1 className='doneHeader'>Done</h1>
      <ul>
        {done.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TodoList;