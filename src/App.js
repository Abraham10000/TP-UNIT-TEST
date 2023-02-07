import logo from './logo.svg';
import './App.css';
import { React } from 'react'
import TodoList from './Todo';
import Counter from './CounterFunctionnal';
import CounterClass from './class';

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;