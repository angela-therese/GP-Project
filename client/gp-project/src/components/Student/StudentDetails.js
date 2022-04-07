import React, { useEffect, useContext, useState} from "react";
import { useParams } from "react-router-dom";
import Student from "./Student"
import { StudentContext } from "../../providers/StudentProvider";
import { GoalContext } from "../../providers/GoalProvider";


const StudentDetails = () => {



const [student, setStudent] = useState({});
const {goals, getAllGoals} = useContext(GoalContext)
const { getById } = useContext(StudentContext);
const { id } = useParams();


    useEffect(() => {
        getById(id).then(setStudent)
        // .then(getAllGoals);
    }, [goals]);
    console.log(goals)
//don't understand the empty bracket

// if (!student) {
//     return null;
// }

return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Student key={student.id} student={student} />
        </div>
      </div>
    </div>
);

};

export default StudentDetails;