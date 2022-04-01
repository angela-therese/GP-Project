using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GrowPath.Repositories;

namespace GP_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlowerController : ControllerBase
    {
        private readonly IFlowerRepository _flowerRepository;

        public FlowerController(IFlowerRepository flowerRepository)
        {
            _flowerRepository = flowerRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_flowerRepository.GetAll());
        }

        [HttpGet("GetByCourse")]
        public IActionResult GetById(int id)
        {
            var flower = _flowerRepository.GetByCourseId(id);
            if (flower == null)
            {
                return NotFound();
            }
            return Ok(flower);
        }

        [HttpGet("GetByGoal")]
        public IActionResult GetByGoalId(int id)
        {
            var flower = _flowerRepository.GetByGoalId(id);
            if (flower == null)
            {
                return NotFound();
            }
            return Ok(flower);
        }


    }
}
