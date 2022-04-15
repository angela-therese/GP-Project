import React, { useState } from "react";


export const UserContext = React.createContext();


export const UserProvider = (props) => {
  


  const baseUrl = 'https://localhost:44362';

  const getUser = (id) => {
   
    return fetch(`${baseUrl}/api/UserProfile/GetByIdWithCourses?id=${id}`)
    .then((res) => res.json());
        };



  return (
    <UserContext.Provider value={{ getUser }}>
      {props.children}
    </UserContext.Provider>
  );

};