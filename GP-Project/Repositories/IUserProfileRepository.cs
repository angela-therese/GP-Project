using GrowPath.Models;
using System.Collections.Generic;

namespace GrowPath.Repositories
{
    public interface IUserProfileRepository
    {
        UserProfile GetByIdWithCourses(int id);
        UserProfile GetByEmail(string email);

    }
}