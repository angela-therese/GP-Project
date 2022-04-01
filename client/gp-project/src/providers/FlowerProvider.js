import React, { useState } from "react";
// import { StudentContext } from "./StudentProvider";


export const FlowerContext = React.createContext();

export const FlowerProvider = (props) => {

    const baseUrl = 'https://localhost:44362';

    const [flowers, setFlowers] = useState([]);

    const getAllFlowers = () => {
        return fetch(`${baseUrl}/api/flower`)
        .then((res) => res.json())
        .then(setFlowers)
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

    const addFlower = (flower) => {
        return fetch (`${baseUrl}/api/flower`,{
        
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(flower),
        })
    };

    return (
        <FlowerContext.Provider value ={{flowers, getAllFlowers, getByCourseId, getByGoalId, addFlower}}>
            {props.children}
        </FlowerContext.Provider>
    )
}

export default FlowerProvider