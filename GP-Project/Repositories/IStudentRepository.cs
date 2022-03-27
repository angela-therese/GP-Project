using GrowPath.Models;

namespace GrowPath.Repositories
{
    public interface IStudentRepository
    {
        Student GetById(int id);
    }
}