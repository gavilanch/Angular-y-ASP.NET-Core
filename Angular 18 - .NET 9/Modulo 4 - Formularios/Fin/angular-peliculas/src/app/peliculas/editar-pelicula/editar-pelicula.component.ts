import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  pelicula: PeliculaDTO = {id: 1, titulo: 'Spider-Man', trailer: 'ABC', fechaLanzamiento: new Date('2018-07-25'), poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'}

  generosSeleccionados: SelectorMultipleDTO[] = [
    {llave: 2, valor: 'Acción'}
  ];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 3, valor: 'Comedia'}
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [
    {llave: 2, valor: 'Blue Mall'}

  ];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Agora Mall'},
    {llave: 3, valor: 'Acropolis'}
  ];

  actoresSeleccionados: actorAutoCompleteDTO[] = [
    { id: 2, nombre: 'Tom Hanks', personaje: 'Forrest Gump', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/220px-Tom_Hanks_TIFF_2019.jpg' },
  ]


  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log('editando película', pelicula);
  }

}
