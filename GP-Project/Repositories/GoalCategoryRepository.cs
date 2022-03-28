using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using GrowPath.Repositories;
using GrowPath.Models;
using GrowPath.Utils;

namespace GrowPath.Repositories
{
    public class GoalCategoryRepository : BaseRepository, IGoalCategoryRepository
    {
        public GoalCategoryRepository(IConfiguration configuration) : base(configuration) { }

        public List<GoalCategory> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT Id, Name FROM GoalCategory
              ORDER BY Name ASC";

                    var reader = cmd.ExecuteReader();

                    var categories = new List<GoalCategory>();
                    while (reader.Read())
                    {
                        categories.Add(new GoalCategory()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),


                        });
                    }

                    reader.Close();

                    return categories;
                }
            }
        }
    }
}
