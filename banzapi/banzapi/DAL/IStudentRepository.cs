using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace banzapi.DAL
{
    public interface IStudentRepository : IDisposable
    {
        ESTUDIANTE findById(int carnet);
        bool InsertStudent(ESTUDIANTE student);
        void Save();

        IList<ESTUDIANTE> findAll();
    }
}