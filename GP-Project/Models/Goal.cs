using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GrowPath.Models
{
    public class Goal
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int StudentId { get; set; }
        public DateTime DateCreated { get; set; }
        public int GrowthCount { get; set; }
        public int CategoryId { get; set; }
        

    }
}
