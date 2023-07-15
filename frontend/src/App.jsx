import React from 'react'
import HomePage from './HomePage/HomePage'
import NavBar from './NavBar/NavBar'
import { Routes, Route } from "react-router-dom"
import LoginPage from './Login/LoginPage'
import Register from './Register/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="addProduct" element={<NavBar />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App