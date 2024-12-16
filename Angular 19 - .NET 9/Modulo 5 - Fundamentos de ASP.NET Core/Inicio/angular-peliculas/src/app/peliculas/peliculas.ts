import { actorAutoCompleteDTO } from "../actores/actores";

export interface PeliculaDTO{
    id: number;
    titulo: string;
    fechaLanzamiento: Date;
    trailer: string;
    poster?: string;
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