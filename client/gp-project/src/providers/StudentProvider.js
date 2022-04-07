import React, { useState } from "react";


export const StudentContext = React.createContext();


export const StudentProvider = (props) => {
  const [student, setStudent] = useState([]);


  const baseUrl = 'https://localhost:44362';

  const getById= (id) => {
    
    return fetch(`${baseUrl}/api/Student/GetById?id=${id}`)
    .then((res) => res.json())
    
        };


        // const getUserWithCourses = (id) => {
        //   return fetch(`${baseUrl}/api/UserProfile/api/UserProfile/GetByIdWithCourses?id=${id}`).then((res) => res.json());
        //       };



  return (
    <StudentContext.Provider value={{getById, student}}>
      {props.children}
    </StudentContext.Provider>
  );

};