import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { generoCreacionDTO, generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css'],
})
export class EditarGeneroComponent implements OnInit {
  constructor(
    private router: Router,
    private generosService: GenerosService,
    private activatedRoute: ActivatedRoute
  ) {}

  modelo: generoDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.generosService.obtenerPorId(params.id)
      .subscribe(genero => {
        this.modelo = genero;
      }, () => this.router.navigate(['/generos']))
    });
  }

  guardarCambios(genero: generoCreacionDTO) {
    this.generosService.editar(this.modelo.id, genero)
    .subscribe(() => {
      this.router.navigate(['/generos']);
    }, error => this.errores = parsearErroresAPI(error))
  }
}
