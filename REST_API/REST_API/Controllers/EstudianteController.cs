using System.Collections.Generic;
using System.Web.Http;

namespace REST_API.Controllers
{
    public class EstudianteController : ApiController
    {
        // GET: api/Estudiante
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Estudiante/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Estudiante
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Estudiante/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Estudiante/5
        public void Delete(int id)
        {
        }
    }
}
