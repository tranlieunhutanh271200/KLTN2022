using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student.API.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class StudentController: ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllStudent()
        {
            return Ok();
        }
        [HttpGet("{id:string}")]
        public async Task<IActionResult> GetStudent(string studentId)
        {
            return Ok();
        }
        [HttpPost]
        public async Task<IActionResult> CreateStudent(Models.Student student)
        {
            return Ok();
        }
    }
}
