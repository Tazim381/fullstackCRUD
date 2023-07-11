import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
const  App = () => {
  const[input,setInput] = useState("")
  const[tasks,setTask] = useState([])
  const[update,setUpdate] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/getTask")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setTask(data)
    }
      )
  },[input,update])

  const addTask =() =>{
    axios.post('http://localhost:5000/setTask', {
      task: input,
    })
    .then( (response)=> {
      console.log(response);
      setInput('')
    })
    .catch((error) =>{
      console.log(error);
    });
  }

  const deleteTask =(id)=>{
    axios.delete(`http://localhost:5000/deleteTask/${id}`)
    .then((res) => {
      console.log(res)
      setUpdate((previous) => !previous)
    })
  }

  return (
   <div className='flex flex-col justify-center items-center'>
    <h1 className='text-blue-500'>Full Stack Crud</h1>
    <div className='flex gap-5'>
    <input className='border-2 border-sky-500'type="text" onChange={(e) => {setInput(e.target.value) }}/>
    <button type="submit" className='border-2 border-sky-500 p-1' onClick={addTask}>Add task</button>
    </div>
    <div>
    {
    tasks.map((task,index) =>(
      <li>{task.task}
      <button className="border-2 border-red-500 ml-8 mt-5" onClick={()=>deleteTask(task._id)}>Delete</button>
      
      </li>
      
    ))
    }
    </div>
   </div>


  )
}

export default App