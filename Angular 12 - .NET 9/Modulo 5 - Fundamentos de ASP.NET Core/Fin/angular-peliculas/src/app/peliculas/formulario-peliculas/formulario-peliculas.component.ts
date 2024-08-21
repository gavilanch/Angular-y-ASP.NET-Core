import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import moment from 'moment';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { SelectorMultipleComponent } from "../../compartidos/componentes/selector-multiple/selector-multiple.component";
import { AutocompleteActoresComponent } from "../../actores/autocomplete-actores/autocomplete-actores.component";
import { actorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-formulario-peliculas',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MatDatepickerModule, InputImgComponent, SelectorMultipleComponent, AutocompleteActoresComponent],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent implements OnInit {

  ngOnInit(): void {
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  @Input({required: true})
  generosNoSeleccionados!: SelectorMultipleDTO[];

  @Input({required: true})
  generosSeleccionados!: SelectorMultipleDTO[];

  @Input({required: true})
  cinesNoSeleccionados!: SelectorMultipleDTO[];

  @Input({required: true})
  cinesSeleccionados!: SelectorMultipleDTO[];

  @Input({required: true})
  actoresSeleccionados!: actorAutoCompleteDTO[];

  @Input()
  modelo?: PeliculaDTO;

  @Output()
  posteoFormulario = new EventEmitter<PeliculaCreacionDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    titulo: ['', {validators: [Validators.required]}],
    fechaLanzamiento: new FormControl<Date | null>(null, {validators: [Validators.required]}),
    trailer: '',
    poster: new FormControl<File | string | null>(null)
  });

  archivoSeleccionado(file: File){
    this.form.controls.poster.setValue(file);
  }

  guardarCambios(){
    if (!this.form.valid){
      return;
    }

    const pelicula = this.form.value as PeliculaCreacionDTO;

    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();

    const generosIds = this.generosSeleccionados.map(val => val.llave);
    pelicula.generosIds = generosIds;

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    pelicula.cinesIds = cinesIds;

    pelicula.actores = this.actoresSeleccionados;

    this.posteoFormulario.emit(pelicula);
  }

  obtenerErrorCampoTitulo(): string {
    let campo = this.form.controls.titulo;

    if (campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    return '';
  }

  obtenerErrorCampoFechaLanzamiento(): string {
    let campo = this.form.controls.fechaLanzamiento;

    if (campo.hasError('required')){
      return 'El campo fecha lanzamiento es requerido';
    }

    return '';
  }

}
