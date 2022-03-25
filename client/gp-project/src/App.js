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

