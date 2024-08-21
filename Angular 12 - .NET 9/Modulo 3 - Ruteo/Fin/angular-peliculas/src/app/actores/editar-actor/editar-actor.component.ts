import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {

  @Input({transform: numberAttribute})
  id!: number;

}
