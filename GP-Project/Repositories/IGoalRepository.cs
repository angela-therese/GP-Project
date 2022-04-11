using GrowPath.Models;
using System.Collections.Generic;

namespace GrowPath.Repositories
{
    public interface IGoalRepository
    {
        Goal GetById(int id);
         void Add(Goal goal);
        void Update(Goal goal);
        void Delete(int id);
        List<Goal> GetAll();
        List<Goal> GetGoalsByCourse(int id);
        List<Goal> GetAllByUserId(int id);

    }
}