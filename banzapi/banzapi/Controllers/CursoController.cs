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
                    List<CURSO> listadoCursos = db.CURSO.Select(s => s).ToList();
                    return Ok(listadoCursos);
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
                        cursoExistente.creditos = nuevoCurso.creditos;
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
                        cursoExistente.creditos = nuevoCurso.creditos;
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
