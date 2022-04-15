import React from "react";
import {Link} from "react-router-dom";
import NavBar from '../Nav/Nav';
import './Student.css';


const Student = ({ student }) => {


    return (
        <>
        <NavBar/>
        <div className="main-student-container" >
        <div className="heading">
        <Link className="subheader" to={`/course/${student.classId}`}>Back to class roster</Link>
            <h1 className="heading">{student.firstName} {student.lastName} - Goals</h1>

        </div>
        
        
        
            
            <p className="subheader">Click on a goal for details</p>
                <section className="goals-container" >
        {student.goals?.map((g) => {
                    return (
                 <div className="goal-div">
                  <h1><Link className="goal-card" to={`/student/${student.id}/goal/${g.id}`}>{g.title} </Link></h1>
                  </div>
                     )
                    
                })}
                 </section>
        
       <Link className="add-goal-button" to={`/student/${student.id}/goal/add`}>Add New Goal</Link>
        
       
        </div>
        
        
        </>
    )

}

export default Student;