using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GrowPath.Repositories;
using GrowPath.Models;

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


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_goalRepository.GetAll());
        }

        [HttpGet ("GetGoalsByCourse")]
        public IActionResult GetGoalsByCourse(int id)
        {
            return Ok(_goalRepository.GetGoalsByCourse(id));
        }


        [HttpGet("GetAllByUserId")]
        public IActionResult GetAllByUserId(int id)
        {
            return Ok(_goalRepository.GetAllByUserId(id));
        }


        [HttpGet("GetGoal")]
        public IActionResult GetById(int id)
        {
            var goal = _goalRepository.GetById(id);
            if (goal == null)
            {
                return NotFound();
            }
            return Ok(goal);
        }

        [HttpPost]
        public IActionResult Post(Goal goal)
        {
            _goalRepository.Add(goal);
            return CreatedAtAction("GetById", new { id = goal.Id }, goal);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Goal goal)
        {
            if (id != goal.Id)
            {
                return BadRequest();
            }

            _goalRepository.Update(goal);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _goalRepository.Delete(id);
            return NoContent();
        }


    }
}
