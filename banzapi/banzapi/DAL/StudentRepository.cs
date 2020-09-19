using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace banzapi.DAL
{
    public class StudentRepository : IStudentRepository, IDisposable
    {
        public BanzdbEntities Context { get; set; }
        public StudentRepository(BanzdbEntities context)
        {
            this.Context = context;
        }



        public bool InsertStudent(ESTUDIANTE student)
        {
            this.Context.ESTUDIANTE.Add(student);
            this.Context.SaveChanges();
            return true;
        }

        public void Save()
        {
            this.Context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    Context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public ESTUDIANTE findById(int carnet)
        {
            return this.Context.ESTUDIANTE.Find(carnet);
        }

        public IList<ESTUDIANTE> findAll()
        {
            return this.Context.ESTUDIANTE.ToList();
        }
    }
}