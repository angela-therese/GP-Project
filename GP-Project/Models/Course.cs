using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GrowPath.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateCreated { get; set; }
        public int UserProfileId { get; set; }
        public int ArchiveStatus { get; set; }
        public List<Student> Students {get; set;}

    }
}
