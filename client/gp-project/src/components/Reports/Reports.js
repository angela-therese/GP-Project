import React, {useContext, useEffect} from "react"
import { useParams } from "react-router-dom";
import { GoalContext } from "../../providers/GoalProvider";
import { FlowerContext } from "../../providers/FlowerProvider";
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

import './Reports.css'

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, ArcElement, LineElement)



    export const ReportList = () => {

    const {goals, getGoalsByCourse} = useContext(GoalContext)
    const { flowers, getByCourseId } = useContext(FlowerContext);
    const { id } = useParams();


    useEffect(() => {
        getGoalsByCourse(id)
        .then(getByCourseId(id))
    }, [])
    

    console.log(goals)
    console.log(flowers)



    const totalFlowers = flowers?.length
    const totalGoals = goals?.length


    //GOAL CATEGORY BY PERCENTAGE OF TOTAL GOALS
    const categoryGeneral = goals.filter(g => g.categoryId == 1);
    console.log(categoryGeneral)
    const categoryGeneralPercentage = ((categoryGeneral.length/totalGoals)*100).toFixed(2)
 
    const categoryLearningStrategies = goals.filter(g => g.categoryId == 8);
    const categoryLearningStrategiesPercentage = ((categoryLearningStrategies.length/totalGoals)*100).toFixed(2);
    
    const categoryCourseContent = goals.filter(g => g.categoryId == 2);
    const categoryCourseContentPercentage = ((categoryCourseContent.length/totalGoals)*100).toFixed(2)

    const categoryCommunication = goals.filter(g => g.categoryId == 3);
    const categoryCommunicationPercentage = ((categoryCommunication.length/totalGoals)*100).toFixed(2)

    const categoryInterpersonal = goals.filter(g => g.categoryId == 4);
    const categoryInterpersonalPercentage = ((categoryInterpersonal.length/totalGoals)*100).toFixed(2)

    const categoryBehavior = goals.filter(g => g.categoryId == 5);
    const categoryBehaviorPercentage = ((categoryBehavior.length/totalGoals)*100).toFixed(2)
   
    const categorySelfCare = goals.filter(g => g.categoryId == 6);
    const categorySelfCarePercentage = ((categorySelfCare.length/totalGoals)*100).toFixed(2)

    const categoryTeamwork = goals.filter(g => g.categoryId == 7);
    const categoryTeamworkPercentage = ((categoryTeamwork.length/totalGoals)*100).toFixed(2)

    //END  GOALS


    const categoryFlowerGeneral = flowers.filter(f => f.categoryId == 1);
    const categoryFlowerGeneralPercentage = ((categoryFlowerGeneral.length/totalFlowers)*100).toFixed(2)

    const categoryFlowerLearningStrategies = flowers.filter(f => f.goalCategoryId == 8);
     const categoryFlowerLearningStrategiesPercentage = ((categoryFlowerLearningStrategies.length/totalFlowers)*100).toFixed(2)

     const categoryFlowerCourseContent = flowers.filter(f => f.goalCategoryId == 2);
     const categoryFlowerCourseContentPercentage = ((categoryFlowerCourseContent.length/totalFlowers)*100).toFixed(2)
 
     const categoryFlowerCommunication = flowers.filter(f => f.goalCategoryId == 3);
     const categoryFlowerCommunicationPercentage = ((categoryFlowerCommunication.length/totalFlowers)*100).toFixed(2)
 
     const categoryFlowerInterpersonal = flowers.filter(f => f.goalCategoryId == 4);
     const categoryFlowerInterpersonalPercentage = ((categoryFlowerInterpersonal.length/totalFlowers)*100).toFixed(2)
 
     const categoryFlowerBehavior = flowers.filter(f => f.goalCategoryId == 5);
     const categoryFlowerBehaviorPercentage = ((categoryFlowerBehavior.length/totalFlowers)*100).toFixed(2)
    
     const categoryFlowerSelfCare = flowers.filter(f => f.goalCategoryId == 6);
     const categoryFlowerSelfCarePercentage = ((categoryFlowerSelfCare.length/totalFlowers)*100).toFixed(2)
 
     const categoryFlowerTeamwork = flowers.filter(f=> f.goalCategoryId == 7);
     const categoryFlowerTeamworkPercentage = ((categoryFlowerTeamwork.length/totalFlowers)*100).toFixed(2)

     //END TOTAL & PERCENTAGE
       
   


    return (
          
           <>
           <div className="reports-container">
           <section className="title-section">
           <p className="title-section">Course Insights</p>
           </section>
          
         <section className="stats-row">

         <article className="stat-article round-chart">
            <h1 className="text-center"><strong>Goals by Category - %</strong></h1>
            <Pie
            data={{
                    labels: ['Behavior', 'Communication', 'Content', 'General', 'Interpersonal','Learning Strategies', 'Self Care', 'Teamwork'],
                    datasets: [
                        {
                            //  id: 1,
                             label: '',
                             data: [
                                categoryBehaviorPercentage,
                                categoryCommunicationPercentage,
                                categoryCourseContentPercentage,
                                categoryGeneralPercentage,
                                categoryInterpersonalPercentage,
                                categoryLearningStrategiesPercentage,
                                categorySelfCarePercentage,
                                categoryTeamworkPercentage
                                ],
                             backgroundColor: ['#D43753', 'lightskyblue', 'olivedrab', 'goldenrod', 'lightpurple', 'lightgray', '#ff6600', 'indigo' ]
                        }
                          
                             ]
                    
                        }}
            />

          </article>

          {/*//END GOAL PERCENTAGE*/}


          <article className="stat-article bar-chart">
          <h1 className="text-center"><strong>Number of goals by category</strong></h1>
          <Bar
                // datasetIdKey='id'
                
                data={{
                  
                     labels: ['Behavior', 'Communication', 'Content', 'General', 'Interpersonal','Learning Strategies', 'Self Care', 'Teamwork'],
                     datasets: [
                        {
                            axis: 'y',
                             id: '2',
                             label: 'Raw number of goals by category',
                             data: [
                                categoryBehavior.length,
                                categoryCommunication.length,
                                categoryCourseContent.length,
                                categoryGeneral.length,
                                categoryInterpersonal.length,
                                categoryLearningStrategies.length,
                                categorySelfCare.length,
                                categoryTeamwork.length
                                ],
                                backgroundColor: ['#D43753', 'lightskyblue', 'olivedrab', 'goldenrod', 'lightpurple', 'lightgray', '#ff6600', 'indigo' ]
                             
                        }, ]
                             
                        }}
                     options={{
                         indexAxis: 'y',
                         scales:{
                           yAxes:[ {
      
                             ticks: 
                             {autoskip: false}
                           }]
                         }
                       
                     }}
                    />
            </article>

            {/* END RAW NUMBERS GOALS */}

      
         
        </section>


        <section className="stats-row">
       
        <article className="stat-article round-chart">
            <h1 className="text-center"><strong>Flowers by Category - %</strong></h1>
            <Pie
            data={{
                    labels: ['Behavior', 'Communication', 'Content', 'General', 'Interpersonal','Learning Strategies', 'Self Care', 'Teamwork'],
                    datasets: [
                        {
                            //  id: 1,
                             label: '',
                             data: [
                                categoryFlowerBehaviorPercentage,
                                categoryFlowerCommunicationPercentage,
                                categoryFlowerCourseContentPercentage,
                                categoryFlowerGeneralPercentage,
                                categoryFlowerInterpersonalPercentage,
                                categoryFlowerLearningStrategiesPercentage,
                                categoryFlowerSelfCarePercentage,
                                categoryFlowerTeamworkPercentage
                                ],
                             backgroundColor: ['#D43753', 'lightskyblue', 'olivedrab', 'goldenrod', 'lightpurple', 'lightgray', '#ff6600', 'indigo']
                        }
                          
                             ],
                    
                        }}
                 />
            </article>
          {/*END FLOWER PERCENTAGE*/}
            <article className="stat-article bar-chart">
          <h1 className="text-center"><strong>Number of flowers by category</strong></h1>
          <Bar
                // datasetIdKey='id'
                
                data={{
                  
                     labels: ['Behavior', 'Communication', 'Content', 'General', 'Interpersonal','Learning Strategies', 'Self Care', 'Teamwork'],
                     datasets: [
                        {
                            axis: 'y',
                             id: '2',
                             label: 'Raw number of flowers by category',
                             data: [
                                categoryFlowerBehavior.length,
                                categoryFlowerCommunication.length,
                                categoryFlowerCourseContent.length,
                                categoryFlowerGeneral.length,
                                categoryFlowerInterpersonal.length,
                                categoryFlowerLearningStrategies.length,
                                categoryFlowerSelfCare.length,
                                categoryFlowerTeamwork.length
                                ],
                                backgroundColor: ['#D43753', 'lightskyblue', 'olivedrab', 'goldenrod', 'lightpurple', 'lightgray', '#ff6600', 'indigo' ]
                             
                        }, ]
                             
                        }}
                     options={{
                         indexAxis: 'y'
                       
                     }}
                    />
            </article>
            
            </section>
    
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


      //     const newArray = goals.map(g => {
    //     return (
    //         g.categoryName
    //     )

    // })

    // console.log(newArray)

    