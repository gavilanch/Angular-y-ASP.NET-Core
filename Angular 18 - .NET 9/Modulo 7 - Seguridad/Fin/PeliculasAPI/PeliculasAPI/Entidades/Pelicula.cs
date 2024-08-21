using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.Entidades
{
    public class Pelicula: IId
    {
        public int Id { get; set; }
        [Required]
        [StringLength(300)]
        public required string Titulo { get; set; }
        public string? Trailer { get; set; }
        public DateTime FechaLanzamiento { get; set; }
        [Unicode(false)]
        public string? Poster { get; set; }
        public List<PeliculaGenero> PeliculasGeneros { get; set; } = new List<PeliculaGenero>();
        public List<PeliculaCine> PeliculasCines { get; set; } = new List<PeliculaCine>();
        public List<PeliculaActor> PeliculasActores { get; set; } = new List<PeliculaActor>();
    }
}
