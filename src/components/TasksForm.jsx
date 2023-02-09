import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TasksForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const {createTask} = useContext(TaskContext)

    const handlerSubmit = (e) => {
        e.preventDefault()
        
        createTask({
            title,
            description
        })
        setDescription('')
        setTitle('')
    }


  return (
    <div className='max-w-md mx-auto '>
        <form onSubmit={ handlerSubmit } 
            className='bg-slate-700 p-10 mb-2'
            >
            <h1 className='text-3xl font-bold text-center mb-2'>Crear tarea</h1>
            <input type="text" placeholder='Ingrese su tarea'  
                className='bg-slate-500 p-4 mb-2 w-full rounded-md'
                onChange={ (e)=> setTitle(e.target.value) }
                value={title}
                autoFocus
            />
            <textarea name="description" 
                cols="10" rows="1"
                className='bg-slate-500 p-4 mb-2 w-full rounded-md'
                onChange={ (e)=> setDescription(e.target.value) }
                value={description}
            >
                
            </textarea>
            <button
            className='bg-green-500 p-3 w-full font-mono rounded-md'
            >Guardar</button>
        </form>
    </div>

  )
}

export default TasksForm
