import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <h1>Learn redux toolkit</h1>
      <AddTodo />
      <TodoList />
    </>
  )
}

export default App
