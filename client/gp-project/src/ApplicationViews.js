import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import UserDetails from "./components/User/UserDetails";
import StudentDetails from "./components/Student/StudentDetails";
import CourseDetails from "./components/Course/CourseDetails";


const ApplicationViews = () => {
    return (
      <Routes>
          <Route path="/" element={<Login/>}>
          </Route>

          <Route exact path="/user/:id" element={<UserDetails/>}>
          </Route>

          <Route exact path="/course/:id" element={<CourseDetails/>}>
          </Route>

          <Route exact path="/student/:id" element={<StudentDetails/>}>
          </Route>

        </Routes>
        )
    }

    export default ApplicationViews