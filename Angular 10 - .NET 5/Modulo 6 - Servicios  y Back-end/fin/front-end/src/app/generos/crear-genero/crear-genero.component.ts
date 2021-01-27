import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css'],
})
export class CrearGeneroComponent {
  errores: string[] = [];

  constructor(private router: Router, private generosService: GenerosService) {}

  guardarCambios(genero: generoCreacionDTO) {
    this.generosService.crear(genero).subscribe(
      () => {
        this.router.navigate(['/generos']);
      },
      (error) => this.errores = parsearErroresAPI(error)
    );
  }
}
