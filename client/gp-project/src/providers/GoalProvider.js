import React from "react"
import { StudentContext } from "./StudentProvider";

export const GoalContext = React.createContext();

export const GoalProvider = (props) => {
    
    const baseUrl = 'https://localhost:44362';

    const getAllCategories = () => {
        return fetch (`${baseUrl}/api/goalcategory`)
        .then((res) => res.json());
    }


    const getGoal= (id) => {
        return fetch (`${baseUrl}/api/Goal/GetGoal?id=${id}`)
        .then((res) => res.json());
            };
    
    
    const addGoal = (goal) => {

        debugger
        return fetch (`${baseUrl}/api/Goal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(goal),
        })
    }


    const updateGoal = (goal) => {

        debugger
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

return (
    <GoalContext.Provider value ={{getAllCategories, getGoal, addGoal, updateGoal}}>
        {props.children}
    </GoalContext.Provider>
)

}