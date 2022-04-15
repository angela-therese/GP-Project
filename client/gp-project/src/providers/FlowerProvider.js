import React, { useState } from "react";



export const FlowerContext = React.createContext();

export const FlowerProvider = (props) => {

    const baseUrl = 'https://localhost:44362';

    const [flowers, setFlowers] = useState([]);

    const getAllFlowers = () => {
        return fetch(`${baseUrl}/api/flower`)
        .then((res) => res.json())
        .then(setFlowers)
    };

    const getByFlowerId = (id) => {
        return fetch(`${baseUrl}/api/flower/GetByFlowerId?id=${id}`)
        .then((res) => res.json())
        
    };

    const getByCourseId = (id) => {
        return fetch(`${baseUrl}/api/flower/GetByCourse?id=${id}`)
        .then((res) => res.json())
        .then(setFlowers)
    };

    const getByGoalId = (id) => {
        return fetch(`${baseUrl}/api/flower/GetByGoal?id=${id}`)
        .then((res) => res.json())
        .then(setFlowers)
    };

    const getByUserId = (id) => {
        return fetch(`${baseUrl}/api/flower/GetByUser?id=${id}`)
        .then((res) => res.json())
        .then(setFlowers)
    }

    const addFlower = (flower) => {
        return fetch (`${baseUrl}/api/flower`,{
        
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(flower),
        })
    };

    const updateFlower = (flower) => {
        return fetch (`${baseUrl}/api/flower/${flower.id}`,{
        
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(flower),
        })
    };

    const deleteFlower = (id) => {
        return fetch (`${baseUrl}/api/flower/${id}`,{
        
            method: "DELETE"
        })
    };

    return (
        <FlowerContext.Provider value ={{flowers, getAllFlowers, getByUserId, getByCourseId, getByGoalId, getByFlowerId, addFlower, updateFlower, deleteFlower}}>
            {props.children}
        </FlowerContext.Provider>
    )
}

export default FlowerProvider