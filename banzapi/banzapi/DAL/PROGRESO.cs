//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace banzapi.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class PROGRESO
    {
        public int id { get; set; }
        public int nota { get; set; }
        public int valoracion { get; set; }
        public string comenario { get; set; }
        public int fk_estudiante { get; set; }
    
        public virtual ESTUDIANTE ESTUDIANTE { get; set; }
    }
}
