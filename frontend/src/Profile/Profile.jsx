import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMail} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'


const Profile = () => {
    const [profile,setProfile] = useState({})
    useEffect(() => {
        fetch("http://localhost:5000/api/users/profile",{
            method:'GET',
            headers: {
                authorization:`Bearer ${localStorage.getItem(`set-token-for-user`)} `
            }
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setProfile(data)
        }
          )
      },[profile])
  return (
    <div className='flex m-40 gap-36'>
           <div>
            <h1 className='text-2xl font-bold'>User Details </h1>
            <p className='font-semibold flex gap-4 items-center'> <FaRegUser/> {profile.firstName} {profile.lastName}</p>
            <p className='flex gap-4 items-center'><AiOutlineMail/>{profile.email}</p>
            </div>
            <div>
            <Link to ='/createTask' className="bg-green-500 text-2xl px-3 py-2">Create Task</Link>
            </div>
        </div>
  )
}

export default Profile