import React, { useContext, useEffect, useState } from "react";
// import {Form, Button} from 'react-bootstrap'
import { AuthContext } from "../../providers/AuthProvider";
import logo from '../../../src/images/logo-circle-text.png';
import './Auth.css'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const submitLoginForm = (e) => {
    e.preventDefault();
    login({ email, password });
  };



  return (
 <>
<div className="auth-container">
  <section className=' auth-section auth-section-logo'>
    <img src={logo}  width="50%"className="App-logo" alt="logo" />
  </section>

  <section className='auth-section auth-section-form'>
    <form>
      
      <h2>Registered? Log in here.</h2>
        <input className="auth-input" type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input className="auth-input" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
      <button className="submit-button" onClick={submitLoginForm}>Log in</button>
      <br/>
      <h6>Need an account? Sign up here.</h6>
    </form>
  </section>
</div>
</> 
  );
};

export default Login;