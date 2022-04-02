import React from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";
import { useContext } from "react";
import {GardenGoalPrint} from "../Garden/GardenGoalPrint"
import NavBar from '../Nav/Nav'
import './Student.css'


const Student = ({ student }) => {


 

    return (
        <>
        <NavBar/>
        <div className="heading">
            <h1 className="heading">{student.firstName} {student.lastName} - Goals</h1>
            <Link className="subheader" to={`/course/${student.classId}`}>Back to class roster</Link>
        </div>
        <br/><br/>
        
        <div className="main-container" >
            <section className="section-1-container">
            <p className="subheader">Click on a goal for details</p>
                <section className="goals-container" >
        {student.goals?.map((g) => {
                    return (
                 <div className="goal-div">
                  <h1><Link className="goal-div" to={`/student/${student.id}/goal/${g.id}`}>{g.title} </Link></h1>
                  </div>
                     )
                    
                })}
        </section>
        
       <section> <Link className="goal-button" to={`/student/${student.id}/goal/add`}>Add New Goal</Link></section>
        </section>
       
        </div>
        
        
        </>
    )

}

export default Student;