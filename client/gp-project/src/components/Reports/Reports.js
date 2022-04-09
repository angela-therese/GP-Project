import React, {useContext, useEffect} from "react"
import { useParams } from "react-router-dom";
import { GoalContext } from "../../providers/GoalProvider";
import {  Bar, Doughnut, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    ArcElement,
    Legend, PointElement, LineElement
  } from 'chart.js';

import './../Course/Course.css'

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, ArcElement, LineElement)

export const ReportList = () => {

    const {goals, getGoalsByCourse} = useContext(GoalContext)
    const { id } = useParams();


    useEffect(() => {
        // getGoalsByCourse(id);
        getGoalsByCourse(id);
    }, [])
    

    console.log(goals)

        const newArray = goals.map(g => {
        return (
            g.categoryName
        )

    })

    console.log(newArray)


    const totalGoals = goals?.length


    //GOAL CATEGORY BY PERCENTAGE OF TOTAL GOALS
    const categoryGeneral = goals.filter(g => g.categoryId == 1);
    console.log(categoryGeneral)
    const categoryGeneralPercentage = ((categoryGeneral.length/totalGoals)*100).toFixed(2)
 

    const categoryLearningStrategies = goals.filter(g => g.categoryId == 8);
    const categoryLearningStrategiesPercentage = ((categoryLearningStrategies.length/totalGoals)*100).toFixed(2);
    
    
       
   


    return (
          
           <>
           <div className="reports-container">
           <section className="title-section">
           <p className="title-section">Goal Insights</p>
           </section>
          
         <section className="stats-row">

         <article className="stat-article">
            <h1 className="text-center"><strong>Goals by Category - %</strong></h1>
            <Pie
            data={{
                    labels: ['Jun', 'Jul', 'Aug', 'Sep'],
                    datasets: [
                        {
                             id: 1,
                             label: '',
                             data: [5, 6, 7, 8],
                             backgroundColor: ['#D43753', 'lightskyblue', 'olivedrab', 'goldenrod']
                        }
                          
                             ],
                       

                    
                        }}
            />

          </article>


          <article className="stat-article">
          <h1 className="text-center"><strong>Number of goals by category</strong></h1>
          <Bar
                datasetIdKey='id'
                
                data={{
                  
                     labels: ['Jun', 'Jul', 'Aug', 'Sep'],
                     datasets: [
                        {
                            axis: 'y',
                             id: 1,
                             label: '',
                             data: [5, 6, 7, 8],
                             backgroundColor: ['#D43753', 'lightskyblue', 'olivedrab', 'goldenrod'],
                             
                        }, ]
                             
                        }}
                     options={{
                         indexAxis: 'y'
                     }}
                    />
            </article>


            <article className="stat-article">
            <h1 className="text-center"><strong>Flowers by Category - %</strong></h1>
            <Doughnut
            data={{
                    labels: ['Jun', 'Jul', 'Aug', 'Sep'],
                    datasets: [
                        {
                             id: 1,
                             label: '',
                             data: [5, 6, 7, 8],
                             backgroundColor: ['#D43753', 'lightskyblue', 'olivedrab', 'goldenrod']
                        }
                          
                             ],
                    
                        }}
            />

          </article>
        </section>


       

            {/* <p>General : {categoryGeneralPercentage}</p>
            <p>Learning Strategies: {categoryLearningStrategiesPercentage}</p> */}
          {/* </article>

    
       {/*END REPORTS CONTAINER)*/}

       </div>
       </>
    )
}









// const newArray = goals.map(g => {
    //     return (
    //         {"name": g.categoryName, "length": g}
    //     )

    // })


    //map masterArray
    // masterArray.push(categoryGeneral);
    // masterArray.push(categoryLearningStrategies)
    // console.log(masterArray)
    
    // const newMasterArray = masterArray.map(a => {
    //     return(
    //         {"name" : a(1).categoryName, "length": a.length}
    //     )
    
    // })

    // console.log(newMasterArray)


  

    // const categoryCourseContent = goals.filter(g => g.categoryId == 2);
    // const categoryCourseContentPercentage = ((categoryCourseContent.length/totalGoals)*100).toFixed(2)

    // const categoryCommunication = goals.filter(g => g.categoryId == 3);
    // const categoryCommunicationPercentage = ((categoryCommunication.length/totalGoals)*100).toFixed(2)

    // const categoryInterpersonal = goals.filter(g => g.categoryId == 4);
    // const categoryInterpersonalPercentage = ((categoryInterpersonal.length/totalGoals)*100).toFixed(2)

    // const categoryBehavior = goals.filter(g => g.categoryId == 5);
    // const categoryBehaviorPercentage = ((categoryBehavior.length/totalGoals)*100).toFixed(2)
   
    // const categorySelfCare = goals.filter(g => g.categoryId == 6);
    // const categorySelfCarePercentage = ((categorySelfCare.length/totalGoals)*100).toFixed(2)

    // const categoryTeamwork = goals.filter(g => g.categoryId == 7);
    // const categoryTeamworkPercentage = ((categoryTeamwork.length/totalGoals)*100).toFixed(2)