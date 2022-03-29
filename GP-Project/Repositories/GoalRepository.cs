using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GrowPath.Repositories;
using GrowPath.Models;
using Microsoft.Extensions.Configuration;
using GrowPath.Utils;

namespace GrowPath.Repositories
{
    public class GoalRepository : BaseRepository, IGoalRepository
    {
        public GoalRepository(IConfiguration configuration) : base(configuration) { }

        public Goal GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT g.Id AS GoalId, g.Title, g.Description, g.StudentId AS GoalStudentId, g.DateCreated, g.GrowthCount, g.CategoryId, s.Id AS StudentId, s.FirstName, s.LastName, s.Email, s.ClassId, s.imageUrl
                        FROM Goal g 
                        JOIN Student s on g.StudentId = s.Id
                        WHERE  g.Id = @id
                            ";

                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();

                    Goal goal = null;
                    while (reader.Read())
                    {
                        if (goal == null)
                        {
                            goal = new Goal()
                            {
                                Id = DbUtils.GetInt(reader, "GoalId"),
                                Title=DbUtils.GetString(reader, "Title"),
                                Description = DbUtils.GetString(reader, "Description"),
                                StudentId = DbUtils.GetInt(reader, "GoalStudentId"),
                                DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                                GrowthCount = DbUtils.GetInt(reader, "GrowthCount"),
                                CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                                Student = new Student()
                                {
                                    Id = DbUtils.GetInt(reader, "StudentId"),
                                    FirstName = DbUtils.GetString(reader, "FirstName"),
                                    LastName = DbUtils.GetString(reader, "LastName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    ClassId = DbUtils.GetInt(reader, "ClassId"),
                                    ImageUrl = DbUtils.GetString(reader, "ImageUrl")
                                }
                        }


                        //if (DbUtils.IsNotDbNull(reader, "GoalStudentId"))
                        //{
                        //    Student Student = new Student()
                        //    {
                        //        Id = DbUtils.GetInt(reader, "StudentId"),
                        //        FirstName = DbUtils.GetString(reader, "FirstName"),
                        //        LastName=DbUtils.GetString(reader, "LastName"),
                        //        Email = DbUtils.GetString(reader,"Email"),
                        //        ClassId = DbUtils.GetInt(reader, "ClassId"),
                        //        ImageUrl = DbUtils.GetString(reader, "ImageUrl")

                        //    };
                            ;
                        }
                    }
                    reader.Close();
                    return goal;

                }      
                
            }




        }

    }
}
