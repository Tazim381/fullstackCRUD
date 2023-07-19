import axios from 'axios';
import React from 'react'


const LoginPage = () => {

  const login=(event) => {
    event.preventDefault();
    const form=event.target;
    try{
    axios.post('http://localhost:5000/api/users/login', {
      email:form.email.value,
      password:form.password.value,
    })
    .then(result=>{
      console.log(result.data)
    })
  } catch(error) {
    console.log(error)
  }

  }

  return (
    <div className='flex flex-col gap-5 items-center mt-10 ml-96 border-2 border-sky-500 w-96 justify-center p-10'>
         Login Form
         <form onSubmit={login}>
         <input name='email' className='border-2 border-sky-500'type="email" placeholder='Enter Email' />
        <input name='password' className='border-2 border-sky-500'type="text"  placeholder='Enter password'/>

        <button type="submit" className="bg-sky-500 px-3 py-2" >Submit</button>
         </form>
    </div>
  )
}

export default LoginPage






