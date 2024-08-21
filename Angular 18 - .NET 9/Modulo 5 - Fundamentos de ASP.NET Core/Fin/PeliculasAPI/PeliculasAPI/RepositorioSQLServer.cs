using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public class RepositorioSQLServer : IRepositorio
    {
        private List<Genero> _generos;

        public RepositorioSQLServer()
        {
            _generos = new List<Genero>
            {
                new Genero{Id = 1, Nombre = "Comedia SQL"},
                new Genero{Id = 2, Nombre = "Acción SQL"}
            };
        }

        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
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

        public void UnMetodoNuevo()
        {

        }

        public void Crear(Genero genero)
        {
            throw new NotImplementedException();
        }
    }
}
