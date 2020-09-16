using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace banzapi.DAL
{
    public interface IStudentRepository : IDisposable
    {
        void InsertStudent(ESTUDIANTE student);
        void Save();
    }
}