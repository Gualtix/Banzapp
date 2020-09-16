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
        [TestMethod]
        public void TestMethod1()
        {
            var context = new BanzdbEntities();
            var mockRepository = new Mock<StudentRepository>(context);
            var controller = new AdminController(mockRepository.Object);

            var model = new ESTUDIANTE()
            {
                carnet = 2014,
                nombre = "aldo perez",
                email = "abc@gmail.com",
                passw = "1234",
                fk_escuela = 1
            };

            IHttpActionResult actionResult = controller.PostResgistro(model);
            var createdResult = actionResult as CreatedAtRouteNegotiatedContentResult<ESTUDIANTE>;

            Assert.IsNotNull(createdResult);
            Assert.AreEqual("DefaultApi", createdResult.RouteName);
            Assert.AreEqual(model.email, createdResult.RouteValues["email"]);
        }
    }
}
