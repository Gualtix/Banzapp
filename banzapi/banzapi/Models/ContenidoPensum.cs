using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace banzapi.Models
{
    public class ContenidoPensum
    {

        public int id { get; set; }
        public int fk_pensum { get; set; }
        public int fk_curso { get; set; }
        public int gana_credito { get; set; }
        public int no_semestre { get; set; }
        public bool obligatorio { get; set; }
        public int codigo { get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }

    }
}