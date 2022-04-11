import React from "react";
import {GardenClassPrint} from "../Garden/GardenClass"
import { Link, useParams} from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider"
import { useContext } from "react";
import { ReportList} from "../Reports/Reports"
import NavBar from '../Nav/Nav'
import './Course.css'

const Course = ({ course }) => {

  
    // const { logout } = useContext(AuthContext);
    // const { id } = useParams();
 
    console.log(course);
  
    
    return (
      <>
     
        <NavBar />
        <div className="heading">
             <Link to={`/user/${course.userProfileId}`}>Back to main</Link>
            <h1 className="heading">{course.name}</h1>
            <button className="garden-button"><a className="garden-button" href="#garden">View course garden</a></button>
            
           
          </div> 
        {/* <br/><br/> */}
        
        <div className="main-course-container" >
        
        <div className="column-div">
        <h3 className="header-landing-text">Course Roster</h3>
        <section className="table-section" >
        
        <table>
            <thead>
            <tr className="table-headings">
                <th>Student Name</th>
                <th>Email</th>
                {/* <th>Course</th> */}
            </tr>
           </thead>
        {course.students?.map((s) => {
          return (
            <tr className="table-row">


            <td><Link to={`/student/${s.id}`}>{s.firstName} {s.lastName}</Link></td>
            
            <td> <a href={"mailto:" + s.email}>{s.email}</a></td>
            {/* <td>{course.name}</td> */}
            {/* <td className="button-link"><button>View</button></td> */}
            {/* <Link className="button-link"to={`/course/${c.id}`}>Details</Link> */}
           </tr>
          
          )
           
        })}
        </table> 
        </section>

        <section id="garden" className="garden-section-container">
            <h3 className='header-landing-text'>Course Garden</h3>
        <section className="garden-container" >
        <GardenClassPrint />
        </section>
        </section>
        </div>
        {/*END ROSTER ROW)*/}

        {/*START REPORTS CONTAINER)*/}
        
        
        {/*END REPORTS CONTAINER)*/}
       
        <div className="report-list-container"><ReportList/></div>
        </div>
     </>
    );
  };
  
  export default Course;