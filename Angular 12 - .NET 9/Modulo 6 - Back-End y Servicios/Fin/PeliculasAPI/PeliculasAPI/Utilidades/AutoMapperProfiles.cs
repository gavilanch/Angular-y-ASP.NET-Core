using AutoMapper;
using NetTopologySuite.Geometries;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;

namespace PeliculasAPI.Utilidades
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {
            ConfigurarMapeoGeneros();
            ConfigurarMapeoActores();
            ConfigurarMapeoCines(geometryFactory);
            ConfigurarMapeoPeliculas();
        }

        private void ConfigurarMapeoPeliculas()
        {
            CreateMap<PeliculaCreacionDTO, Pelicula>()
                .ForMember(x => x.Poster, opciones => opciones.Ignore())
                .ForMember(x => x.PeliculasGeneros, dto =>
                dto.MapFrom(p => p.GenerosIds!.Select(id => new PeliculaGenero { GeneroId = id })))
                .ForMember(x => x.PeliculasCines, dto =>
                dto.MapFrom(p => p.CinesIds!.Select(id => new PeliculaCine { CineId = id })))
                .ForMember(p => p.PeliculasActores, dto =>
                dto.MapFrom(p => p.Actores!.Select(actor => 
                new PeliculaActor { ActorId = actor.Id, Personaje = actor.Personaje })));

            CreateMap<Pelicula, PeliculaDTO>();

            CreateMap<Pelicula, PeliculaDetallesDTO>()
                .ForMember(p => p.Generos, entidad => entidad.MapFrom(p => p.PeliculasGeneros))
                .ForMember(p => p.Cines, entidad => entidad.MapFrom(p => p.PeliculasCines))
                .ForMember(p => p.Actores, entidad => entidad.MapFrom(p => p.PeliculasActores.OrderBy(o => o.Orden)));

            CreateMap<PeliculaGenero, GeneroDTO>()
                .ForMember(g => g.Id, pg => pg.MapFrom(p => p.GeneroId))
                .ForMember(g => g.Nombre, pg => pg.MapFrom(p => p.Genero.Nombre));

            CreateMap<PeliculaCine, CineDTO>()
                .ForMember(g => g.Id, pc => pc.MapFrom(p => p.CineId))
                .ForMember(g => g.Nombre, pc => pc.MapFrom(p => p.Cine.Nombre))
                .ForMember(g => g.Latitud, pc => pc.MapFrom(p => p.Cine.Ubicacion.Y))
                .ForMember(g => g.Longitud, pc => pc.MapFrom(p => p.Cine.Ubicacion.X));

            CreateMap<PeliculaActor, PeliculaActorDTO>()
                .ForMember(dto => dto.Id, entidad => entidad.MapFrom(p => p.ActorId))
                .ForMember(dto => dto.Nombre, entidad => entidad.MapFrom(p => p.Actor.Nombre)) 
                .ForMember(dto => dto.Foto, entidad => entidad.MapFrom(p => p.Actor.Foto));

        }

        private void ConfigurarMapeoCines(GeometryFactory geometryFactory)
        {
            CreateMap<Cine, CineDTO>()
                .ForMember(x => x.Latitud, cine => cine.MapFrom(p => p.Ubicacion.Y))
                .ForMember(x => x.Longitud, cine => cine.MapFrom(p => p.Ubicacion.X));

            CreateMap<CineCreacionDTO, Cine>()
                .ForMember(x => x.Ubicacion, cineDTO => cineDTO.MapFrom(p =>
                geometryFactory.CreatePoint(new Coordinate(p.Longitud, p.Latitud))));
        }

        private void ConfigurarMapeoActores()
        {
            CreateMap<ActorCreacionDTO, Actor>()
                .ForMember(x => x.Foto, opciones => opciones.Ignore());
            CreateMap<Actor, ActorDTO>();

            CreateMap<Actor, PeliculaActorDTO>();
        }

        private void ConfigurarMapeoGeneros()
        {
            CreateMap<GeneroCreacionDTO, Genero>();
            CreateMap<Genero, GeneroDTO>();
        }
    }
}
