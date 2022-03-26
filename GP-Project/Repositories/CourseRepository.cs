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
    public class CourseRepository : BaseRepository, ICourseRepository
    {
        public CourseRepository(IConfiguration configuration) : base(configuration) { }


        //GET BY COURSE ID FOR COURSE DETAILS PAGE WITH STUDENTS LISTED
        public Course GetByIdWithStudents(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT c.Id AS CourseId, c.Name AS CourseName, c.DateCreated, c.UserProfileId, c.ArchiveStatus, s.Id AS StudentId, s.FirstName, s.LastName, s.Email AS StudentEmail,  s.ClassId 
                     FROM Course c 
                     LEFT JOIN Student s on c.Id = s.ClassId
                     WHERE c.Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Course course = null;
                    while (reader.Read())
                    {
                        if (course == null)
                        {
                            course = new Course()
                            {
                                Id = DbUtils.GetInt(reader, "CourseId"),
                                Name = DbUtils.GetString(reader, "CourseName"),
                                DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                                ArchiveStatus = DbUtils.GetInt(reader, "ArchiveStatus"),
                                Students = new List<Student>()
                            };

                        }

                        if (DbUtils.IsNotDbNull(reader, "StudentId"))
                        {
                            course.Students.Add(new Student()
                            {
                                Id = DbUtils.GetInt(reader, "StudentId"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "StudentEmail"),
                                ClassId = DbUtils.GetInt(reader, "ClassId")

                            });
                        }
                    }

                    reader.Close();

                    return course;
                }
            }
        }


    }
}

