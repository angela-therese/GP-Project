import React, { useContext, useEffect, useState } from "react";
import { GoalContext } from "../../providers/GoalProvider";
// import GoalList from "./GoalList";
import { useNavigate, useParams } from "react-router-dom";
import './Goal.css'



const currentTime = new Date();

const GoalForm = () => { 
  const { getById, addGoal} = useContext(GoalContext)

  //for edit hold onto state of Goal in this view
  const [goal, setGoal] = useState({
    title: "",
    imageUrl: "",
    caption: "",
    userProfileId: null,
    dateCreated: ""
  });
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);
  const { goalId, studentId} = useParams();
  
  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    const newGoal = { ...goal }
    newGoal[event.target.id] = event.target.value
    // update state
    setGoal(newGoal)
  }

  console.log('help')

  const navigate = useNavigate();
  const handleClickSaveGoal = () => {
    
    //disable the button - no extra clicks
    setIsLoading(true);

   
      addGoal({
        title: goal.title,
        description: goal.description,
        studentId: studentId,
        dateCreated: currentTime,
        categoryId: 1
      })
        .then(setGoal ({}))
        .then(() => {
            return navigate(`/student/${studentId}`);
        })
    }


  //get Goals and if there is a GoalId in the URL, getGoal

//   useEffect(() => {
//     getAllGoals().then(() => {
//       if (goalId) {
//         getGoal(goalId)
//           .then(goal => {
//             setGoal(goal)
//             setIsLoading(false)
//           })
//       } else {
//         setIsLoading(false)
//       }
//     })
//   }, [])



return (
    <div>
      <form className="goal-form">
        <h2 className="goal-form-title">{goalId ? <>New Goal</> : <>New Goal</>}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="title">Goal title:</label>
            <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Goal title" value={goal.title || ""} />
          </div>
        </fieldset>
        {/* <fieldset>
          <div className="form-group">
            <label htmlFor="imageUrl">Image Url:</label>
            <input type="text" id="imageUrl" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Image Url" value={goal.imageUrl || ""} />
          </div>
        </fieldset> */}
        <fieldset>
          <div className="form-group">
            <label htmlFor="description">Goal description:</label>
            <input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Describe goal here" value={goal.description || ""} />
          </div>
        </fieldset>
        <button className="goal-button"
          onClick={handleClickSaveGoal}>
          Save Goal
        </button>
      </form>
      {/* <GoalList /> */}
    </div>
  )

}

export default GoalForm;



 // if (goalId) {
      
    //   //PUT - update
    //   updateGoal({
    //     id: goal.id,
    //     title: goal.title,
    //     description: goal.description,
    //     studentId: goal.studentId,
    //     dateCreated: currentTime,
    //     categoryId: goal.categoryId
    //   })
    //   .then(setGoal ({}))
    //   .then(() => navigate(`student/${goal.studentId}/goal/${goal.id}`))

    // }
    // else {
      //Goal - add