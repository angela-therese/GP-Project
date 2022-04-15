import React from "react";
import { GardenClassPrint } from "../Garden/GardenClass";
import { Link } from "react-router-dom";
import { ReportList } from "../Reports/Reports";
import NavBar from '../Nav/Nav';
import './Course.css';

const Course = ({ course }) => {


 

  console.log(course);


  return (
    <>

      <NavBar />
      <div className="heading">
        <Link to={`/user/${course.userProfileId}`}>Back to main</Link>
        <h1 className="heading">{course.name}</h1>
        <button className="garden-button"><a className="garden-button" href="#garden">View course garden</a></button>
      </div>


      <div className="main-course-container" >

        <div className="column-div">
          <h3 className="header-landing-text">Course Roster</h3>
          <p>Click on a student's name to add a goal.</p>
          <section className="table-section" >
            <table>
              <thead>
                <tr className="table-headings">
                  <th>Student Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              {course.students?.map((s) => {
                return (
                  <tr className="table-row">
                    <td><Link to={`/student/${s.id}`}>{s.firstName} {s.lastName}</Link></td>
                    <td> <a href={"mailto:" + s.email}>{s.email}</a></td>
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

        <div className="report-list-container"><ReportList /></div>

        {/*END REPORTS CONTAINER)*/}
      </div>

    </>
  );
};

export default Course;