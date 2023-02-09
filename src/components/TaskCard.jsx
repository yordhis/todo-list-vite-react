import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskCard = ({ task }) => {
  const {deleteTask} = useContext(TaskContext)

  return (
    <div key={ task.id }
      className='bg-gray-800 text-white p-4 rounded-xl'
    >
        <h1 className="text-xl font-bold capitalize"> { task.title } </h1>
        <p className="text-gray-500 text-sm">  { task.description } </p>
        <button 
        className="border-t-neutral-500 px-3 py-1 mt-2 bg-red-500
        rounded-xl hover:bg-red-300"
        onClick={ () => deleteTask(task.id) }  
        >
            Eliminar tarea
        </button>
    </div>
  )
}

export default TaskCard