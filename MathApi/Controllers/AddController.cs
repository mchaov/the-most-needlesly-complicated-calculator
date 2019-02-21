using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Add.Controllers
{
    [Route("api/add")]
    [ApiController]
    public class AddController : ControllerBase
    {
        [HttpGet()]
        public ActionResult<string> Get()
        {
            return 0.ToString();
        }

        // GET api/Add/5
        [HttpGet("{num1}")]
        public ActionResult<string> Get(float num1)
        {
            return num1.ToString();
        }

        // GET api/Add/5,6
        [HttpGet("{num1},{num2}")]
        public ActionResult<string> Get(float num1, float num2)
        {
            float sum = num1 + num2;
            return sum.ToString();
        }
    }
}
