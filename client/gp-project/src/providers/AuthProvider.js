import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = React.createContext();


export const UserAuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getCurrentUser = () => {
    const currentUser = localStorage.getItem("growpathUser");

    return currentUser;
  };

  const baseUrl = 'https://localhost:44362';
  const navigate = useNavigate();
  
  const login = (userObject) => {
   
    fetch(`${baseUrl}/api/userprofile/getbyemail?email=${userObject.email}`
    )
      .then((r) => r.json())
      .then((userObjFromDB) => {
        localStorage.setItem("growpathUser", JSON.stringify(userObjFromDB));
        setIsLoggedIn(true);
        navigate(`/user/${userObjFromDB.id}`);
        
        
      })
  };


  
  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate(`/`);
  };

  return (
    <AuthContext.Provider
      value={{ getCurrentUser, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
