import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EsAdminGuard implements CanActivate {

  constructor(private seguridadService: SeguridadService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.seguridadService.obtenerRol() === 'admin'){
        return true;
      }

    this.router.navigate(['/login']);      
      return false;
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoGuard implements CanActivate {

  constructor(private seguridadService: SeguridadService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.seguridadService.estaLogueado()){
        return true;
      }

    this.router.navigate(['/login']);      
      return false;
  }
  
}
