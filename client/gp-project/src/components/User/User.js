import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider"
import { useContext } from "react";
import NavBar from '../Nav/Nav'
import './User.css'


const User = ({ user }) => {
  
    const { logout } = useContext(AuthContext);
    
    return (
      <>
      <NavBar />
      <div className="landing-container">
      <h1>Welcome to GrowPath, {user.firstName}!</h1>
        <br></br>
        <section className="card-container" >
        
        <h2>Choose a class.</h2>
        {user.courses?.map((c) => {
          return (
            // 
            <>
            <article className="course-card">
            {/* <Link to={`/post/${p.id}`}> */}
            <strong>{c.name}</strong>
          {/* </Link> */}
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