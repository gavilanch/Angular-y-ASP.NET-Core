import { actorAutoCompleteDTO } from "../actores/actores";
import { CineDTO } from "../cines/cines";
import { GeneroDTO } from "../generos/generos";

export interface PeliculaDTO{
    id: number;
    titulo: string;
    fechaLanzamiento: Date;
    trailer: string;
    poster?: string;
    generos?: GeneroDTO[];
    cines?: CineDTO[];
    actores?: actorAutoCompleteDTO[];
}

export interface PeliculaCreacionDTO{
    titulo: string;
    fechaLanzamiento: Date;
    trailer: string;
    poster?: File;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: actorAutoCompleteDTO[];
}

export interface PeliculasPostGetDTO {
    generos: GeneroDTO[];
    cines: CineDTO[];
}

export interface LandingPageDTO {
    enCines: PeliculaDTO[];
    proximosEstrenos: PeliculaDTO[];
}

export interface PeliculasPutGetDTO {
    pelicula: PeliculaDTO;
    generosSeleccionados: GeneroDTO[];
    generosNoSeleccionados: GeneroDTO[];
    cinesSeleccionados: CineDTO[];
    cinesNoSeleccionados: CineDTO[];
    actores: actorAutoCompleteDTO[];
}