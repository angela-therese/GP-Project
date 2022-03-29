// import React, { useContext, useEffect, useState } from "react";
// import { GoalContext } from "../../providers/GoalProvider";
// // import GoalList from "./GoalList";
// import { useNavigate, useParams } from "react-router-dom";



// const currentTime = new Date();

// const GoalForm = () => { 
//   const { getAllCategories, getById} = useContext(GoalContext)

//   //for edit hold onto state of Goal in this view
//   const [goal, setGoal] = useState({
//     title: "",
//     imageUrl: "",
//     caption: "",
//     userProfileId: null,
//     dateCreated: ""
//   });
//   //wait for data before button is active
//   const [isLoading, setIsLoading] = useState(true);
//   const { goalId } = useParams();
  
//   //when field changes, update state. This causes a re-render and updates the view.
//   //Controlled component
//   const handleControlledInputChange = (event) => {
//     const newGoal = { ...goal }
//     newGoal[event.target.id] = event.target.value
//     // update state
//     setGoal(newGoal)
//   }

//   console.log('help')

//   const navigate = useNavigate();
//   const handleClickSaveGoal = () => {
    
//     //disable the button - no extra clicks
//     setIsLoading(true);
//     if (goalId) {
      
//       //PUT - update
//       updateGoal({
//         id: goal.id,
//         title: goal.title,
//         description: goal.description,
//         studentId: goal.studentId,
//         dateCreated: currentTime,
//         categoryId: goal.categoryId
//       })
//       .then(setGoal ({}))
//       .then(() => navigate(`/goal/${goal.id}`))

//     }
//     else {
//       //Goal - add
//       addGoal({
//         title: goal.title,
//         imageUrl: goal.imageUrl,
//         caption: goal.caption,
//         userProfileId: goal.userProfileId,
//         dateCreated: currentTime
//       })
//         .then(setGoal ({}))
//         .then(getAllGoals)
//         .then(() => navigate("/"))
//     }
//   }

//   //get Goals and if there is a GoalId in the URL, getGoal

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



//   return (
//     <div>
//       <>Return</>
//     </div>
//   )


// }




















// export default GoalForm;