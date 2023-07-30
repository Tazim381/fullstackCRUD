import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


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
      navigate("/");
      // Redirect to profile page after successful login
    } catch (error) {
      console.log(error);
      alert("user name or password wrong")
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-green-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
        <form className="mt-8 space-y-6" onSubmit={login}>
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>

          <div className="text-sm font-medium text-gray-500 flex justify-between">
            <p>Not registered?</p> <Link to ="/register" className='font-bold text-1xl text-blue-600'>Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
