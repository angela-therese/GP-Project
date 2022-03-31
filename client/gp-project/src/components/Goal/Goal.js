import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GoalContext } from "../../providers/GoalProvider";
import { StudentContext } from "../../providers/StudentProvider";
import {GardenPrint} from "../Garden/Garden"
import NavBar from '../Nav/Nav'
import './Goal.css'
import Flower from '../../images/flower.png'








const Goal = ({ goal }) => {
  
    let studentId = goal.studentId
    let count = goal.growthCount
    const {goalId} = useParams();
    const { deleteGoal } = useContext(GoalContext);
    const { getById } = useContext(StudentContext);
    const navigate = useNavigate()

    debugger
    
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

    const handleClickDelete = () => {
        deleteGoal(goalId)
        .then(getById(studentId))
        .then(navigate(`/student/${studentId}`))
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
                <section className="button-section"> 
                    <Link className="goal-button" to={`/goal/edit/${goal.id}`}>Update Goal</Link></section>
                    <button className="delete-goal-button" onClick={handleClickDelete}>Delete Goal</button>
                </section>
        </div>
        </div>
       
        
        
     </>
    );
  };
  
  export default Goal;