import { Component, ComponentRef, inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { extraerErrores } from '../../funciones/extraerErrores';
import { IServicioCRUD } from '../../interfaces/IServicioCRUD';
import { SERVICIO_CRUD_TOKEN } from '../../proveedores/proveedores';
import { CargandoComponent } from "../cargando/cargando.component";
import { MostrarErroresComponent } from "../mostrar-errores/mostrar-errores.component";

@Component({
    selector: 'app-editar-entidad',
    imports: [CargandoComponent, MostrarErroresComponent],
    templateUrl: './editar-entidad.component.html',
    styleUrl: './editar-entidad.component.css'
})
export class EditarEntidadComponent<TDTO, TCreacionDTO> implements OnInit {

  ngOnInit(): void {
    this.servicioCRUD.obtenerPorId(this.id).subscribe(entidad => {
      this.cargarComponente(entidad);
    })
  }

  cargarComponente(entidad: any){
    if (this.contenedorFormulario){
      this.componentRef = this.contenedorFormulario.createComponent(this.formulario);
      this.componentRef.instance.modelo = entidad;
      this.componentRef.instance.posteoFormulario.subscribe((entidad: any) => {
        this.guardarCambios(entidad);
      })

      this.cargando = false;
    }
  }


  @Input()
  id!: number;

  @Input({required: true})
  titulo!: string;

  @Input({required: true})
  rutaIndice!: string;

  @Input({required: true})
  formulario: any;

  errores: string[] = [];

  servicioCRUD = inject(SERVICIO_CRUD_TOKEN) as IServicioCRUD<TDTO, TCreacionDTO>;
  private router = inject(Router);
  cargando = true;

  @ViewChild('contenedorFormulario', {read: ViewContainerRef})
  contenedorFormulario!: ViewContainerRef;

  private componentRef!: ComponentRef<any>;

  guardarCambios(entidad: TCreacionDTO) {
    this.servicioCRUD.actualizar(this.id, entidad).subscribe({
      next: () => {
        this.router.navigate([this.rutaIndice]);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });
  }
}
