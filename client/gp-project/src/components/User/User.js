import React from "react";
import { Link } from "react-router-dom";
import NavBar from '../Nav/Nav'
import GardenUserPrint from '../Garden/GardenUserPrint'
import './User.css';





const User = ({ user }) => {
  
    // const { logout } = useContext(AuthContext);
    // const { id } = useParams();
    
    
    return (
      <>
      
        <NavBar />
        <br></br>
        <div className="main-user-container">
          {/* <h1 className="header-landing-text">Welcome to Growpath, {user.firstName}!</h1> */}
          <div className="user-row">
            <article>
              <section className="welcome-section">
               <h1 className="header-landing-text">Current Courses</h1> 
               <p>Click the course you'd like to view.</p>
               </section>
              <section className="card-container">
                {user.courses?.map((c) => {
               return (

                 <article className="course-card">
                 <Link className="class-card-text" to={`/course/${c.id}`}>{c.name}</Link>
                </article>
                )
                })}
                </section>
                
            </article>

            <article className ="user-garden-section">
               <h3 className="header-landing-text">Instructor Garden</h3>
              <p>These are the flowers you've helped to grow--<br/>all of the flowers from your students' gardens! </p>
                <section className="print-section">
                  <GardenUserPrint />
                </section>
            </article>
            
          </div> 

          {/* <div className="stats-container">
            <section  >
            <p className="title-section">Instructor Insights</p>
            </section>
           
          <section className="stats-row">
           <article className="article-1 stat-article">

           </article>

           <article className="article-2 stat-article">

           </article>

           <article className="article-3 stat-article">


           </article>
           </section> */}

          {/* </div> */}
       
          </div>
        
     </>
    );
  };
  
  export default User;