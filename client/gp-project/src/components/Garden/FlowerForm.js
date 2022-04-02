import React, { useContext, useEffect, useState } from "react";
import { FlowerContext } from "../../providers/FlowerProvider";
// import flowerList from "./flowerList";
import { useNavigate, useParams } from "react-router-dom";




const currentTime = new Date()


const FlowerForm = () => { 
  const { addFlower } = useContext(FlowerContext)
  const { goalId, studentId} = useParams();
  const navigate = useNavigate();


  //for edit hold onto state of flower in this view
  const [flower, setFlower] = useState({
    flowerId: "",
    note: "",
    dateAdded: ""
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
        dateAdded: currentTime
      })
        .then(setFlower ({}))
        .then(() => {
            return navigate(`/student/${studentId}/goal/${goalId}`);
        })
    
  }


return (


    <div>
      <form className="flower-form">
        <h2 className="flower-form-title">Add a Flower</h2>
        
  
        <fieldset>
          <div className="form-group">
            <label htmlFor="note">Enter note:</label>
            <textarea type="text" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Type here" value={flower.note || ""} />
          </div>
        </fieldset>

       
        <button className="flower-button"
          onClick={handleClickSaveFlower}>
          Save flower
        </button>
      </form>
      {/* <flowerList /> */}
    </div>
  )

}

export default FlowerForm;


