import React, { useEffect, useContext, useState } from "react";
import { CourseContext } from "../../providers/CourseProvider";
import { useParams } from "react-router-dom";
import Course from "./Course"






const CourseDetails = () => {
  
  const [course, setCourse] = useState();
  const { getById } = useContext(CourseContext);
  const { id } = useParams();


    

  useEffect(() => {
    getById(id).then(setCourse);
  }, []);
  debugger

  if (!course) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Course key={course.id} course={course} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;