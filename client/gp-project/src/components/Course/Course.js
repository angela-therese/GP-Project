import React from "react";
import {GardenClassPrint} from "../Garden/GardenClass"
import { Link, useParams} from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider"
import { useContext } from "react";
import NavBar from '../Nav/Nav'
import './Course.css'





const Course = ({ course }) => {

  
    const { logout } = useContext(AuthContext);
    const { id } = useParams();
 
    console.log(course);
  
    
    return (
      <>
     
        <NavBar />
        <div className="heading">
            <h1 className="heading">{course.name}</h1>
            <Link to={`/user/${course.userProfileId}`}>Back to main</Link></div>
        <br/><br/>
        
        <div className="main-container" >
        
        <div className="row-div">
        <section className="section-1-container" >
        <h3>Class Roster</h3>
        <table>
            <thead>
            <tr className="table-headings">
                <th>Student Name</th>
                <th>Email</th>
                <th>Course</th>
            </tr>
           </thead>
        {course.students?.map((s) => {
          return (
            <tr className="table-row">


            <td><Link to={`/student/${s.id}`}>{s.firstName} {s.lastName}</Link></td>
            
            <td> <a href={"mailto:" + s.email}>{s.email}</a></td>
            <td>{course.name}</td>
            {/* <td className="button-link"><button>View</button></td> */}
            {/* <Link className="button-link"to={`/course/${c.id}`}>Details</Link> */}
           </tr>
          
          )
           
        })}
        </table> 
        </section>

        <section className="section-2-container">
            <h3>Class Garden</h3>
        <section className="garden-container" >
        <GardenClassPrint />
        </section>
        </section>
        </div>
        {/*END ROSTER AND GARDEN ROW)*/}

        {/*START REPORTS CONTAINER)*/}
        <div className="reports-container">
            <section className="title-section">
            <p className="title-section">Class Goal Insights</p>
            </section>
           
          <section className="reports-row">
           <article className="article-1 report-article">

           </article>

           <article className="article-2 report-article">

           </article>

           <article className="article-3 report-article">


           </article>
           </section>

          </div>
        {/*END REPORTS CONTAINER)*/}

       
        </div>
     </>
    );
  };
  
  export default Course;