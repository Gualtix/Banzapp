using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using banzapi.CORS;
using banzapi.DAL;
using banzapi.Models;
using Newtonsoft.Json;

namespace banzapi.Controllers
{
    [AllowCrossSite]
    public class AdminController : ApiController
    {
        [HttpPost] // POST: api/ESTUDIANTE
        [Route("api/Admin/Login")]
        public IHttpActionResult Post(FormDataCollection  form)
        {
            try
            {
                int carnet = int.Parse(form.Get("Carnet"));
                string contra = form.Get("Contra");

                using (BanzdbEntities db = new BanzdbEntities())
                {

                    var ESTUDIANTEExistente = db.ESTUDIANTE.Select(es=> new {es.nombre, es.carnet, es.email, es.passw}).Where(c => c.carnet == carnet && c.passw == contra);
                    if (ESTUDIANTEExistente != null)
                    {
                        return Ok(JsonConvert.SerializeObject(ESTUDIANTEExistente));
                    }

                    return NotFound();
                }

            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        StudentRepository repository;

        public AdminController(StudentRepository repository) {
            this.repository = repository;
        }

        public AdminController() {
            this.repository = new StudentRepository(new BanzdbEntities());
        }

        [HttpPost] // POST: api/Estudiante 
        [Route("api/Admin/Registro")]
        public IHttpActionResult PostResgistro(ESTUDIANTE student)
        {
            if (String.IsNullOrWhiteSpace(student.email)) {
                return BadRequest("El email es requerido");
            }

            if (student.carnet <= 0) {
                return BadRequest("Número de carnet inválido");
            }

            if (repository.findById(student.carnet) != null) {
                return BadRequest("El estudiante ya existe");
            }

            repository.InsertStudent(student);
            String result = "estudiante registrado";
            return Ok(result);
        }
    }
}
