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
    public class CourseController : ControllerBase
    {
        private readonly ICourseRepository _courseRepository;
        public CourseController(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
        }


        [HttpGet("GetByIdWithStudents")]
        public IActionResult GetByIdWithCourses(int id)
        {
            var course = _courseRepository.GetByIdWithStudents(id);
            if (course == null)
            {
                return NotFound();
            }
            return Ok(course);
        }




    }
}
