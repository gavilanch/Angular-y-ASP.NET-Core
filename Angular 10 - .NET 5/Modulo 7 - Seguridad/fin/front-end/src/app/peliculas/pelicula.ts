import { actorPeliculaDTO } from '../actores/actor';
import { cineDTO } from '../cines/cine';
import { generoDTO } from '../generos/genero';

export interface PeliculaCreacionDTO{
    titulo: string;
    resumen: string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer: string;
    poster: File;
    generosIds: number[];
    actores: actorPeliculaDTO[];
    cinesIds: number[];
}

export interface PeliculaDTO{
    id: number;
    titulo: string;
    resumen: string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer: string;
    poster: string;
    generos: generoDTO[];
    actores: actorPeliculaDTO[];
    cines: cineDTO[];
    votoUsuario: number;
    promedioVoto: number;
}

export interface PeliculaPostGet {
    generos: generoDTO[];
    cines: cineDTO[];
}

export interface LandingPageDTO {
    enCines: PeliculaDTO[];
    proximosEstrenos: PeliculaDTO[];
}

export interface PeliculaPutGet {
    pelicula: PeliculaDTO;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actores: actorPeliculaDTO[];
}