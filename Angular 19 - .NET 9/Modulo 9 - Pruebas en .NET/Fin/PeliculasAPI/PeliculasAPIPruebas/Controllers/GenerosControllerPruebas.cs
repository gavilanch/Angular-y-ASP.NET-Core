using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.EntityFrameworkCore;
using NSubstitute;
using PeliculasAPI.Controllers;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;
using PeliculasAPIPruebas.Dobles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeliculasAPIPruebas.Controllers
{
    [TestClass]
    public sealed class GenerosControllerPruebas: BasePruebas
    {
        [TestMethod]
        public async Task Get_DevuelveTodosLosGeneros()
        {
            // Preparación
            var nombreBD = Guid.NewGuid().ToString();
            var contexto = ConstruirContext(nombreBD);
            var mapper = ConfigurarAutoMapper();
            IOutputCacheStore outputCacheStore = null!;

            contexto.Generos.Add(new Genero() { Nombre = "Género 1" });
            contexto.Generos.Add(new Genero() { Nombre = "Género 2" });
            await contexto.SaveChangesAsync();

            var contexto2 = ConstruirContext(nombreBD);
            var controller = new GenerosController(outputCacheStore, contexto2, mapper);

            // Prueba
            var respuesta = await controller.Get();

            // Verificación
            Assert.AreEqual(expected: 2, actual: respuesta.Count);
        }

        [TestMethod]
        public async Task Get_DebeDevolver404_CuandoGeneroConIdNoExiste()
        {
            // Preparación
            var nombreBD = Guid.NewGuid().ToString();
            var contexto = ConstruirContext(nombreBD);
            var mapper = ConfigurarAutoMapper();
            IOutputCacheStore outputCacheStore = null!;

            var controller = new GenerosController(outputCacheStore, contexto, mapper);

            var id = 1;

            // Prueba
            var respuesta = await controller.Get(id);

            // Verificación
            var resultado = respuesta.Result as StatusCodeResult;
            Assert.AreEqual(expected: 404, actual: resultado!.StatusCode);
        }

        [TestMethod]
        public async Task Get_DebeDevolverGeneroCorrecto_CuandoGeneroConIdExiste()
        {
            // Preparación
            var nombreBD = Guid.NewGuid().ToString();
            var contexto = ConstruirContext(nombreBD);
            var mapper = ConfigurarAutoMapper();
            IOutputCacheStore outputCacheStore = null!;

            contexto.Generos.Add(new Genero() { Nombre = "Género 1" });
            contexto.Generos.Add(new Genero() { Nombre = "Género 2" });
            await contexto.SaveChangesAsync();

            var contexto2 = ConstruirContext(nombreBD);
            var controller = new GenerosController(outputCacheStore, contexto2, mapper);

            var id = 1;

            // Prueba
            var respuesta = await controller.Get(id);

            // Verificación
            var resultado = respuesta.Value;
            Assert.AreEqual(expected: id, actual: resultado!.Id);
        }

        [TestMethod]
        public async Task Post_DebeCrearGenero_CuandoEnviamosGenero()
        {
            // Preparación
            var nombreBD = Guid.NewGuid().ToString();
            var contexto = ConstruirContext(nombreBD);
            var mapper = ConfigurarAutoMapper();
            var outputCacheStore = new OutputCacheStoreFalso();

            var nuevoGenero = new GeneroCreacionDTO() { Nombre = "Nuevo género" };

            var controller = new GenerosController(outputCacheStore, contexto, mapper);

            // Prueba
            var respuesta = await controller.Post(nuevoGenero);

            // Verificación
            var resultado = respuesta as CreatedAtRouteResult;
            Assert.IsNotNull(resultado);

            var contexto2 = ConstruirContext(nombreBD);
            var cantidad = await contexto2.Generos.CountAsync();
            Assert.AreEqual(expected: 1, actual: cantidad);
        }

        private const string cacheTag = "generos";

        [TestMethod]
        public async Task Post_DebeLlamarEvictByTagAsync_CuandoEnviamosGenero()
        {
            // Preparación
            var nombreBD = Guid.NewGuid().ToString();
            var contexto = ConstruirContext(nombreBD);
            var mapper = ConfigurarAutoMapper();
            var outputCacheStore = Substitute.For<IOutputCacheStore>();

            var nuevoGenero = new GeneroCreacionDTO() { Nombre = "Nuevo género" };

            var controller = new GenerosController(outputCacheStore, contexto, mapper);

            // Prueba
            var respuesta = await controller.Post(nuevoGenero);

            // Verificación

            await outputCacheStore.Received(1).EvictByTagAsync(cacheTag, default);
        }
    }
}
