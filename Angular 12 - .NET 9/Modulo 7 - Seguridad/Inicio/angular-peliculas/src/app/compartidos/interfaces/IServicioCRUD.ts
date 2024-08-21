import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { PaginacionDTO } from "../modelos/PaginacionDTO";

export interface IServicioCRUD<TDTO, TCreacionDTO>{
    obtenerPaginado(paginacion: PaginacionDTO): Observable<HttpResponse<TDTO[]>>;
    obtenerPorId(id: number): Observable<TDTO>;
    actualizar(id: number, entidad: TCreacionDTO): Observable<any>;
    crear(entidad: TCreacionDTO): Observable<any>;
    borrar(id: number): Observable<any>;
}