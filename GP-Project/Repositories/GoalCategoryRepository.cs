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
        //End GETALL

        public List<GoalCategory> GetAllWithGoals()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT gc.Id AS GoalCategoryId, gc.Name, g.id AS GoalId, g.DateCreated, g.StudentId, g.CategoryId
                FROM GoalCategory gc LEFT JOIN Goal g ON gc.Id = g.CategoryId
              ORDER BY Name ASC";

                    var reader = cmd.ExecuteReader();

                    var categories = new List<GoalCategory>();

                    while (reader.Read())
                    {
                        var category = new GoalCategory()
                        {
                                Id = DbUtils.GetInt(reader, "GoalCategoryId"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Goals = new List<Goal>()
                         };

                        categories.Add(category);

                        if (DbUtils.IsNotDbNull(reader, "GoalId"))
                        {
                            category.Goals.Add(new Goal()
                            {
                                Id = DbUtils.GetInt(reader, "GoalId"),
                                Title = null,
                                Description = null,
                                StudentId = DbUtils.GetInt(reader, "StudentId"),
                                DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                                CategoryId = DbUtils.GetInt(reader, "CategoryId")
                            });

                        }  
                    }

                        reader.Close();

                        return categories;
                    }
                }
            }
        //END GET ALL CATEGORIES WITH GOALS

        }
    }

