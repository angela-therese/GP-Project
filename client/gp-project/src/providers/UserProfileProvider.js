import React, { useState } from "react";


export const UserContext = React.createContext();


export const UserProvider = (props) => {
  // const [users, setUser] = useState([]);


  const baseUrl = 'https://localhost:44362';

  const getUser = (id) => {
   
    return fetch(`${baseUrl}/api/UserProfile/GetByIdWithCourses?id=${id}`)
    .then((res) => res.json());
        };


        // const getUserWithCourses = (id) => {
        //   return fetch(`${baseUrl}/api/UserProfile/api/UserProfile/GetByIdWithCourses?id=${id}`).then((res) => res.json());
        //       };



  return (
    <UserContext.Provider value={{ getUser }}>
      {props.children}
    </UserContext.Provider>
  );

};