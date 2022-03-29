import React from "react";
import {GardenPrint} from "../Garden/Garden"
import { Link, useParams} from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider"
import { useContext } from "react";
import NavBar from '../Nav/Nav'
import Student from "../Student/Student";





const Goal = ({ goal }) => {
  
    
    return (
      <>
     
        <NavBar />
        <h1>{goal.title}</h1>
     </>
    );
  };
  
  export default Goal;