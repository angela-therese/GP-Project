using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GrowPath.Repositories;

namespace GrowPath.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoalController : ControllerBase
    {
        private readonly IGoalRepository _goalRepository;

        public GoalController(IGoalRepository goalRepository)
        {
            _goalRepository = goalRepository;
        }


        [HttpGet("GetById")]
        public IActionResult GetByIdWithCourses(int id)
        {
            var goal = _goalRepository.GetById(id);
            if (goal == null)
            {
                return NotFound();
            }
            return Ok(goal);
        }

    }
}
