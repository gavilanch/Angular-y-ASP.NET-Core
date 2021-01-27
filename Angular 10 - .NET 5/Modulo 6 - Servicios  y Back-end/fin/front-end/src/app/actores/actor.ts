export interface actorDTO {
    id: number;
    nombre: string;
    fechaNacimiento: Date;
    foto: string;
    biografia: string;
}

export interface actorCreacionDTO {
    nombre: string;
    fechaNacimiento: Date;
    foto: File;
    biografia: string;
}

export interface actorPeliculaDTO {
    id: number;
    nombre: string;
    personaje: string;
    foto: string
}