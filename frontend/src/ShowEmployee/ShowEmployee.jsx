import React from 'react'

const ShowEmployee = ({ employees, update, deleteTask }) => {

    const updateProduct = (id, firstName, lastName, task) => {
        update(id,firstName,lastName, task)
    }
    const deleteProduct = (id) => {
        deleteTask(id)
    }

    return (
        <div >
            <table className='mt-10 '>
                <thead className='bg-gray-300 h-11'>
                    <tr>
                        <th>First Name</th>
                        <th className='pl-10'>Last Name</th>
                        <th className='pl-10'>Task</th>
                        <th className='pl-10'>Update</th>
                        <th className='pl-10'>Delete</th>
                    </tr>
                </thead>
                <tbody >
                {
                employees.map((employee, index) => (
                    <tr>
                        <td className='pl-10'>{employee.firstName}</td>
                        <td className='pl-10'>{employee.lastName}</td>
                        <td className='pl-10'>{employee.task}</td>
                       <td  className='pl-10'> <button className="border-2 border-[#61d7a2] ml-8 mt-5" onClick={() => updateProduct(employee._id,employee.firstName, employee.lastName, employee.task)}>Update</button>
                        </td> 
                        <td  className='pl-8'>
                        <button className="border-2 border-red-500 ml-8 mt-5" onClick={() => deleteProduct(employee._id)}>Delete</button>
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