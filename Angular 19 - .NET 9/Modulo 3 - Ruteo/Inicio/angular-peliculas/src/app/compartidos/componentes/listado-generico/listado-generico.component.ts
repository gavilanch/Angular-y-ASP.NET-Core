import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-listado-generico',
    imports: [],
    templateUrl: './listado-generico.component.html',
    styleUrl: './listado-generico.component.css'
})
export class ListadoGenericoComponent {
  @Input({ required: true })
  listado: any;
}
