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
    public class FacultadController : ApiController
    {

        [HttpGet] // GET: api/FACULTAD
        public IHttpActionResult Get()
        {
            try
            {
                using (BanzdbEntities db = new BanzdbEntities())
                {
                    var listadoFACULTADs = db.FACULTAD.Select(s => new {s.nombre, s.id}).ToList();
                    return Ok(listadoFACULTADs);
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }

        }

        [HttpGet] // GET: api/FACULTAD/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                using (BanzdbEntities db = new BanzdbEntities())
                {
                    FACULTAD FACULTADsearch = db.FACULTAD.FirstOrDefault(s => s.id == id);
                    if (FACULTADsearch != null)
                    {
                        return Ok(FACULTADsearch);
                    }

                    return NotFound();
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        [HttpPost] // POST: api/FACULTAD
        public IHttpActionResult Post([FromBody] string value)
        {
            try
            {
                FACULTAD newFACULTAD = JsonConvert.DeserializeObject<FACULTAD>(value);

                using (BanzdbEntities db = new BanzdbEntities())
                {

                    FACULTAD FACULTADExistente = db.FACULTAD.FirstOrDefault(c => c.id == newFACULTAD.id);
                    if (FACULTADExistente != null)
                    {
                        FACULTADExistente.nombre = newFACULTAD.nombre;

                        db.SaveChanges();
                    }
                    else
                    {
                        db.FACULTAD.Add(newFACULTAD);
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

        [HttpPut]// PUT: api/FACULTAD/5
        public IHttpActionResult Put([FromBody] string value)
        {
            try
            {
                FACULTAD newFACULTAD = JsonConvert.DeserializeObject<FACULTAD>(value);

                using (BanzdbEntities db = new BanzdbEntities())
                {


                    FACULTAD FACULTADExistente = db.FACULTAD.FirstOrDefault(c => c.id == newFACULTAD.id);
                    if (FACULTADExistente != null)
                    {
                        FACULTADExistente.nombre = newFACULTAD.nombre;

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

        [HttpDelete]// DELETE: api/FACULTAD/5
        public IHttpActionResult Delete(int id)
        {
            try
            {
                using (BanzdbEntities db = new BanzdbEntities())
                {
                    FACULTAD FACULTADExistente = db.FACULTAD.FirstOrDefault(c => c.id == id);
                    if (FACULTADExistente != null)
                    {
                        db.FACULTAD.Remove(FACULTADExistente);
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
