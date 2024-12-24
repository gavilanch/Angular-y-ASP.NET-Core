using PeliculasAPI.Validaciones;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeliculasAPIPruebas
{
    [TestClass]
    public sealed class PrimeraLetraMayusculaAttributePruebas
    {
        [TestMethod]
        [DataRow("")]
        [DataRow("     ")]
        [DataRow(null)]
        public void IsValid_DebeRetornarExitoso_SiElValorEsVacio(string valor)
        {
            // Preparar
            var primeraLetraMayusculaAttribute = new PrimeraLetraMayusculaAttribute();
            var validationContext = new ValidationContext(new object());

            // Probar
            var resultado = primeraLetraMayusculaAttribute.GetValidationResult(valor, validationContext);

            // Verificar
            Assert.AreEqual(expected: ValidationResult.Success, actual: resultado);
        }

        [TestMethod]
        [DataRow("Felipe")]
        public void IsValid_DebeRetornarExitoso_SiLaPrimeraLetraEsMayuscula(string valor)
        {
            // Preparar
            var primeraLetraMayusculaAttribute = new PrimeraLetraMayusculaAttribute();
            var validationContext = new ValidationContext(new object());

            // Probar
            var resultado = primeraLetraMayusculaAttribute.GetValidationResult(valor, validationContext);

            // Verificar
            Assert.AreEqual(expected: ValidationResult.Success, actual: resultado);
        }

        [TestMethod]
        [DataRow("felipe")]
        public void IsValid_DebeRetornarError_SiLaPrimeraLetraNoEsMayuscula(string valor)
        {
            // Preparar
            var primeraLetraMayusculaAttribute = new PrimeraLetraMayusculaAttribute();
            var validationContext = new ValidationContext(new object());

            // Probar
            var resultado = primeraLetraMayusculaAttribute.GetValidationResult(valor, validationContext);

            // Verificar
            Assert.AreEqual(expected: "La primera letra debe ser mayúscula", 
                actual: resultado!.ErrorMessage);
        }


    }
}
