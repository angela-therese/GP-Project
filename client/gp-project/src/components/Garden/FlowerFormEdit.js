import React, { useContext, useEffect, useState } from "react";
import { FlowerContext } from "../../providers/FlowerProvider";
// import flowerList from "./flowerList";
import { useNavigate, useParams, Link } from "react-router-dom";
import './Flower.css'
import NavBar from "../Nav/Nav";




const currentTime = new Date()


const FlowerForm = () => { 
  const { updateFlower, getByFlowerId } = useContext(FlowerContext)
  const { goalId, flowerId, studentId} = useParams();
  const navigate = useNavigate();


  //for edit hold onto state of flower in this view
  const [flower, setFlower] = useState({});
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

  useEffect(() => {
    if(flowerId)
      {
       getByFlowerId(flowerId)
      .then(flower => {
        setFlower(flower)
        setIsLoading(false)
        })
     }

     else {
       setIsLoading(false)
     }

  }, [])


  const handleClickSaveFlower = () => {
    setIsLoading(true);
   
    if(flowerId){
      updateFlower({
        id: flower.id,
        goalId: flower.goalId,
        note: flower.note,
        dateAdded: currentTime
      })
        .then(setFlower ({}))
        .then(() => {
            return navigate(`/student/${studentId}`);
        })

    }
      
    
  }


return (

  <>
  <NavBar/>
  <div className="flower-form-container">
    <section className="flower-form">
      <Link to={`/student/${studentId}/goal/${goalId}`}>Back to Goal</Link>
      <h2 className="flower-form-title">Edit a Flower</h2>
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
    {/* <flowerList /> */}
  </div>
  </>
  )

}

export default FlowerForm;


