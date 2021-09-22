import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguridadService } from './seguridad/seguridad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private seguridadService: SeguridadService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
  }

  debeRedirigirAlUsuario(): boolean{
    if (this.seguridadService.estaLogueado()){
      return true;
    }

    console.log(this.router.url);
    console.log(this.activatedRoute.url);

    return false;
  }
}
