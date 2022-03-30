import React from "react";
import { Link, useParams } from "react-router-dom";
import {GardenPrint} from "../Garden/Garden"
import GoalForm from "./GoalForm";
import NavBar from '../Nav/Nav'
import './Goal.css'
import Flower from '../../images/flower.png'








const Goal = ({ goal }) => {
  
    let studentId = goal.studentId
    let count = goal.growthCount
    let {goalId} = useParams();
    
    const GardenPrint = () => {
      let flowerArray = []
      let i 
      for(i = 0; i < count; i++){
          flowerArray.push(i)
      }

      return (
        flowerArray.map((f)=>{
            return (
                <img alt="flower" src={Flower}/>
                
            )
        })
    )

    }

    return (
      <>
     
        <NavBar />
        <div className="goal-main-container">
        <h1>Goal Details</h1>
        <Link to={`/student/${studentId}`}>Back to student goal list</Link>
        <div className="details-container">
            <section className="section-1 goal-details-section">
            
                <h2>{goal.title}</h2>
                <section className="garden-section">
                 <GardenPrint />
                </section>
                <p>{goal.description}</p>
                <section> <Link className="goal-button" to={`/goal/edit/${goal.id}`}>UpdateGoal</Link></section>
            </section>
        </div>
        </div>
       
        
        
     </>
    );
  };
  
  export default Goal;