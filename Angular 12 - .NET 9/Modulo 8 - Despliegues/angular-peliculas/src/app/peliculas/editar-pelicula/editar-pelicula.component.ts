import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';
import { PeliculasService } from '../peliculas.service';
import { CineDTO } from '../../cines/cines';
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent, MostrarErroresComponent, CargandoComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent implements OnInit {

  ngOnInit(): void {
    this.peliculasService.actualizarGet(this.id).subscribe(modelo => {
      this.pelicula = modelo.pelicula;
      this.actoresSeleccionados = modelo.actores;
      this.cinesNoSeleccionados = modelo.cinesNoSeleccionados.map(cine => {
        return <SelectorMultipleDTO>{llave: cine.id, valor: cine.nombre};
      });

      this.cinesSeleccionados = modelo.cinesSeleccionados.map(cine => {
        return <SelectorMultipleDTO>{llave: cine.id, valor: cine.nombre};
      });

      this.generosNoSeleccionados = modelo.generosNoSeleccionados.map(genero => {
        return <SelectorMultipleDTO>{llave: genero.id, valor: genero.nombre};
      });

      this.generosSeleccionados = modelo.generosSeleccionados.map(genero => {
        return <SelectorMultipleDTO>{llave: genero.id, valor: genero.nombre};
      });
    });
  }

  @Input({ transform: numberAttribute })
  id!: number;

  pelicula!: PeliculaDTO;
  generosSeleccionados!: SelectorMultipleDTO[];
  generosNoSeleccionados!: SelectorMultipleDTO[];
  cinesSeleccionados!: SelectorMultipleDTO[];
  cinesNoSeleccionados!: SelectorMultipleDTO[];
  actoresSeleccionados!: actorAutoCompleteDTO[];

  peliculasService = inject(PeliculasService);
  router = inject(Router);
  errores: string[] = [];

  guardarCambios(pelicula: PeliculaCreacionDTO){
    this.peliculasService.actualizar(this.id, pelicula).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    })
  }

}
