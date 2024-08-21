import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-actores',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {

}
