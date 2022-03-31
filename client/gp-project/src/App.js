import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./GrowPath.css";
import ApplicationViews from "./ApplicationViews"
import Login from "./components/Auth/Login"
import {UserAuthProvider} from "./providers/AuthProvider"
import {UserProvider} from "./providers/UserProfileProvider"
import {CourseProvider} from "./providers/CourseProvider"
import { StudentProvider } from "./providers/StudentProvider";
import { GoalProvider } from "./providers/GoalProvider";
import { GoalCategoryProvider} from './providers/GoalCategoryProvider';


function App() {
  return (
    <Router>
      <UserAuthProvider>
        <UserProvider>
          <CourseProvider>
            <StudentProvider>
              <GoalProvider>
                <GoalCategoryProvider>
                <ApplicationViews/>
                </GoalCategoryProvider>
              </GoalProvider>
          </StudentProvider>
          </CourseProvider>
          </UserProvider>
      </UserAuthProvider>
    </Router>    
  
  );
}

export default App;

