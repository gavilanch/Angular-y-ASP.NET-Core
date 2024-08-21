
namespace PeliculasAPI.DTOs
{
    public class PeliculasFiltrarDTO
    {
        public int Pagina { get; set; }
        public int RecordsPorPagina { get; set; }
        
        internal PaginacionDTO Paginacion
        {
            get
            {
                return new PaginacionDTO { Pagina = Pagina, RecordsPorPagina = RecordsPorPagina };
            }
        }

        public string? Titulo { get; set; }
        public int GeneroId { get; set; }
        public bool EnCines { get; set; }
        public bool ProximosEstrenos { get; set; }
    }
}
