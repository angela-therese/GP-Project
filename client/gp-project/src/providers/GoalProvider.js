import React from "react"
import { StudentContext } from "./StudentProvider";

export const GoalContext = React.createContext();

export const GoalProvider = (props) => {
    
    const baseUrl = 'https://localhost:44362';

    const getAllCategories = () => {
        return fetch (`${baseUrl}/api/goalcategory`)
        .then((res) => res.json());
    }


    const getById = (id) => {
        return fetch (`${baseUrl}/api/Goal/GetById?id=${id}`)
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


return (
    <GoalContext.Provider value ={{getAllCategories, getById, addGoal}}>
        {props.children}
    </GoalContext.Provider>
)

}