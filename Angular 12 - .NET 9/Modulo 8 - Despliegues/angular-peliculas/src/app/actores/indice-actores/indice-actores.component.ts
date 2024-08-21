import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ActoresService } from '../actores.service';
import { PaginacionDTO } from '../../compartidos/modelos/PaginacionDTO';
import { HttpResponse } from '@angular/common/http';
import { ActorDTO } from '../actores';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { IndiceEntidadComponent } from "../../compartidos/componentes/indice-entidad/indice-entidad.component";

@Component({
  selector: 'app-indice-actores',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatTableModule, ListadoGenericoComponent, MatPaginatorModule, SweetAlert2Module, IndiceEntidadComponent],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css',
  providers: [
    {provide: SERVICIO_CRUD_TOKEN, useClass: ActoresService}
  ]
})
export class IndiceActoresComponent {

}
