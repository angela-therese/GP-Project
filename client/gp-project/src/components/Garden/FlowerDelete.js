import React, { useContext, useEffect, useState } from "react";
import { FlowerContext } from "../../providers/FlowerProvider";
import { StudentContext } from "../../providers/StudentProvider";
import { useNavigate, useParams } from "react-router-dom";
import './Flower.css'





export const FlowerDelete = () => {

const navigate = useNavigate();
const {deleteFlower, getByFlowerId} = useContext(FlowerContext);
const {getById} = useContext(StudentContext);
const {flowerId, studentId} = useParams();
const [flower, setFlower] = useState({});
const [student, setStudent] = useState({});



const handleClickDeleteFlower = () => {
    deleteFlower(flowerId)
    .then(getById(studentId))
    .then(navigate(`/student/${studentId}`))
}

useEffect(()=> {
    if(flowerId) {
        getByFlowerId(flowerId)
        .then(flower => {
            setFlower(flower)
          
        })
    }

    if(studentId) {
        getById(studentId)
        .then(student => {
            setStudent(student)
        })
    }
  
}, [])


const handleClickRouteChange = () => {
    navigate(`/student/${studentId}`)
}


return (
    <>
    <div className="main-delete-container">
    <h1>{student?.firstName} {student?.lastName}</h1>
    <section className="confirm-container">
    <h2>Are you sure you want to delete this student's note? <br/>The flower will be deleted, as well.</h2>
    <h3 className="note-text">{flower.note}</h3>
    
    <button onClick={handleClickRouteChange} className="return-button">No, go back.</button>
    <button className="delete-notes-button" onClick={handleClickDeleteFlower}>Yes, delete.</button>

    </section>
    </div>
    
    </>
)

}

