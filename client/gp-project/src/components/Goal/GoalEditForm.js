import React, { useContext, useEffect, useState } from "react";
import { GoalContext } from "../../providers/GoalProvider";
import { GoalCategoryContext } from "../../providers/GoalCategoryProvider";
import { useNavigate, useParams, Link } from "react-router-dom";
import './Goal.css'



const currentTime = new Date();


const GoalEditForm = () => { 
  const { updateGoal, getGoal} = useContext(GoalContext)
  const {categories, getCategories} = useContext(GoalCategoryContext)
  const { goalId} = useParams();
  const navigate = useNavigate();


  
  

  //for edit hold onto state of Goal in this view
  const [goal, setGoal] = useState({})
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);
  
  
  //when field changes, update state. 
  const handleControlledInputChange = (event) => {
    const newGoal = { ...goal }
    newGoal[event.target.id] = event.target.value
    // update state
    setGoal(newGoal)
  }
 

  useEffect(() => {
    getCategories().then(() => {
    if(goalId){
        getGoal(goalId)
        .then(goal => {
            setGoal(goal)
        setIsLoading(false)
    })
  }
    else {
        setIsLoading(false)
    }
  })
}, [])



  const handleClickSaveGoal = () => {
    setIsLoading(true);
    if(goalId){
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
 


return (


    <div className="form-div">
      <form className="goal-edit-form">
        <h2 className="goal-form-title">Edit Goal for {goal.student?.firstName}</h2>
        <Link to={`/student/${goal.student?.id}`}>Back to goals</Link>
        
          <div className="form-group">
            <label htmlFor="title">Goal title:</label>
            <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Goal title" value={goal.title || ""} />
          </div>
        
  
          <div className="form-group">
            <label htmlFor="description">Goal description:</label>
            <textarea type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Describe goal here" value={goal.description || ""} />
          </div>
      

        <div className="form-group">
            <label htmlFor="category">Goal category:</label>
            <select value={goal.categoryId} name="categoryId" id="categoryId" onChange={handleControlledInputChange}>
                <option value="0">Select a category</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
            </select>
        </div>
       

        <button className="goal-update-button"
          onClick={handleClickSaveGoal}>
          Update Goal
        </button>
      </form>
    </div>
  )

}

export default GoalEditForm;


