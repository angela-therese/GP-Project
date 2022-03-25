using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using GrowPath.Models;
using GrowPath.Utils;

namespace GrowPath.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

   
        public UserProfile GetByIdWithCourses(int id)
        {
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"SELECT 
                        c.Id AS CourseId, c.Name AS CourseName, c.DateCreated AS CourseDateCreated,
                        up.Id AS UserProfileId, up.FirstName AS UserFirstName, up.LastName AS UserLastName, up.Email, up.ImageUrl AS UserImage, up.DateCreated AS ProfileDateCreated
                           
                          FROM UserProfile up
                            FULL JOIN Course c  on up.Id = c.UserProfileId
                            WHERE up.Id  = @Id";


                        DbUtils.AddParameter(cmd, "@Id", id);

                        var reader = cmd.ExecuteReader();

                        UserProfile userProfile = null;
                        while (reader.Read())
                        {
                            if (userProfile == null)
                            {
                                userProfile = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserProfileId"),
                                    FirstName = DbUtils.GetString(reader, "UserFirstName"),
                                    LastName = DbUtils.GetString(reader, "UserLastName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    ImageUrl = DbUtils.GetString(reader, "UserImage"),
                                    DateCreated = DbUtils.GetDateTime(reader, "ProfileDateCreated"),
                                    Courses = new List<Course>()
                                };

                            }

                            if (DbUtils.IsNotDbNull(reader, "CourseId"))
                            {
                                userProfile.Courses.Add(new Course()
                                {
                                    Id = DbUtils.GetInt(reader, "CourseId"),
                                    Name = DbUtils.GetString(reader, "CourseName"),
                                    DateCreated = DbUtils.GetDateTime(reader, "CourseDateCreated"),
                                    UserProfileId = DbUtils.GetInt(reader, "UserProfileId")

                                });
                            }
                        }



                        reader.Close();

                        return userProfile;
                    }
                }
            }
        }


        public UserProfile GetByEmail(string email)
        {
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"SELECT 
                        c.Id AS CourseId, c.Name AS CourseName, c.DateCreated AS CourseDateCreated,
                        up.Id AS UserProfileId, up.FirstName AS UserFirstName, up.LastName AS UserLastName, up.Email, up.ImageUrl AS UserImage, up.DateCreated AS ProfileDateCreated
                           
                          FROM UserProfile up
                            FULL JOIN Course c  on up.Id = c.UserProfileId
                            WHERE up.email  = @Email";


                        DbUtils.AddParameter(cmd, "@Email", email);

                        var reader = cmd.ExecuteReader();

                        UserProfile userProfile = null;
                        while (reader.Read())
                        {
                            if (userProfile == null)
                            {
                                userProfile = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserProfileId"),
                                    FirstName = DbUtils.GetString(reader, "UserFirstName"),
                                    LastName = DbUtils.GetString(reader, "UserLastName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    ImageUrl = DbUtils.GetString(reader, "UserImage"),
                                    DateCreated = DbUtils.GetDateTime(reader, "ProfileDateCreated"),
                                    Courses = new List<Course>()
                                };

                            }

                            if (DbUtils.IsNotDbNull(reader, "CourseId"))
                            {
                                userProfile.Courses.Add(new Course()
                                {
                                    Id = DbUtils.GetInt(reader, "CourseId"),
                                    Name = DbUtils.GetString(reader, "CourseName"),
                                    DateCreated = DbUtils.GetDateTime(reader, "CourseDateCreated"),
                                    UserProfileId = DbUtils.GetInt(reader, "UserProfileId")

                                });
                            }
                        }



                        reader.Close();

                        return userProfile;
                    }
                }
            }
        }





    }


}