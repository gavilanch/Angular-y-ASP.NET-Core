import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';
import { SeguridadService } from '../seguridad/seguridad.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    private peliculasService: PeliculasService,
    private seguridadService: SeguridadService
  ) {}

  ngOnInit(): void {
      this.cargarDatos();
  }
  peliculasEnCines: PeliculaDTO[];
  peliculasProximosEstrenos: PeliculaDTO[];

  cargarDatos() {
    this.peliculasService.obtenerLandingPage().subscribe((landingPage) => {
      this.peliculasEnCines = landingPage.enCines;
      this.peliculasProximosEstrenos = landingPage.proximosEstrenos;
    });
  }

  borrado() {
    this.cargarDatos();
  }
}
