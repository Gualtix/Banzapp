using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using banzapi.DAL;
using banzapi.Models;
using Newtonsoft.Json;

namespace banzapi.Controllers
{
    public class PensumController : ApiController
    {
        [HttpGet]
        [Route("api/PensumSemestre/{idPensum}/{idSemestre}")]
        public IHttpActionResult Get(string idPensum, string idSemestre)
        {
            try
            {
                int fkPensum = int.Parse(idPensum);
                int fkSemestre = int.Parse(idSemestre);
                List<Semestre> contenidoPensum = new List<Semestre>();

                using (BanzdbEntities db = new BanzdbEntities())
                {
                    var semestres = db.DETALLE_PENSUM.Select(ps => new {
                        id = ps.id,
                        fk_pensum = ps.fk_pensum,
                        gana_credito = ps.gana_credito,
                        obligatorio = ps.obligatorio,
                        nombre = ps.CURSO.nombre,
                        codigo = ps.CURSO.codigo,
                        semestre = ps.no_semestre,
                        descripcion = ps.CURSO.descripcion,
                    }).Where(ps=> ps.fk_pensum == fkPensum && ps.semestre == fkSemestre).OrderBy(sm=>sm.id).ToList();

                    return Ok(JsonConvert.SerializeObject(semestres));
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
