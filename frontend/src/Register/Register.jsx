import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
const[firstName,setFirstName] = useState("")
const[lastName,setLastName] = useState("")
const[email,setEmail] = useState("")
const[password,setPassword] = useState("")
const [updateUI,setUpdateUI] = useState("")


 const createUser =() => {
    axios.post('http://localhost:5000/api/createUser', {
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    })
    .then((response)=> {
      setUpdateUI((updateUI) => !updateUI)
      console.log(response);
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')

    })
    .catch((error) =>{
      console.log(error);
    });

 }

  return (
    <div className='flex flex-col gap-5 items-center mt-10 ml-96 border-2 border-sky-500 w-96 justify-center p-10'>
        Register From
        <input className='border-2 border-sky-500'type="text" placeholder='Ener First Name' value={firstName} onChange={(e) => {setFirstName(e.target.value) }}  />
        <input className='border-2 border-sky-500'type="text" placeholder='Enter last Name' value={lastName} onChange={(e) => {setLastName(e.target.value) }} />
        <input className='border-2 border-sky-500'type="text"  placeholder='Ener email' value={email} onChange={(e) => {setEmail(e.target.value) }} />
        <input className='border-2 border-sky-500'type="text"  placeholder='Ener password' value={password} onChange={(e) => {setPassword(e.target.value) }}  />
        <Link to="/login">
        <button type="submit" className="bg-sky-500 px-3 py-2" onClick={createUser}>Submit</button>
        </Link>
    </div>
  )
}

export default Register