import React from 'react'

const ShowEmployee = ({ tasks, update, deleteTask }) => {

    const updateProduct = (id, task, lastName) => {
        update(id, task, lastName)
    }
    const deleteProduct = (id) => {
        deleteTask(id)
    }

    return (
        <div >
            <table className='mt-10 '>
                <thead className='bg-gray-300 '>
                    <tr>
                        <th>First Name</th>
                        <th className='pl-10'>Last Name</th>
                        <th className='pl-8'>Update</th>
                        <th className='pl-8'>Delete</th>
                    </tr>
                </thead>
                <tbody >
                {
                tasks.map((task, index) => (
                    <tr>
                        <td>{task.task}</td>
                        <td className='pl-10'>{task.lastName}</td>
                       <td  className='pl-8'> <button className="border-2 border-green-500 ml-8 mt-5" onClick={() => updateProduct(task._id, task.task, task.lastName)}>Update</button>
                        </td> 
                        <td  className='pl-8'>
                        <button className="border-2 border-red-500 ml-8 mt-5" onClick={() => deleteProduct(task._id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }

                </tbody>

            </table>
           
        </div>
    )
}

export default ShowEmployee