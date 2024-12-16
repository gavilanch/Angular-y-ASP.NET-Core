using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public class RepositorioEnMemoria: IRepositorio
    {
        private List<Genero> _generos;

        public RepositorioEnMemoria()
        {
            _generos = new List<Genero>
            {
                new Genero{Id = 1, Nombre = "Comedia"},
                new Genero{Id = 2, Nombre = "Acción"}
            };
        }

        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
        }

        public void Crear(Genero genero)
        {
            _generos.Add(genero);
        }

        public async Task<Genero?> ObtenerPorId(int id)
        {
            await Task.Delay(TimeSpan.FromSeconds(3));
            return _generos.FirstOrDefault(g => g.Id == id);
        }

        public bool Existe(string nombre)
        {
            return _generos.Any(g => g.Nombre == nombre);
        }

        //private async Task LoguearEnConsola()
        //{
        //    // logueamos en la consola
        //}
    }
}
