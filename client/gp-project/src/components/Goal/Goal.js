import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GoalContext } from "../../providers/GoalProvider";
import { StudentContext } from "../../providers/StudentProvider";
import { FlowerContext } from "../../providers/FlowerProvider";
import {GardenGoalPrint} from "../Garden/GardenGoalPrint"
import NavBar from '../Nav/Nav'
import './Goal.css'
import WateringCan from '../../images/wateringCan.png'







const Goal = ({ goal }) => {
  
    let studentId = goal.studentId
    let count = goal.growthCount
    const {goalId} = useParams();
    const { deleteGoal } = useContext(GoalContext);
    const { getById } = useContext(StudentContext);
    const {flowers, getByGoalId, deleteFlower} = useContext(FlowerContext);
    const navigate = useNavigate()




    const handleClickDeleteGoal = () => {
        deleteGoal(goalId)
        .then(getById(studentId))
        .then(navigate(`/student/${studentId}`))
    }


    // const handleClickDeleteFlower= () => {
    //     deleteFlower(flowerId)
    //     .then(getById(studentId))
    //     .then(navigate(`/student/${studentId}`))
    // }
    
    useEffect(() => 
    {  getByGoalId(goalId);
    }, [])

    console.log(flowers)
    

    return (
      <>
     
        <NavBar />
        <div className="goal-main-container">
        
        <h1>{goal.title}</h1>
        <Link to={`/student/${studentId}`}>Back to student goal list</Link>


        <div className="landing-div">

        <div className ="section-1 garden-section">
            <h2>Garden</h2>
            <section className="garden-print-section">
            <GardenGoalPrint />
            </section>
        </div>

        <div className="section-2 goal-details-section">

            <section className="goal-heading">
            <h1>Description</h1>
            </section>
            <p>{goal.description}</p>
               
        </div>
   

        <div className ="section-3 actions-section">
            <h2>Goal Actions</h2>
            <section className="button-section"> 
            <Link className="flower-add-button" to={`/student/${studentId}/goal/${goal.id}/flower/add`}>Add a Flower</Link>
             
       <Link className="goal-update-button" to={`/goal/edit/${goal.id}`}>Edit Goal</Link>     <button className="delete-goal-button" onClick={handleClickDeleteGoal}>Delete Goal</button>
            </section>
        </div>
        

        </div>
        <div className ="section-4 notes-section">
           <h3>Flower Notes</h3>
            {flowers.map((f) => {
                return (
                <div className="notes-div">
                    <p>{f.note}</p>
                    <p>{f.dateAdded} &nbsp; &nbsp; 
                    <Link to={`/student/${studentId}/flower/edit/${f.id}`} className="goal-update-button">Edit Notes</Link>
                     &nbsp; &nbsp; 
                     <Link to={`/student/${studentId}/flower/delete/${f.id}`} className="delete-goal-button">Delete Notes</Link>
                     &nbsp; &nbsp;
                     
                     {/* <button className="delete-goal-button">Delete Flower</button> */}
                     </p>
                </div>  
                )
            })}
        </div>
           

        </div>
     </>
    );
  };
  
  export default Goal;


//   <a href={`/student/${studentId}/goal/${goal.id}/flower/add`}><img alt="watering-can" width="60" src={WateringCan}/></a>