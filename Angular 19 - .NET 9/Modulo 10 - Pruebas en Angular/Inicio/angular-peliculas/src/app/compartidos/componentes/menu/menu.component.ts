import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { AutorizadoComponent } from "../../../seguridad/autorizado/autorizado.component";
import { SeguridadService } from '../../../seguridad/seguridad.service';

@Component({
    selector: 'app-menu',
    imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink, AutorizadoComponent],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent {
  seguridadService = inject(SeguridadService);
}
