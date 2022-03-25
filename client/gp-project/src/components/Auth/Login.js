import React, { useContext, useEffect, useState } from "react";
import {Form, Button} from 'react-bootstrap'
import { AuthContext } from "../../providers/AuthProvider";
import logo from '../../../src/images/GrowPath.png';

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
    <img src={logo} className="App-logo" alt="logo" />
  </section>

  <section className='auth-section auth-section-form'>
    <Form>
      <Form.Group>
      <h2>Registered? Log in here.</h2>
        <input className="auth-input" type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input className="auth-input" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="success" onClick={submitLoginForm}>Submit</Button>
      <br/>
      <h6>Need an account? Sign up here.</h6>
    </Form>
  </section>
</div>
</> 
  );
};

export default Login;