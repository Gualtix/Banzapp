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
    public class EscuelaController : ApiController
    {
        [HttpGet] // GET: api/ESCUELA
        public IHttpActionResult Get()
        {
            try
            {
                using (BanzdbEntities db = new BanzdbEntities())
                {
                    List<ESCUELA> listadoEscuelas = db.ESCUELA.Select(s => s).ToList();
                    return Ok(listadoEscuelas);
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }

        }

        [HttpGet] // GET: api/ESCUELA/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                using (BanzdbEntities db = new BanzdbEntities())
                {
                    ESCUELA ESCUELAsearch = db.ESCUELA.FirstOrDefault(s => s.id == id);
                    if (ESCUELAsearch != null)
                    {
                        return Ok(ESCUELAsearch);
                    }

                    return NotFound();
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        [HttpPost] // POST: api/ESCUELA
        public IHttpActionResult Post([FromBody] string value)
        {
            try
            {
                ESCUELA newESCUELA = JsonConvert.DeserializeObject<ESCUELA>(value);

                using (BanzdbEntities db = new BanzdbEntities())
                {

                    ESCUELA ESCUELAExistente = db.ESCUELA.FirstOrDefault(c => c.id == newESCUELA.id);
                    if (ESCUELAExistente != null)
                    {
                        ESCUELAExistente.nombre = newESCUELA.nombre;
                        db.SaveChanges();
                    }
                    else
                    {
                        db.ESCUELA.Add(newESCUELA);
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

        [HttpPut]// PUT: api/ESCUELA/5
        public IHttpActionResult Put([FromBody] string value)
        {
            try
            {
                ESCUELA newESCUELA = JsonConvert.DeserializeObject<ESCUELA>(value);

                using (BanzdbEntities db = new BanzdbEntities())
                {


                    ESCUELA ESCUELAExistente = db.ESCUELA.FirstOrDefault(c => c.id == newESCUELA.id);
                    if (ESCUELAExistente != null)
                    {
                        ESCUELAExistente.nombre = newESCUELA.nombre;

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

        [HttpDelete]// DELETE: api/ESCUELA/5
        public IHttpActionResult Delete(int id)
        {
            try
            {

                using (BanzdbEntities db = new BanzdbEntities())
                {

                    ESCUELA ESCUELAExistente = db.ESCUELA.FirstOrDefault(c => c.id == id);
                    if (ESCUELAExistente != null)
                    {
                        db.ESCUELA.Remove(ESCUELAExistente);
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
