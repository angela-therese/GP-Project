using GrowPath.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace GrowPath.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }




        [HttpGet("GetByEmail")]
        public IActionResult GetByEmail(string email)
        {
            var profile = _userProfileRepository.GetByEmail(email);
            if (profile == null)
            {
                return NotFound();
            }
            return Ok(profile);
        }


        [HttpGet("GetByIdWithCourses")]
        public IActionResult GetByIdWithCourses(int id)
        {
            var profile = _userProfileRepository.GetByIdWithCourses(id);
            if (profile == null)
            {
                return NotFound();
            }
            return Ok(profile);
        }

    }
}
