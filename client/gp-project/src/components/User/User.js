import React from "react";
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider"
import { useContext } from "react";


const User = ({ user }) => {
  
    const { logout } = useContext(AuthContext);
    
    return (
      <>
      <h1>Welcome, {user.firstName}!</h1>
      <button onClick={logout}>Log out</button>
      <Card className="m-4">
        {/* <div>
        <p className="text-left px-2">{user.name}</p>
        </div>
         */}
        
        {user.courses?.map((c) => {
          return (
            // 
            <>
            <Card>
            {/* <Link to={`/post/${p.id}`}> */}
            <strong>{c.name}</strong>
          {/* </Link> */}
            </Card>
            
          
          </>
          )
        })}
        
      </Card>
      </>
    );
  };
  
  export default User;