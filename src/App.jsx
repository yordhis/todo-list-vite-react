import { useState, useEffect } from 'react'
import Tasks  from './components/Tasks'
import TasksForm from './components/TasksForm'

const App = () => {
  return (
  <main 
  className='bg-zinc-800 h-screen'>
    <div className='container mx-auto'>
      < TasksForm  />
      < Tasks />
    </div>
  </main>)
}

export default App
