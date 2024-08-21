import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';
import { fechaNoPuedeSerFutura } from '../../compartidos/funciones/validaciones';
import { InputImgComponent } from "../../compartidos/componentes/input-img/input-img.component";

@Component({
  selector: 'app-formulario-actores',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit{

  ngOnInit(): void {
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  private formBuilder = inject(FormBuilder);

  @Input()
  modelo?: ActorDTO;

  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();

  form = this.formBuilder.group({
    nombre: ['', {
      validators: [Validators.required]
    }],
    fechaNacimiento: new FormControl<Date | null>(null, {
      validators: [Validators.required, fechaNoPuedeSerFutura()]
    }),
    foto: new FormControl<File | string | null>(null)
  })

  obtenerErrorCampoNombre(){
    let campo = this.form.controls.nombre;

    if (campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    return "";
  }

  obtenerErrorCampoFechaNacimiento(){
    let campo = this.form.controls.fechaNacimiento;

    if (campo.hasError('required')){
      return 'El campo Fecha Nacimiento es requerido';
    }


    if (campo.hasError("futuro")){
      return campo.getError('futuro').mensaje;
    }

    return "";
  }

  archivoSeleccionado(file: File){
    this.form.controls.foto.setValue(file);
  }

  guardarCambios(){
    if (!this.form.valid){
      return;
    }

    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();

    if (typeof actor.foto === "string"){
      actor.foto = undefined;
    }

    this.posteoFormulario.emit(actor);

  }

}
