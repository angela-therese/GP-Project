import React  from "react"
// import { StudentContext } from "./StudentProvider";
import { createContext, useState } from "react";

export const GoalContext = React.createContext();

export const GoalProvider = (props) => {
    
    const baseUrl = 'https://localhost:44362';

    const [goals, setGoals] = useState([]);

    const getAllGoals = () => {
        return fetch (`${baseUrl}/api/goal}`)
        .then((res) => res.json())
        .then(setGoals)
    };
    
    const getGoal= (id) => {
        return fetch (`${baseUrl}/api/Goal/GetGoal?id=${id}`)
        .then((res) => res.json());
            };
    
    
    const addGoal = (goal) => {

        
        return fetch (`${baseUrl}/api/Goal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(goal),
        })
    }


    const updateGoal = (goal) => {

       
        return fetch(`${baseUrl}/api/Goal/${goal.id}`, 
        {
            method: "PUT",
            headers : {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(goal)
        })
        .then(getGoal)
    }


    const deleteGoal = (id) => {
        debugger
        return fetch(`${baseUrl}/api/Goal/${id}`, 
        {
            method: "DELETE"
            
        })
        .then(useState[{}])
        
    }

return (
    <GoalContext.Provider value ={{goals, getAllGoals, getGoal, addGoal, updateGoal, deleteGoal}}>
        {props.children}
    </GoalContext.Provider>
)

}