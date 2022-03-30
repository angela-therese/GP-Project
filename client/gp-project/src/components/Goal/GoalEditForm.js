import React, { useContext, useEffect, useState } from "react";
import { GoalContext } from "../../providers/GoalProvider";
// import GoalList from "./GoalList";
import { useNavigate, useParams } from "react-router-dom";
import './Goal.css'
import { StudentContext } from "../../providers/StudentProvider";



const currentTime = new Date();


const GoalEditForm = () => { 
  const { updateGoal, getGoal} = useContext(GoalContext)
  const {getById} = useContext(StudentContext)
  const { goalId, studentId} = useParams();
  const [student, setStudent] = useState();

  const navigate = useNavigate();


  useEffect(() => {
    getById(studentId).then(setStudent);
  }, []);

  console.log(student)
  

  //for edit hold onto state of Goal in this view
  const [goal, setGoal] = useState({})
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);
  
  
  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    const newGoal = { ...goal }
    newGoal[event.target.id] = event.target.value
    // update state
    setGoal(newGoal)
  }




  const handleClickSaveGoal = () => {
    setIsLoading(true);
    if(goalId){
    //disable the button - no extra clicks
       
        updateGoal({
            id:goal.id,
            title: goal.title,
            description: goal.description,
            studentId: goal.studentId,
            dateCreated: currentTime,
            categoryId: parseInt(goal.categoryId)
        })
        .then(setGoal({}))
        .then(getGoal)
        .then(() => navigate(`/student/${goal.student?.id}/goal/${goal.id}`))
    }}
 
 //WHY PARSEINT
    useEffect(() => {
        if(goalId){
            getGoal(goalId)
            .then(goal => {
                setGoal(goal)
            setIsLoading(false)
        })}
        else {
            setIsLoading(false)
        }
    }, [])

 
   
        // .then(setGoal ({}))
        // .then(() => {
        //     return navigate(`/student/${studentId}`);
        // })
    
  


return (


    <div>
      <form className="goal-form">
        <h2 className="goal-form-title">{goalId ? <>Edit Goal</> : <>New Goal for {student?.firstName} {student?.lastName}</>}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="title">Goal title:</label>
            <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Goal title" value={goal.title || ""} />
          </div>
        </fieldset>
  
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

export default GoalEditForm;


