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
    using System.ComponentModel.DataAnnotations;

    public partial class ESTUDIANTE
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ESTUDIANTE()
        {
            this.PROGRESO = new HashSet<PROGRESO>();
        }
    
        [Key]
        public int carnet { get; set; }
        public string nombre { get; set; }
        public string passw { get; set; }
        public string email { get; set; }
        public int fk_escuela { get; set; }
    
        public virtual ESCUELA ESCUELA { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PROGRESO> PROGRESO { get; set; }
    }
}
