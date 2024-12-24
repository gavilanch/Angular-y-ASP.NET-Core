using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.DTOs
{
    public class CineCreacionDTO
    {
        [Required]
        [StringLength(75)]
        public required string Nombre { get; set; }
        [Range(-90, 90)]
        public double Latitud { get; set; }
        [Range(-180, 180)]
        public double Longitud { get; set; }
    }
}
