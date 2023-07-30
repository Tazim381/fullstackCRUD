import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const NavBar = ({ isLogin, logOut }) => {
  const [profile, setProfile] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/users/profile", {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
      }
    })
      .then(response => response.json())
      .then(data => {
        setProfile(data)
      }
      )
  }, [profile, isLogin])

  const createTask=()=>{
    if(isLogin) {
      navigate('/createTask')
    } else {
      alert("Login First ")
    }
  }

  const seeProfile =()=>{
    if(isLogin) {
      navigate('/users/profile')
    } else {
      alert("Login First ")
    }
  }
  return (
    <navbar className="flex gap-10 h-16 items-center shadow-md justify-between">
      <div className="flex gap-10">
        <button  className="hover:bg-[#61d7a2] hover:text-white px-6 py-2 rounded-3xl ml-10" onClick={seeProfile}>See Profile</button>
        <button  className="hover:bg-[#61d7a2] hover:text-white px-6 py-2 rounded-3xl ml-10" onClick={createTask}>Create Task</button>
      </div>
      <div className="mr-10">
        {isLogin ? (
          <button className="bg-[#61d7a2] px-6 py-2 rounded-3xl" onClick={logOut}>{profile.lastName}</button>
        ) : (
          <Link className="bg-[#61d7a2] px-6 py-2 rounded-3xl hover:text-white" to="login">Login</Link>
        )}
      </div>
    </navbar>
  );
};

export default NavBar;
