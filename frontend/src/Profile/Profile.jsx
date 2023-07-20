import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'


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
    <div>
            <Link to ='/createTask'>Create Task</Link>
            <p>{profile.firstName}</p>
            <p>{profile.lastName}</p>
            <p>{profile.email}</p>
        </div>
  )
}

export default Profile