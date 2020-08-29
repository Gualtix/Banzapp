using banzapi.DAL;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace banzapi.Controllers
{
    public class EstudianteController : ApiController
    {

        [HttpGet] // GET: api/ESTUDIANTE
        public IHttpActionResult Get()
        {
            try
            {
                using (BanzdbEntities db = new BanzdbEntities())
                {
                    List<ESTUDIANTE> listadoESTUDIANTEs = db.ESTUDIANTE.Select(s => s).ToList();
                    return Ok(listadoESTUDIANTEs);
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }

        }

        [HttpGet] // GET: api/ESTUDIANTE/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                using (BanzdbEntities db = new BanzdbEntities())
                {
                    ESTUDIANTE ESTUDIANTEsearch = db.ESTUDIANTE.FirstOrDefault(s => s.carnet == id);
                    if (ESTUDIANTEsearch != null)
                    {
                        return Ok(ESTUDIANTEsearch);
                    }

                    return NotFound();
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        [HttpPost] // POST: api/ESTUDIANTE
        public IHttpActionResult Post([FromBody] string value)
        {
            try
            {
                ESTUDIANTE newESTUDIANTE = JsonConvert.DeserializeObject<ESTUDIANTE>(value);

                using (BanzdbEntities db = new BanzdbEntities())
                {

                    ESTUDIANTE ESTUDIANTEExistente = db.ESTUDIANTE.FirstOrDefault(c => c.carnet == newESTUDIANTE.carnet);
                    if (ESTUDIANTEExistente != null)
                    {
                        ESTUDIANTEExistente.nombre = newESTUDIANTE.nombre;
                        ESTUDIANTEExistente.email = newESTUDIANTE.email;
                        ESTUDIANTEExistente.passw = newESTUDIANTE.passw;

                        db.SaveChanges();
                    }
                    else
                    {
                        db.ESTUDIANTE.Add(newESTUDIANTE);
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

        [HttpPut]// PUT: api/ESTUDIANTE/5
        public IHttpActionResult Put([FromBody] string value)
        {
            try
            {
                ESTUDIANTE newESTUDIANTE = JsonConvert.DeserializeObject<ESTUDIANTE>(value);

                using (BanzdbEntities db = new BanzdbEntities())
                {


                    ESTUDIANTE ESTUDIANTEExistente = db.ESTUDIANTE.FirstOrDefault(c => c.carnet == newESTUDIANTE.carnet);
                    if (ESTUDIANTEExistente != null)
                    {
                        ESTUDIANTEExistente.nombre = newESTUDIANTE.nombre;
                        ESTUDIANTEExistente.email = newESTUDIANTE.email;
                        ESTUDIANTEExistente.passw = newESTUDIANTE.passw;

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

        [HttpDelete]// DELETE: api/ESTUDIANTE/5
        public IHttpActionResult Delete(int id)
        {
            try
            {

                using (BanzdbEntities db = new BanzdbEntities())
                {

                    ESTUDIANTE ESTUDIANTEExistente = db.ESTUDIANTE.FirstOrDefault(c => c.carnet == id);
                    if (ESTUDIANTEExistente != null)
                    {
                        db.ESTUDIANTE.Remove(ESTUDIANTEExistente);
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

