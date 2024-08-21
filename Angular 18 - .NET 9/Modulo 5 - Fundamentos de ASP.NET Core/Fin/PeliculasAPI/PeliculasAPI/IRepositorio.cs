using PeliculasAPI.Entidades;

namespace PeliculasAPI
{
    public interface IRepositorio
    {
        List<Genero> ObtenerTodosLosGeneros();
        Task<Genero?> ObtenerPorId(int id);
        bool Existe(string nombre);
        void Crear(Genero genero);
    }
}
