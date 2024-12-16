import { Component, Input, numberAttribute } from '@angular/core';

@Component({
    selector: 'app-editar-pelicula',
    imports: [],
    templateUrl: './editar-pelicula.component.html',
    styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute })
  id!: number;
}
