import React, { useEffect, useContext, useState } from "react";
import { GoalContext } from "../../providers/GoalProvider";
import { useParams } from "react-router-dom";
import Goal from "./Goal"






const GoalDetails = () => {
  
  const [goal, setGoal] = useState();
  const { getById } = useContext(GoalContext);
  const { goalId, studentId } = useParams();


    

  useEffect(() => {
    getById(goalId).then(setGoal);
  }, []);
 

  if (!goal) {
    return null;
  }

  console.log(goal)

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Goal key={goal.id} goal={goal} />
        </div>
      </div>
    </div>
  );
};

export default GoalDetails;