import React from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider"
import { useContext } from "react";
import NavBar from '../Nav/Nav'
import './Course.css'




const Course = ({ course }) => {
  
    const { logout } = useContext(AuthContext);
    
    
    return (
      <>
      <div className="container-fluid">
        <NavBar />
        <br></br>
       
        <section className="card-container" >
        <h1>{course.name}</h1> 
        <h3>Class Roster</h3>
        <table>
            <thead>
            <tr>
                <th>Student Name</th>
                <th>Email</th>
                <th>Course</th>
            </tr>
           </thead>
        {course.students?.map((s) => {
          return (
            <tr className="table-row">
            <td>{s.firstName} {s.lastName}</td>
            <td> <a href={"mailto:" + s.email}>{s.email}</a></td>
            <td>{course.name}</td>
            <td className="button-link">View</td>
            {/* <Link className="button-link"to={`/course/${c.id}`}>Details</Link> */}
           </tr>
          
          )
           
        })}
        </table> 
        </section>
        </div>
     </>
    );
  };
  
  export default Course;