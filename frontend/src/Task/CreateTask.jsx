import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ShowTask from './ShowTask'

const CreateTask = () => {
    const [taskName, setTaskName] = useState("")
    const [taskType, setTaskType] = useState("")
    const [updateUI, setUpdateUI] = useState(false)
    const [tasks, setTask] = useState([])
    const[updateMode,setUpdateMode] = useState(false)
    const[updateId,setUpdateId] = useState('')

    useEffect(() => {
        fetch("http://localhost:5000/api/users/getTask", {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data + "hoise")
                setTask(data)
            }
            )
    }, [updateUI])


    const createTask = () => {
        axios.post('http://localhost:5000/api/users/createTask', {
            taskName: taskName,
            taskType: taskType,
        }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
            }
        }).then((res) => {
            console.log(res)
            setUpdateUI((updateUI) => (!updateUI))
            setTaskName("")
            setTaskType("")
        })
            .catch((error) => {
                console.log(error);
            });
    }

    const deleteTask =(id) => {
        axios.delete(`http://localhost:5000/api/users/deleteTask/${id}`,
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
            }
        })
        .then((res) => {
            console.log(res)
            setUpdateUI((updateUI) => (!updateUI))
        })
    }
 
    const updateTask=()=> {
        axios.put(`http://localhost:5000/api/users/updateTask/${updateId}`,{
            taskName:taskName,
            taskType:taskType,
        },{
            headers: {
                authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
            }
        }) . then((res) => {
            console.log(res)
            setUpdateId('')
            setTaskName('')
            setTaskType('')
            setUpdateMode(false)
            setUpdateUI((updateUI) => (!updateUI))
        })

    }
    const update =(id,taskName,taskType) =>{
        setTaskName(taskName)
        setTaskType(taskType)
        setUpdateMode(true)
        setUpdateId(id)
    }
    return (
        <div className='flex gap-10 mt-20 justify-center'>
            
            <div className='flex flex-col  gap-5 border-2 border-sky-600 p-10 w-96'>
                <h1 className="text-2xl font-bold flex items-center">Create Task</h1>
                <input className='border-2 border-sky-500' type="text" placeholder="Enter task name" value={taskName} onChange={(event) => setTaskName(event.target.value)} />
                <input className='border-2 border-sky-500' type="text" placeholder="Enter task type" value={taskType} onChange={(event) => setTaskType(event.target.value)} />
                <button className='border-2 border-sky-500 bg-sky-500 ' type="submit" onClick={updateMode? updateTask:createTask}>{updateMode?"Update":"Add"}</button>
            </div>
            <div>
            <ShowTask tasks={tasks} deleteTask={deleteTask} update={update}/>
            </div>
        </div>
    )
}

export default CreateTask