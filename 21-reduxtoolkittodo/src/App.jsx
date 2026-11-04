import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'
function App() {
  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="max-w-2xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Learn about Redux Toolkit
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App