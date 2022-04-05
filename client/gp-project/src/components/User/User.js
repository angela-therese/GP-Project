import React from "react";
import { Link, useParams} from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider"
import { useContext } from "react";
import NavBar from '../Nav/Nav'
import './User.css';
import Home from '../../images/home-icon.png'
import ProfilePic from '../../images/angieGlasses.jpg'




const User = ({ user }) => {
  
    const { logout } = useContext(AuthContext);
    const { id } = useParams();
    
    
    return (
      <>
      
        <NavBar />
        <br></br>
        <div className="main-container">
        <section className="card-container" >
        <section className="welcome-section">
        <h1 className="header-landing-text bold-text">Welcome to GrowPath, {user.firstName}!</h1> 
       </section>
        <h3 className="bold-text">Choose a class.</h3>
        {user.courses?.map((c) => {
          return (
            // 
            <>
            <article className="course-card">
            <Link className="class-card-text" to={`/course/${c.id}`}>{c.name}</Link>
            </article>
          </>
          )
        })}
        </section>
        </div>
       
     </>
    );
  };
  
  export default User;