using GrowPath.Models;
using System.Collections.Generic;

namespace GrowPath.Repositories
{
    public interface IGoalCategoryRepository
    {
        List<GoalCategory> GetAll();
    }
}