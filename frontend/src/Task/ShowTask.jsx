import React from 'react'

const ShowTask = ({tasks,deleteTask,update}) => {
  
    const deleteTsk =(id) =>{
       deleteTask(id)
    }
const updateTask =(id,taskName,taskType) =>{
     update(id,taskName,taskType)
}
  
  return (
    <div>
         <table className='mt-10 '>
                <thead className='bg-gray-300 h-11'>
                    <tr>
                        <th>Task Name</th>
                        <th className='pl-10'>Task Type</th>
                        <th className='pl-10'>Edit Task</th>
                        <th className='pl-10'>Delete Task</th>    
                    </tr>
                </thead>
                <tbody >
                {
                tasks.map((task, index) => (
                    <tr>
                        <td className='pl-10'>{task.taskName}</td>
                        <td className='pl-10'>{task.taskType}</td>  
                        <td className='pl-10'>
                        <button className=' border-2 border-sky-500 ml-8 mt-5 px-2' onClick={()=> updateTask(task._id,task.taskName,task.taskType)}>Edit </button>  
                        </td>
                        <td className='pl-10'>
                        <button className="border-2 border-red-500 ml-8 mt-5 px-2" onClick={()=>deleteTsk(task._id)}>Delete</button>  
                        </td>
                    </tr>
                ))
            }

                </tbody>

            </table>
    </div>
  )
}

export default ShowTask