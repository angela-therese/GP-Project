import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../providers/StudentProvider";
import { GoalContext } from "../../providers/GoalProvider";
import { useNavigate, useParams, Link } from "react-router-dom";




export const GoalDelete = () => {
    
    
   
    const {goalId, studentId} = useParams();
    const { getGoal, deleteGoal } = useContext(GoalContext);
    const { getById } = useContext(StudentContext);
    const [goal, setGoal] = useState({});
    const [student, setStudent] = useState({});

    const navigate = useNavigate()
    
    
    
    
    useEffect(()=> {
        if(goalId) {
            getGoal(goalId)
            .then(goal => {
                setGoal(goal)
        })}
      
    }, [])


    const handleClickDeleteGoal = () => {
        deleteGoal(goalId)
        .then(getById(studentId))
        .then(navigate(`/student/${studentId}`))
    }


    const handleClickRouteChange = () => {
        navigate(`/student/${studentId}`)
    }

    return (

        <>
    <div className="main-delete-container">
    <h1>{student?.firstName} {student?.lastName}</h1>
    <section className="confirm-container">
    <h2>Are you sure you want to delete this goal?</h2>
    <h3 className="note-text">{goal.description}</h3>


    
    
    <button onClick={handleClickRouteChange} className="return-button">No, go back.</button>
    <button className="delete-notes-button" onClick={handleClickDeleteGoal}>Yes, delete.</button>

    </section>
    </div>
    
    </>
    )


}

