using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using GrowPath.Models;
using GrowPath.Utils;

namespace GrowPath.Repositories
{
    public class StudentRepository : BaseRepository, IStudentRepository
    {
        public StudentRepository(IConfiguration configuration) : base(configuration) { }


        public Student GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT s.Id, s.FirstName, s.LastName, s.Email, s.ClassId, s.ImageUrl, g.Id AS GoalId, g.Title, g.Description, g.StudentId, g.DateCreated, g.CategoryId
                     FROM Student s
                     LEFT JOIN Goal g on s.Id = g.StudentId
                     WHERE s.Id = @Id
                                                ";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Student student = null;
                    while (reader.Read())
                    {
                        if (student == null)
                        {
                            student = new Student()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                ClassId = DbUtils.GetInt(reader, "ClassId"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                Goals = new List<Goal>()
                            };

                        }

                        if (DbUtils.IsNotDbNull(reader, "GoalId"))
                        {
                            student.Goals.Add(new Goal()
                            {
                                Id = DbUtils.GetInt(reader, "GoalId"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Description = DbUtils.GetString(reader, "Description"),
                                StudentId = DbUtils.GetInt(reader, "StudentId"),
                                DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                                CategoryId = DbUtils.GetInt(reader, "CategoryId")

                            });
                        }
                    }

                    reader.Close();

                    return student;
                }
            }
        }


    }
}

