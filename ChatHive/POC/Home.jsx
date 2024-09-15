import React from 'react';
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'
function Home(params) {
 const setIsLoggedIn = params.setIsLoggedIn;
 const navigate = useNavigate();
  const handleLogOut = async()=>{
    await signOut(auth);
    setIsLoggedIn(false);
    // alert("logIn");
    navigate("/login");
  }
  return (
    <>
    <div>Home</div>
    <button onClick={handleLogOut}>LogOut</button>
    </>
    
  )
}

export default Home