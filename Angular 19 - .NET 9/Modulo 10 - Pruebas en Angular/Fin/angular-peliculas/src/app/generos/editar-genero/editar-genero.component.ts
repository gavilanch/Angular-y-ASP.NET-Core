import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO, GeneroDTO } from '../generos';
import { GenerosService } from '../generos.service';
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { EditarEntidadComponent } from "../../compartidos/componentes/editar-entidad/editar-entidad.component";

@Component({
    selector: 'app-editar-genero',
    imports: [FormularioGeneroComponent, CargandoComponent, MostrarErroresComponent, EditarEntidadComponent],
    templateUrl: './editar-genero.component.html',
    styleUrl: './editar-genero.component.css',
    providers: [
        { provide: SERVICIO_CRUD_TOKEN, useClass: GenerosService }
    ]
})
export class EditarGeneroComponent {

  @Input({ transform: numberAttribute })
  id!: number;
  formularioGenero = FormularioGeneroComponent;
}
