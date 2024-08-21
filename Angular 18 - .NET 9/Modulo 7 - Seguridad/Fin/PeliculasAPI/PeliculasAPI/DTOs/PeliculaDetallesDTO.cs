namespace PeliculasAPI.DTOs
{
    public class PeliculaDetallesDTO: PeliculaDTO
    {
        public List<GeneroDTO> Generos { get; set; } = new List<GeneroDTO>();
        public List<CineDTO> Cines { get; set; } = new List<CineDTO>();
        public List<PeliculaActorDTO> Actores { get; set; } = new List<PeliculaActorDTO>();
    }
}
