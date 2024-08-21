import { Component, inject } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { CrearEntidadComponent } from "../../compartidos/componentes/crear-entidad/crear-entidad.component";

@Component({
  selector: 'app-crear-actor',
  standalone: true,
  imports: [FormularioActoresComponent, MostrarErroresComponent, CrearEntidadComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css',
  providers: [
    {provide: SERVICIO_CRUD_TOKEN, useClass: ActoresService}
  ]
})
export class CrearActorComponent {
  formularioActores = FormularioActoresComponent;
}
