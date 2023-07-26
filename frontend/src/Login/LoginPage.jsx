import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();
  const login = async (event) => {
    event.preventDefault();
    const form = event.target;
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email: form.email.value,
        password: form.password.value,
      });

      localStorage.setItem('set-token-for-user', response.data);
      alert("login successfull")
      form.reset();
      navigate("/users/profile");
      // Redirect to profile page after successful login
    } catch (error) {
      console.log(error);
      alert("user name or password wrong")
    }
  };

  return (
    <div className='flex flex-col gap-5 items-center mt-10 ml-96 border-2 border-sky-500 w-96 justify-center p-10'>
      Login Form
      <form onSubmit={login}>
        <input name='email' className='border-2 border-sky-500' type="email" placeholder='Enter Email' required />
        <input name='password' className='border-2 border-sky-500' type="password" placeholder='Enter password' required />

        <button type="submit" className="bg-sky-500 px-3 py-2">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
