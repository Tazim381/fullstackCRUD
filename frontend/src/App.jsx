import React from 'react'
import HomePage from './HomePage/HomePage'
import NavBar from './NavBar/NavBar'
import { Routes, Route } from "react-router-dom"
import LoginPage from './Login/LoginPage'
import Register from './Register/Register'
import Profile from './profile/profile'
import CreateTask from './Task/CreateTask.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="addProduct" element={<NavBar />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="users/profile" element={<Profile/>} />
        <Route path="/createTask" element={<CreateTask/>} />
      </Routes>
    </div>
  )
}

export default App