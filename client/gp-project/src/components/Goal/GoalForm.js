import React, { useContext, useEffect, useState } from "react";
import { GoalContext } from "../../providers/GoalProvider";
// import GoalList from "./GoalList";
import { GoalCategoryContext } from "../../providers/GoalCategoryProvider"
import { useNavigate, useParams, Link } from "react-router-dom";
import './Goal.css'
import { StudentContext } from "../../providers/StudentProvider";



const currentTime = new Date();


const GoalForm = () => { 
  const { addGoal, updateGoal} = useContext(GoalContext)
  const {getById} = useContext(StudentContext);
  const {categories, getCategories} = useContext(GoalCategoryContext)
  const { goalId, studentId} = useParams();
  const [student, setStudent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then(() => {
    getById(studentId).then(setStudent);
    })
  }, []);

  console.log(student)
  

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
  
  
  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    const newGoal = { ...goal }
    newGoal[event.target.id] = event.target.value
    // update state
    setGoal(newGoal)
  }




  const handleClickSaveGoal = () => {
    
    //disable the button - no extra clicks
    setIsLoading(true);


      addGoal({
        title: goal.title,
        description: goal.description,
        studentId: studentId,
        dateCreated: currentTime,
        categoryId: goal.categoryId
      })
        .then(setGoal ({}))
        .then(() => {
            return navigate(`/student/${studentId}`);
        })
    
  // }
}

return (


    <div className="form-div">
      <form className="goal-form">
        <h2 className="goal-form-title">New Goal for {student?.firstName} {student?.lastName}</h2>
        <Link to={`/student/${studentId}`}>Back to student</Link>
        
        
          <div className="form-group">
            <label htmlFor="title">Goal title:</label>
            <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Goal title" value={goal.title || ""} />
          </div>
      
  
       
          <div className="form-group">
            <label htmlFor="description">Goal description:</label>
            <textarea type="text" maxLength={255} id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Describe goal here" value={goal.description || ""} />
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
    
       
        <button className="goal-update-button margin-2em"
          onClick={handleClickSaveGoal}>
          Save Goal
        </button>
      </form>
      {/* <GoalList /> */}
    </div>
  )

}

export default GoalForm;


