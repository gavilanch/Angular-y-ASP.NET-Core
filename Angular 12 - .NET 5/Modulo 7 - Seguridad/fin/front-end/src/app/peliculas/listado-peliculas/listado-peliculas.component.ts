import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }

  @Input()
  peliculas: PeliculaDTO[];

  @Output()
  borrado: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    
  }

  borrar(peliculaId: number): void {
    this.peliculasService.borrar(peliculaId)
    .subscribe(() => this.borrado.emit());
  }

}
