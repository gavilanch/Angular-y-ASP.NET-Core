import { Component } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  standalone: true,
  imports: [FormularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  guardarCambios(actor: ActorCreacionDTO){
    console.log('creando el actor', actor);
  }
}
