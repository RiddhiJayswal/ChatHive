import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithPopup  } from 'firebase/auth';
import { auth } from '../firebase';
import { GoogleAuthProvider } from 'firebase/auth';


function Login(params) {
const setIsLoggedIn=params.setIsLoggedIn;
const navigate = useNavigate();
  const handleLogIn =async()=>{

    const result = await signInWithPopup(auth,new GoogleAuthProvider);
    console.log(result);
    setIsLoggedIn(true);
    // alert("logIn");
    navigate("/");
    
  }
  
  return (
    <button onClick={handleLogIn}>Login</button>
  )
}


export default Login