using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;
using banzapi.DAL;

namespace banzapi.Models
{
    public class Semestre
    {
        public int numero { get; set; }
        public List<ContenidoPensum> cursos { get; set; }
    }
}