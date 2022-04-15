import React, { useContext, useEffect, useState } from "react";
import { FlowerContext } from "../../providers/FlowerProvider";
import { useNavigate, useParams, Link } from "react-router-dom";
import { NavBar } from './../Nav/Nav'
import './Flower.css'




const currentTime = new Date()


const FlowerForm = () => { 
  const { addFlower } = useContext(FlowerContext)
  const { goalId, studentId} = useParams();
  const navigate = useNavigate();


  const [growpathUser, setGrowPathUser] = useState({});
  useEffect(() => {
      const growpathUser = JSON.parse(localStorage.getItem('growpathUser'));
      if (growpathUser){
          setGrowPathUser(growpathUser)
      }
  }, {})

 
  const user = growpathUser;
 
  




  //for edit hold onto state of flower in this view
  const [flower, setFlower] = useState({
   
    goalId: "",
    note: "",
    dateAdded: "",
    userId: ""
  
  });


  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);
  
  
  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    const newFlower = { ...flower}
    newFlower[event.target.id] = event.target.value
    // update state
    setFlower(newFlower)
  }




  const handleClickSaveFlower = () => {
    
    //disable the button - no extra clicks
    setIsLoading(true);
      addFlower({
        goalId: goalId,
        note: flower.note,
        dateAdded: currentTime, 
        userId: user.id
      })
        .then(setFlower ({}))
        .then(() => {
            return navigate(`/student/${studentId}/goal/${goalId}`);
        })
    
  }
debugger

return (

    <>
    <NavBar/>
    <div className="flower-form-container">
      <section className="flower-form">
        <Link to={`/student/${studentId}/goal/${goalId}`}>Back to Goal</Link>
        <h2 className="flower-form-title">Add a Flower</h2>
        <form>
  
        
          <div className="form-group">
            <label htmlFor="note">Enter note:</label>
            <textarea type="text" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Type here" value={flower.note || ""} />
          </div>
        

       
        <button className="flower-add-button"
          onClick={handleClickSaveFlower}>
          Save flower
        </button>
        </form>
      </section>
    
    </div>
    </>
   
  )

}

export default FlowerForm;


