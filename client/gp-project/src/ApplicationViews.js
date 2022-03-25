import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login"
import UserDetails from "./components/User/UserDetails"


const ApplicationViews = () => {
    return (
      <Routes>
          <Route path="/" element={<Login/>}>
          </Route>

          <Route exact path="/user/:id" element={<UserDetails/>}>
          </Route>
      </Routes>
        )
    }
debugger
    export default ApplicationViews