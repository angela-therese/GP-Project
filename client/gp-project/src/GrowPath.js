import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./GrowPath.css";
import ApplicationViews from "./ApplicationViews"
import Login from "./components/Auth/Login"
import {UserAuthProvider} from "./providers/AuthProvider"
import {UserProvider} from "./providers/UserProfileProvider"



function App() {
  return (
    <Router>
      <UserAuthProvider>
        <UserProvider>
          <ApplicationViews/>
          </UserProvider>
      </UserAuthProvider>
    </Router>    
  
  );
}

export default App;


{/* <>
<div className="auth-container">
  <section className=' auth-section auth-section-logo'>
    <img src={logo} className="App-logo" alt="logo" />
  </section>

  <section className='auth-section auth-section-form'>
    <Form>
      <Form.Group>
      <h2>Registered? Log in here.</h2>
        <Form.Control className="auth-input" type="email" placeholder="email" />
        <Form.Control className="auth-input" type="password" placeholder="password" />
        <Button variant="success">Submit</Button>
      </Form.Group>
      <br/>
      <h6>Need an account? Sign up here.</h6>
    </Form>
  </section>
</div>
</> */}