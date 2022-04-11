using GrowPath.Models;
using GrowPath.Utils;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;


namespace GrowPath.Repositories
{
    public class FlowerRepository : BaseRepository, IFlowerRepository
    {
        public FlowerRepository(IConfiguration configuration) : base(configuration) { }


        public List<Flower> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT Id, GoalId, Note, DateAdded FROM Flower
                     
                            ";

                  

                    var reader = cmd.ExecuteReader();

                    var flowers = new List<Flower>();
                    while (reader.Read())
                    {
                        flowers.Add(new Flower()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            GoalId = DbUtils.GetInt(reader, "GoalId"),
                            Note = DbUtils.GetString(reader, "Note"),
                            DateAdded = DbUtils.GetDateTime(reader, "DateAdded")

                        });


                    }
                    reader.Close();

                    return flowers;
                }
            }
        }

        //END GET ALL 

        public Flower GetByFlowerId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())

                {
                    cmd.CommandText = @"
                     SELECT  Id, GoalId, Note, DateAdded
                    FROM Flower
                    WHERE Id = @Id
                                ";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();

                    Flower flower = null;
                    while (reader.Read())
                    {
                        if (flower == null)
                        {
                            flower = new Flower()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                GoalId = DbUtils.GetInt(reader, "GoalId"),
                                Note = DbUtils.GetString(reader, "Note"),
                                DateAdded = DbUtils.GetDateTime(reader, "DateAdded")

                            };
                        }
                    }
                    reader.Close();
                    return flower;
                }
            }
        }

        //END GetByFlowerId

        public List<Flower> GetByUser(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())

                {
                    cmd.CommandText = @"
                    SELECT  f.Id, f.GoalId, f.Note, f.DateAdded, f.UserId, g.CategoryId
                    FROM Flower f
                    JOIN Goal g ON f.GoalId = g.Id
                    WHERE f.UserId = @Id
                                ";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();

                    var flowers = new List<Flower>();
                    while (reader.Read())
                    {
                        
                       
                            flowers.Add(new Flower()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                GoalId = DbUtils.GetInt(reader, "GoalId"),
                                Note = DbUtils.GetString(reader, "Note"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                GoalCategoryId = DbUtils.GetInt(reader, "CategoryId"),
                                DateAdded = DbUtils.GetDateTime(reader, "DateAdded")

                            });
                        
                    }
                    reader.Close();
                    return flowers;
                }
            }
        }

        public List<Flower> GetByCourseId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT f.Id AS FlowerId, f.GoalId, f.Note, f.DateAdded, g.Title, g.Id AS GoalId, g.CategoryId, g.StudentId, s.ClassId
                    FROM Flower f
                    JOIN Goal g ON f.GoalId = g.id
                    JOIN  Student s ON s.Id = g.StudentId
                    JOIN  Course c ON s.classId = c.Id
                    WHERE c.Id = @Id";
                    


                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();

                    var flowers = new List<Flower>();
                    while (reader.Read())
                    {
                        flowers.Add(new Flower()
                        {
                            Id = DbUtils.GetInt(reader, "FlowerId"),
                            GoalId = DbUtils.GetInt(reader, "GoalId"),
                            GoalCategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            Note = DbUtils.GetString(reader, "Note"),
                            DateAdded = DbUtils.GetDateTime(reader, "DateAdded")

                        });


                    }
                    reader.Close();

                    return flowers;
                }
            }
        }

        //END GET BY COURSE ID

        public List<Flower> GetByGoalId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
               SELECT f.Id AS FlowerId, f.GoalId AS FlowerGoalId, f.Note, f.DateAdded, g.Id AS GoalId 
                    FROM Flower f
                    JOIN Goal g ON f.GoalId = g.id
                    WHERE f.GoalId = @Id
                       ORDER BY f.Id DESC";



                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();

                    var flowers = new List<Flower>();
                    while (reader.Read())
                    {
                        flowers.Add(new Flower()
                        {
                            Id = DbUtils.GetInt(reader, "FlowerId"),
                            GoalId = DbUtils.GetInt(reader, "FlowerGoalId"),
                            Note = DbUtils.GetString(reader, "Note"),
                            DateAdded = DbUtils.GetDateTime(reader, "DateAdded")

                        }); 


                    }
                    reader.Close();

                    return flowers;
                }
            }
        }


        //END GET BY GOAL ID

        public void Add(Flower flower)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Flower (GoalId, Note, DateAdded, UserId)
                        OUTPUT INSERTED.ID
                        VALUES (@GoalId, @Note, @DateAdded, @UserId)
                                 ";


                    DbUtils.AddParameter(cmd, "@GoalId", flower.GoalId);
                    DbUtils.AddParameter(cmd, "@Note", flower.Note);
                    DbUtils.AddParameter(cmd, "@DateAdded", flower.DateAdded);
                    DbUtils.AddParameter(cmd, "UserId", flower.UserId);
                   

                    flower.Id = (int)cmd.ExecuteScalar();

                }
            }
        }

        //END ADD FLOWER

        public void Update(Flower flower)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Flower 
                        SET  GoalId = @GoalId, 
                             Note = @Note,
                            DateAdded = @DateAdded
                        WHERE Id = @Id
                                 ";


                    DbUtils.AddParameter(cmd, "@GoalId", flower.GoalId);
                    DbUtils.AddParameter(cmd, "@Note", flower.Note);
                    DbUtils.AddParameter(cmd, "@DateAdded", flower.DateAdded);
                    DbUtils.AddParameter(cmd, "@Id", flower.Id);


                    cmd.ExecuteNonQuery();

                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Flower WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
