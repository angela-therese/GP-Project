import React from "react";
import {Link, useParams} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";
import { useContext } from "react";
import NavBar from '../Nav/Nav'
import './Student.css'


const Student = ({ student }) => {

  debugger

    return (
        <>
        <NavBar/>
        <div className="heading">
            <h1 className="heading">{student.firstName} {student.lastName} - Details</h1>
            <Link to={`/user/${localStorage.growpathUser.id}`}>Back to main</Link>
        </div>
        <br/><br/>
        
        <div className="main-container" >
            <section className="section-1-container">
            <h3>Goals</h3>
                <section className="goals-container" >
        {student.goals?.map((g) => {
                    return (
                  <h1>{g.title}</h1>
                     )
                })}
        </section>
        </section>
       
        </div>
        
        
        
        
        </>
    )

}

export default Student;