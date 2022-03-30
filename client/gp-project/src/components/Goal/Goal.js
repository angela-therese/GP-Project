import React from "react";
import { Link, useParams } from "react-router-dom";
import {GardenPrint} from "../Garden/Garden"
import GoalForm from "./GoalForm";
import NavBar from '../Nav/Nav'
import './Goal.css'
import Flower from '../../images/flower.png'








const Goal = ({ goal }) => {
  
    let studentId = goal.studentId


    
    return (
      <>
     
        <NavBar />
        <div className="goal-main-container">
        <h1>Goal Details</h1>
        <Link to={`/student/${studentId}`}>Back to student goal list</Link>
        <div className="details-container">
            <section className="section-1">
                <h2>{goal.title}</h2>
                <p>Goal garden</p>
                
            </section>
        </div>
        </div>
       
        
        
     </>
    );
  };
  
  export default Goal;