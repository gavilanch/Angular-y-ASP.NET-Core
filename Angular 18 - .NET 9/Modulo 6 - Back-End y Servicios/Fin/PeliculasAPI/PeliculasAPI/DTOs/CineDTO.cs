using PeliculasAPI.Entidades;
using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.DTOs
{
    public class CineDTO: IId
    {
        public int Id { get; set; }
        public required string Nombre { get; set; }
        public double Latitud { get; set; }
        public double Longitud { get; set; }
    }
}
