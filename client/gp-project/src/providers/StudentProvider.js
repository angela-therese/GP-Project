import React, { useState } from "react";


export const StudentContext = React.createContext();


export const StudentProvider = (props) => {
  const [students, setStudents] = useState([]);


  const baseUrl = 'https://localhost:44362';

  const getStudent = (id) => {
    return fetch(`${baseUrl}/api/Student/GetById?id=${id}`)
    .then((res) => res.json());
        };


        // const getUserWithCourses = (id) => {
        //   return fetch(`${baseUrl}/api/UserProfile/api/UserProfile/GetByIdWithCourses?id=${id}`).then((res) => res.json());
        //       };



  return (
    <StudentContext.Provider value={{ students, getStudent }}>
      {props.children}
    </StudentContext.Provider>
  );

};