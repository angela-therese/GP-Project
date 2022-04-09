import React, {useContext, useEffect} from "react"
import { useParams } from "react-router-dom";
import { GoalContext } from "../../providers/GoalProvider";
import './../Course/Course.css'


export const ReportList = () => {

    const {goals, getGoalsByCourse} = useContext(GoalContext)
    const { id } = useParams();


    useEffect(() => {
        getGoalsByCourse(id);
    }, [])
    
 

    const totalGoals = goals?.length
    const masterArray =[]


    //GOAL CATEGORY BY PERCENTAGE OF TOTAL GOALS
    const categoryGeneral = goals.filter(g => g.categoryId == 1);
    console.log(categoryGeneral)
    const categoryGeneralPercentage = ((categoryGeneral.length/totalGoals)*100).toFixed(2)

  
   

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

    const categoryLearningStrategies = goals.filter(g => g.categoryId == 8);
    const categoryLearningStrategiesPercentage = ((categoryLearningStrategies.length/totalGoals)*100).toFixed(2);
    
    // const newArray = goals.map(g => {
    //     return (
    //         {"name": g.categoryName, "length": g}
    //     )

    // })


    //map masterArray
    masterArray.push(categoryGeneral);
    masterArray.push(categoryLearningStrategies)
    console.log(masterArray)
    
    // const newMasterArray = masterArray.map(a => {
    //     return(
    //         {"name" : a(1).categoryName, "length": a.length}
    //     )
    
    // })

    // console.log(newMasterArray)

       
   


    return (
          
           <>
           <div className="reports-container">
           <section className="title-section">
           <p className="title-section">Class Goal Insights</p>
           </section>
          
         <section className="reports-row">
          <article className="article-1 report-article">
            <h1><strong>Goals by Category</strong></h1>
            <p>General : {categoryGeneralPercentage}</p>
            <p>Learning Strategies: {categoryLearningStrategiesPercentage}</p>
          </article>

          <article className="article-2 report-article">

          </article>

          <article className="article-3 report-article">


          </article>
          </section>

         </div>
        
       {/*END REPORTS CONTAINER)*/}
       </>
    )
}