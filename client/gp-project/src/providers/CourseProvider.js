import React, { useState } from "react";


export const CourseContext = React.createContext();


export const CourseProvider = (props) => {
  const [courses, setCourses] = useState([]);


  const baseUrl = 'https://localhost:44362';

  const getById = (id) => {
    return fetch(`${baseUrl}/api/course/GetByIdWithStudents?id=${id}`)
    .then((res) => res.json());
        };




  return (
    <CourseContext.Provider value={{ courses, getById }}>
      {props.children}
    </CourseContext.Provider>
  );

};