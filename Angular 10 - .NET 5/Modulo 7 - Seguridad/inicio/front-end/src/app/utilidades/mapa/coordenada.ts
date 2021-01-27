export interface Coordenada{
    latitud: number;
    longitud: number;
}

export interface CoordenadaConMensaje extends Coordenada{
    mensaje: string;
}