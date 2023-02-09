import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


function Tasks(){

    const {tasks} = useContext(TaskContext)

    // Validamos que halla datos en el estado
    if( tasks.length === 0 ) { return <h1  className='text-4xl font-bold text-white mx-auto text-center'>No hay tareas</h1> }
    
    return (
        <div className='grid grid-cols-4 gap-3'>
            {
                tasks.map((task) => (
                    <TaskCard task={task}  />
                ))
            }    
        </div>
    )
}

export default Tasks