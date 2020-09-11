using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using banzapi.DAL;
using Newtonsoft.Json;

namespace banzapi.Controllers
{
    public class CursoController : ApiController
    {
        [HttpGet] // GET: api/Curso
        public IHttpActionResult Get()
        {
            try
            {
                using (BanzdbEntities db = new BanzdbEntities())
                {
                    var listadoCursos = db.CURSO.Select(s => new {s.descripcion, s.nombre,s.codigo}).ToList();
                    return Ok(JsonConvert.SerializeObject(listadoCursos));
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
            
        }


        [HttpGet] // GET: api/Curso/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                using (BanzdbEntities db = new BanzdbEntities())
                {
                    CURSO cursoBuscado = db.CURSO.FirstOrDefault(s => s.codigo == id);
                    if (cursoBuscado != null)
                    {
                        return Ok(cursoBuscado);
                    }

                    return NotFound();
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        [HttpGet] // GET: api/Curso/5
        [Route("api/Pensum/{idPensum}/Curso/{idCurso}")]
        public IHttpActionResult GetCursoPrerrequisito(string idCurso, string idPensum)
        {
            try
            {
                int fkCurso = int.Parse(idCurso);
                int fkPensum = int.Parse(idPensum);
                using (BanzdbEntities db = new BanzdbEntities())
                {
                    var cursosPre = db.PRERREQUISITO
                        .Select(pr => new {pr.CURSO.nombre, pr.CURSO.codigo, pr.CURSO.descripcion, pr.DETALLE_PENSUM.fk_curso, pr.DETALLE_PENSUM.fk_pensum})
                        .Where(pr => pr.fk_curso == fkCurso && pr.fk_pensum == fkPensum).ToList();
                    if (cursosPre.Any())
                    {
                        return Ok(JsonConvert.SerializeObject(cursosPre));
                    }

                    return NotFound();
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        [HttpPost] // POST: api/Curso
        public IHttpActionResult Post([FromBody]string value)
        {
            try
            {
                CURSO nuevoCurso = JsonConvert.DeserializeObject<CURSO>(value);

                using (BanzdbEntities db = new BanzdbEntities())
                {

                    CURSO cursoExistente = db.CURSO.FirstOrDefault(c => c.codigo == nuevoCurso.codigo);
                    if (cursoExistente != null)
                    {
                        cursoExistente.descripcion = nuevoCurso.descripcion;
                        cursoExistente.nombre = nuevoCurso.nombre;
                        db.SaveChanges();
                    }
                    else
                    {
                        db.CURSO.Add(nuevoCurso);
                        db.SaveChanges();
                    }

                    return Ok();
                }
                
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        [HttpPut]// PUT: api/Curso/5
        public IHttpActionResult Put([FromBody]string value)
        {
            try
            {
                CURSO nuevoCurso = JsonConvert.DeserializeObject<CURSO>(value);

                using (BanzdbEntities db = new BanzdbEntities())
                {


                    CURSO cursoExistente = db.CURSO.FirstOrDefault(c => c.codigo == nuevoCurso.codigo);
                    if (cursoExistente != null)
                    {
                        cursoExistente.descripcion = nuevoCurso.descripcion;
                        cursoExistente.nombre = nuevoCurso.nombre;
                        db.SaveChanges();
                        return Ok();
                    }
                        
                    return NotFound();
                }

            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        [HttpDelete] // DELETE: api/Curso/5
        public IHttpActionResult Delete(int id)
        {
            try
            {
                
                using (BanzdbEntities db = new BanzdbEntities())
                {

                    CURSO cursoExistente = db.CURSO.FirstOrDefault(c => c.codigo == id);
                    if (cursoExistente != null)
                    {
                        db.CURSO.Remove(cursoExistente);
                        db.SaveChanges();
                        return Ok();
                    }

                    return NotFound();
                }

            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

    }
}
