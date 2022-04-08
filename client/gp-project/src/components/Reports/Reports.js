import React, {useContext, useEffect} from "react"
import { useParams } from "react-router-dom";
import { GoalContext } from "../../providers/GoalProvider";


export const ReportList = () => {

    const {goals, getGoalsByCourse} = useContext(GoalContext)
    const { id } = useParams();


    useEffect(() => {
        getGoalsByCourse();
    }, [])
    

    const totalGoals = goals?.length

    const categoryGeneral = goals.filter(g => g.Id === 1);
    const categoryGeneralPercentage = ((categoryGeneral.length/totalGoals)*100).toFixed(2)


    const categoryCourseContent = goals.filter(g => g.Id === 2);
    

    const categoryCommunication = goals.filter(g => g.Id === 3);
    const categoryInterpersonal = goals.filter(g => g.Id === 4);
    const categoryBehavior = goals.filter(g => g.Id === 5);
    const categorySelfCare = goals.filter(g => g.Id === 6);
    const categoryTeamwork = goals.filter(g => g.Id === 7);
    const categoryLearningStrategies = goals.filter(g => g.Id === 8);



    // return (
    //        {/*START REPORTS CONTAINER)*/}
           
    //        <div className="reports-container">
    //        <section className="title-section">
    //        <p className="title-section">Class Goal Insights</p>
    //        </section>
          
    //      <section className="reports-row">
    //       <article className="article-1 report-article">

    //       </article>

    //       <article className="article-2 report-article">

    //       </article>

    //       <article className="article-3 report-article">


    //       </article>
    //       </section>

    //      </div>
    //    {/*END REPORTS CONTAINER)*/}

    // )
}