import React from "react";
import Flower from '../../images/flower.png'



let gardenCount = 22


export const GardenPrint = () => {
    
    let flowerArray = []
    let i 
    for(i = 0; i < gardenCount; i++){
        flowerArray.push(i)
    }
    console.log(flowerArray)

    return (
        flowerArray.map((f)=>{
            return (
                <img alt="flower" src={Flower}/>
            )
        })
    )

 } 



export default GardenPrint