using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GrowPath.Models
{
    public class Flower
    {
        public int Id { get; set; }
        public int GoalId { get; set; }
        public int GoalCategoryId { get; set; }
        public int UserId { get; set; }
        public string Note { get; set; }
        public DateTime DateAdded { get; set; }
    }
}
