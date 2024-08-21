import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { SeguridadService } from "./seguridad.service";

export const authInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
) => {
    const seguridadService = inject(SeguridadService);
    const token = seguridadService.obtenerToken();

    if (token){
        req = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    return next(req);
}