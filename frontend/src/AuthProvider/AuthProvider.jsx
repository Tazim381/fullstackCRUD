import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const AutContext=createContext(null);
const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const[isLogin, setLogin] = useState(false)
    const logOut =()=> {
        localStorage.removeItem('set-token-for-user');
        alert("Logout Successfully")
        setLogin(false)
      }
      const logIn=(email,password)=>{
        
        try {
            const response =  axios.post('http://localhost:5000/api/users/login', {
              email:email,
              password: password,
            });
      
            localStorage.setItem('set-token-for-user', response.data);
            setLogin(true);
            alert("login successfull")
            // form.reset();
            navigate("/");
            // Redirect to profile page after successful login
          } catch (error) {
            console.log(error);
            alert("user name or password wrong")
          }
      }

    const authInfon={
     logOut,
     isLogin,
     logIn,
    }
  return (
 <AutContext.Provider value={authInfon}>
    {
        children
    }
 </AutContext.Provider>
  )
}

export default AuthProvider