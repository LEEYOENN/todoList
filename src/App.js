import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';  // Assuming you have this file for styles
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className='App'>
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;