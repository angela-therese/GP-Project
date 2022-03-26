using GrowPath.Models;

namespace GrowPath.Repositories
{
    public interface ICourseRepository
    {
        Course GetByIdWithStudents(int id);
    }
}