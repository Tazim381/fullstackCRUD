import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import ShowEmployee from './ShowEmployee/ShowEmployee'
const  App = () => {
  const[firstName,setFirstName] = useState("")
  const[tasks,setTask] = useState([])
  const[updateUI,setUpdateUI] = useState(false)
  const[updateMode,setUpdateMode] = useState(false)
  const [updateId, setUpdateId] = useState(null);
  const[lastName,setLastName] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/getTask")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setTask(data)
    }
      )
  },[firstName,updateUI])


  const addTask =() =>{
    axios.post('http://localhost:5000/setTask', {
      task: firstName,
      lastName:lastName,
    })
    .then((response)=> {
      console.log(response);
      setFirstName('')
      setLastName('')
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
      task:firstName,
      lastName:lastName,
    }).then((res) => {
      console.log(res)
      setUpdateUI((updateUI) => !updateUI)
      setUpdateId(null);
      setUpdateMode(false)
      setFirstName("")
      setLastName("")
    })
  }
  
  const update =(id,task,lastName) =>{
    setFirstName(task)
    setLastName(lastName)
    setUpdateMode(true)
    setUpdateId(id)
  }

  return (
   <div className='flex flex-col justify-center items-center'>
    <h1 className='text-blue-500'>Full Stack Crud</h1>
    <div className='flex gap-5'>
    <input className='border-2 border-sky-500'type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value) }} placeholder='Enter first name'/>
    <input className='border-2 border-sky-500'type="text" value={lastName} onChange={(e) => {setLastName(e.target.value) }} placeholder='Enter last name'/>
    <button type="submit" className='border-2 border-sky-500 p-1' onClick={updateMode ? updateTask : addTask}>{updateMode ? "Update" : "ADD"}</button>
    </div>
    <div>
   
    <ShowEmployee tasks={tasks} update={update} deleteTask={deleteTask}/>

    </div>
   </div>


  )
}

export default App