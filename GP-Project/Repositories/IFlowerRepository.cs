using GrowPath.Models;
using System.Collections.Generic;

namespace GrowPath.Repositories
{
    public interface IFlowerRepository
    {
        List<Flower> GetAll();
        Flower GetByFlowerId(int id);
        List<Flower> GetByCourseId(int id);
        List<Flower> GetByGoalId(int id);
        void Add(Flower flower);
        void Update(Flower flower);
    }
}