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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-green-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register </h2>
        <div className="mt-8 space-y-10">
          <div className='flex flex-col gap-2'>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-900">
              First Name
            </label>
            <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" type="text" placeholder='Ener First Name' value={firstName} onChange={(e) => {setFirstName(e.target.value) }}  required/>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-900">
              LastName
            </label>
           <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" type="text" placeholder='Enter last Name' value={lastName} onChange={(e) => {setLastName(e.target.value) }} required />
           <label htmlFor="email-address" className="block text-sm font-medium text-gray-900">
              Email
            </label>
           <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" type="text"  placeholder='Enter email' value={email} onChange={(e) => {setEmail(e.target.value) }} required />
           <label htmlFor="email-address" className="block text-sm font-medium text-gray-900">
              Password
            </label>
        <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" type="text"  placeholder='Ener password' value={password} onChange={(e) => {setPassword(e.target.value) }} required />
          </div>
          
          <div>
          <Link to="/login">
          <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={createUser}
            >
              Register
            </button>
          </Link>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Register