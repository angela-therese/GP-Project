import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FlowerContext } from "../../providers/FlowerProvider";
import {GardenGoalPrint} from "../Garden/GardenGoalPrint"
import NavBar from '../Nav/Nav'
import './Goal.css'







const Goal = ({ goal }) => {
  
    let studentId = goal.studentId
    const {goalId} = useParams();
    const {flowers, getByGoalId} = useContext(FlowerContext);
    


    
    useEffect(() => 
    {  getByGoalId(goalId);
    }, [])

  
    

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
             
        <Link className="goal-edit-button" to={`/goal/edit/${goal.id}`}>Edit Goal</Link>   
        <Link className="delete-goal-button" to={`/student/${studentId}/goal/${goalId}/delete`}>Delete Goal</Link>
            </section>
        </div>
        

        </div>

       
        
        <h2 className="no-margin">Garden Log</h2>
        <p>(To remove a flower, delete its note.)</p>
        <div className ="section-4 notes-section">
            
            {flowers.map((f) => {
                return (
                <div className="notes-div">
                    <p>{f.note}</p>
                    <p>{f.dateAdded} &nbsp; &nbsp; 
                    <Link to={`/student/${studentId}/flower/edit/${f.id}`} className="goal-update-button">Edit Notes</Link>
                     &nbsp; &nbsp; 
                     <Link to={`/student/${studentId}/flower/delete/${f.id}`} className="delete-goal-button">Delete</Link>
                     &nbsp; &nbsp; 
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
  


