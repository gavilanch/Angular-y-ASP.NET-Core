import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'generos', component: IndiceGenerosComponent},
  {path: 'generos/crear', component: CrearGeneroComponent},
  {path: 'generos/editar/:id', component: EditarGeneroComponent},
  {path: 'actores', component: IndiceActoresComponent},
  {path: 'actores/crear', component: CrearActorComponent},
  {path: 'actores/editar/:id', component: EditarActorComponent},
  {path: 'cines', component: IndiceCinesComponent},
  {path: 'cines/crear', component: CrearCineComponent},
  {path: 'cines/editar/:id', component: EditarCineComponent},
  {path: 'peliculas/crear', component: CrearPeliculaComponent},
  {path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
  {path: 'peliculas/buscar', component: FiltroPeliculasComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
