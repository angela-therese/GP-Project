import React,  { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Flower from '../../images/flower.png'
import {FlowerContext} from "../../providers/FlowerProvider";



export const GardenGoalPrint = () => {

    debugger;
     const {flowers, getByGoalId} = useContext(FlowerContext)

     const { goalId } = useParams(); 
     debugger
     
     
     useEffect(() => {
        getByGoalId(goalId)
     }, [])

 
    let count = (flowers.length)
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

export default GardenGoalPrint