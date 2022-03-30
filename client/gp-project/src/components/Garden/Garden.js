import React from "react";
import Flower from '../../images/flower.png'
import GoalContext from '../../providers/GoalProvider'
import { useContext } from "react";
import {useParams} from 'react-router-dom'



let count = 8


export const GardenPrint = () => {

    let flowerArray = []
    let i 
    for(i = 0; i < count; i++){
        flowerArray.push(i)
    }
    // console.log(flowerArray)

    return (
        flowerArray.map((f)=>{
            return (
                <img alt="flower" src={Flower}/>
            )
        })
    )

 } 



export default GardenPrint