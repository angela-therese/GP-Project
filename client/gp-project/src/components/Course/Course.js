import React from "react";
import {GardenPrint} from "../Garden/Garden"
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider"
import { useContext } from "react";
import NavBar from '../Nav/Nav'
import './Course.css'
import Flower from '../../images/flower.png'




const Course = ({ course }) => {
  
    const { logout } = useContext(AuthContext);
    
    
    return (
      <>
     
        <NavBar />
        <h1 className="heading">{course.name}</h1> 
        <div className="main-container" >
        <section className="section-3-container">
            <h3>Due for Review</h3>
        <section className="reviews-container" >
        
        </section>

        </section>

        <section className="section-1-container" >
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
        
       


        <section className="section-2-container">
            <h3>Class Garden</h3>
        <section className="garden-container" >
        <GardenPrint />
        </section>
        </section>
         
       
        </div>
     </>
    );
  };
  
  export default Course;