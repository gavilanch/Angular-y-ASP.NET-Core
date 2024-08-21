import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { extraerErroresIdentity } from '../../compartidos/funciones/extraerErrores';
import { CredencialesUsuarioDTO } from '../seguridad';
import { SeguridadService } from '../seguridad.service';
import { FormularioAutenticacionComponent } from "../formulario-autenticacion/formulario-autenticacion.component";

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormularioAutenticacionComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  seguridadService = inject(SeguridadService);
  router = inject(Router);
  errores: string[] = [];

  registrar(credenciales: CredencialesUsuarioDTO){
    this.seguridadService.registrar(credenciales)
    .subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: err => {
        const errores = extraerErroresIdentity(err);
        this.errores = errores;
      }
    })
  }
}
