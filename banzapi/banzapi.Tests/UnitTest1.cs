using System;
using banzapi.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using banzapi.DAL;
using banzapi.Models;
using Moq;
using System.Web.Http;
using System.Web.Http.Results;

namespace banzapi.Tests
{
    [TestClass]
    public class UnitTest1
    {

        public UnitTest1()
        {

            // create some mock students to play with
            IList<ESTUDIANTE> es = new List<ESTUDIANTE>
            {
                new ESTUDIANTE { carnet = 2, email = "abc@gmail.com", nombre = "aldo perez", passw = "1234", fk_escuela = 1 }
            };

            // Mock the Students Repository using Moq
            Mock<IStudentRepository> mockStudentRepository = new Mock<IStudentRepository>();

            // return a student by Id
            mockStudentRepository.Setup(mr => mr.findById(
                It.IsAny<int>())).Returns((int i) => es.Where(x => x.carnet == i).Single<ESTUDIANTE>());

            // Allows us to test saving a student
            mockStudentRepository.Setup(mr => mr.InsertStudent(It.IsAny<ESTUDIANTE>())).Returns(
                (ESTUDIANTE target) =>
                {
                    es.Add(target);
                    return true;
                });

            // Return all the students
            mockStudentRepository.Setup(mr => mr.findAll()).Returns(es);

            // Complete the setup of our Mock Student Repository
            this.MockStudentRepository = mockStudentRepository.Object;
        }

        public IStudentRepository MockStudentRepository;

        [TestMethod]
        public void CanReturnStudentById()
        {
            // Try finding a student by id
            ESTUDIANTE testStudent = this.MockStudentRepository.findById(2);

            Assert.IsNotNull(testStudent); // Test if null
            Assert.IsInstanceOfType(testStudent, typeof(ESTUDIANTE)); // Test type
            Assert.AreEqual("aldo perez", testStudent.nombre); // Verify it is the right student
        }

        [TestMethod]
        public void CanInsertStudent()
        {
            // Create a new student, not I do not supply an id
            ESTUDIANTE newProduct = new ESTUDIANTE { carnet = 3, email = "abc@gmail.com", nombre = "miguelito mosck", passw = "1234", fk_escuela = 1 };

            int studentCount = this.MockStudentRepository.findAll().Count;
            Assert.AreEqual(1, studentCount); // Verify the expected Number pre-insert

            // try saving our new student
            this.MockStudentRepository.InsertStudent(newProduct);

            // demand a recount
            studentCount = this.MockStudentRepository.findAll().Count;
            Assert.AreEqual(2, studentCount); // Verify the expected Number post-insert

            // verify that our new product has been saved
            ESTUDIANTE testStudent = this.MockStudentRepository.findById(3);
            Assert.IsNotNull(testStudent); // Test if null
            Assert.IsInstanceOfType(testStudent, typeof(ESTUDIANTE)); // Test type
            Assert.AreEqual(3, testStudent.carnet); // Verify it has the expected studentId
        }
    }
}
