import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {useAuth}  from "./auth";
// import Image from '../images/home-banner3.jpg';
import "./Login.css";

 export function Login() {
  const [user, setUser] = useState("");
  const [errorUsername, setErrorUsername] = useState(null);
  const [password,setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);

 
  
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    let cusername,cpassword;
    //user name validation
    const userRegex = /^[a-zA-Z0-9]{5,}$/;
    if (user == "null") {
      setErrorUsername('Username is Required!!');
    } else if (!userRegex.test(user)) {
      setErrorUsername('Please Enter 6 or more Chars !!!');
    } else {
      setErrorUsername("");
      cusername = true;
    }
    //user password validation
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (password == 'null') {
      setErrorPassword('Password is Required!!');
    } else if (!passRegex.test(password)) {
      setErrorPassword('Please Enter 6 or more Chars !!!');
    } else {
      setErrorPassword("");
      cpassword = true;
    }
    if(cusername && cpassword)
    { 
    auth.login(user);
    navigate(redirectPath, { replace: true });
  }
  };
  return (
    <div className="loginstyle">
      <div className="loginborder">
     <h4>Sign in</h4>
        
        <input className="useinput" placeholder="Username" type="text" name="user" value={user} onChange={(e) => setUser(e.target.value)}></input>
        {errorUsername && (<p style={{color:'red'}}>{errorUsername}</p>)}
  
     <br/><br/>
        <input className="pass" placeholder="Password" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        {errorPassword && (<p style={{color:'red'}}>{errorPassword}</p>)}
    <br/><br/>
      <div>
      <button className="buttonstyle" onClick={handleLogin}>Login</button>
      </div>
      </div>
    </div>
  );
}
export default Login

