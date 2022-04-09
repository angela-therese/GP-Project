using GrowPath.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GrowPath.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoalCategoryController : ControllerBase
    {
        private readonly IGoalCategoryRepository _goalCategoryRepository;

        public GoalCategoryController(IGoalCategoryRepository goalCategoryRepository)
        {
            _goalCategoryRepository = goalCategoryRepository;
        }



        [HttpGet]
        public IActionResult GetAll()
        {

            return Ok(_goalCategoryRepository.GetAll());
        }


        [HttpGet("GetAllWithGoals")]
        public IActionResult GetAllWithGoals(int id)
        {
            return Ok(_goalCategoryRepository.GetAllWithGoals(id));
        }

        [HttpGet("GetByCourseWithGoals")]
        public IActionResult GetByIdWithGoals(int id)
        {
            return Ok(_goalCategoryRepository.GetByCourseWithGoals(id));
        }

    }
}
