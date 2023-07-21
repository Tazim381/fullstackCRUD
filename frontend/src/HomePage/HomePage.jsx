import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import ShowEmployee from '../ShowEmployee/ShowEmployee'
import NavBar from '../NavBar/NavBar'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"

const  HomePage = () => {
  const[employees,setEmployee] = useState([])
  const[updateUI,setUpdateUI] = useState(false)
  const[updateMode,setUpdateMode] = useState(false)
  const [updateId, setUpdateId] = useState(null)
  const[firstName,setFirstName] = useState("")
  const[lastName,setLastName] = useState("")
  const[task,setTask] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/getTask")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setEmployee(data)
    }
      )
  },[updateUI])


  const addTask =() =>{
    axios.post('http://localhost:5000/setTask', {
      firstName:firstName,
      lastName:lastName,
      task: task,
    })
    .then((response)=> {
      setUpdateUI((updateUI) => !updateUI)
      console.log(response);
      setFirstName('')
      setLastName('')
      setTask('')
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
      firstName:firstName,
      lastName:lastName,
      task:task,
    }).then((res) => {
      console.log(res)
      setUpdateUI((updateUI) => !updateUI)
      setUpdateId(null);
      setUpdateMode(false)
      setFirstName("")
      setLastName("")
      setTask("")
    })
  }
  
  const update =(id,firstName,lastName,task) =>{
    setFirstName(firstName)
    setLastName(lastName)
    setTask(task)
    setUpdateMode(true)
    setUpdateId(id)
  }

  const logOut =()=> {
    localStorage.removeItem('set-token-for-user');
    alert("Logout Successfully")
  }

  return (
   <div>
    <navbar className="flex gap-10">
       <Link to="addProduct">Add Product</Link>
       <Link to="login">Login</Link>
       <Link to="register">Sign Up </Link>
       <Link to="/users/profile">See Profile</Link>
       <button onClick={logOut}>LogOut</button>
    </navbar>
    
    <div className='flex gap-10 mt-20 justify-center '>
    <div className='flex flex-col border-2 border-sky-600 p-10'>
    <h1 className='text-2xl font-bold'>Enter Employee Details</h1>
    <label htmlFor="">Enter First Name</label>
    <input className='border-2 border-sky-500'type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value) }} placeholder='Enter first name'/>
    <br />
    <label htmlFor="">Enter Last Name</label>
    <input className='border-2 border-sky-500'type="text" value={lastName} onChange={(e) => {setLastName(e.target.value) }} placeholder='Enter last name'/>
    <br />
    <label htmlFor="">Enter Task</label>
    <input className='border-2 border-sky-500'type="text" value={task} onChange={(e) => {setTask(e.target.value) }} placeholder='Enter task'/>
    <br />
    <button type="submit" className='border-2 border-sky-500 p-1 bg-sky-500' onClick={updateMode ? updateTask : addTask}>{updateMode ? "Update" : "ADD"}</button>
    </div>
    <div>
      <ShowEmployee employees={employees} update={update} deleteTask={deleteTask}/>

    </div>
   </div>
   </div>


  )
}

export default HomePage