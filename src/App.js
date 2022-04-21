import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import Form from './components/Form';
import {todos as t} from './data'
import Todos from './components/Todos'
import { useEffect, useState } from 'react';
function App() {
  const [todos, setTodos] = useState([])
  const addTodo=(content)=>{
    
  }

  useEffect(()=>{
    fetch('http://localhost:5000/api/v1/todos')
    .then((res)=> res.json())
    .then((todos)=> setTodos(todos))
    .catch((err) => alert(err))
  })
  
  return (
    <div className="App">
      <AppBar/>
      <Form onAddTodo={addTodo} />
      <Todos todos={todos} />   
    </div>
  );
}

export default App;
