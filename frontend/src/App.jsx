import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
const  App = () => {
  const[input,setInput] = useState("")
  const[tasks,setTask] = useState([])
  const[updateUI,setUpdateUI] = useState(false)
  const[updateMode,setUpdateMode] = useState(false)
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/getTask")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setTask(data)
    }
      )
  },[input,updateUI])


  const addTask =() =>{
    axios.post('http://localhost:5000/setTask', {
      task: input,
    })
    .then((response)=> {
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
      setUpdateUI((updateUI) => !updateUI)
    })
  }

  const updateTask =()=>{
    axios.put(`http://localhost:5000/updateTask/${updateId}`, {
      task:input,
    }).then((res) => {
      console.log(res)
      setUpdateUI((updateUI) => !updateUI)
      setUpdateId(null);
      setUpdateMode(false)
      setInput("")
    })
  }
  
  const update =(id,task) =>{
    setInput(task)
    setUpdateMode(true)
    setUpdateId(id)
  }

  return (
   <div className='flex flex-col justify-center items-center'>
    <h1 className='text-blue-500'>Full Stack Crud</h1>
    <div className='flex gap-5'>
    <input className='border-2 border-sky-500'type="text" value={input} onChange={(e) => {setInput(e.target.value) }}/>
    <button type="submit" className='border-2 border-sky-500 p-1' onClick={updateMode ? updateTask : addTask}>{updateMode ? "Update" : "ADD"}</button>
    </div>
    <div>
    {
    tasks.map((task,index) =>(
      <li>{task.task}
      <button className="border-2 border-green-500 ml-8 mt-5" onClick={()=>update(task._id,task.task)}>Update</button>
      <button className="border-2 border-red-500 ml-8 mt-5" onClick={()=>deleteTask(task._id)}>Delete</button>
      </li> 
    ))
    }
    </div>
   </div>


  )
}

export default App