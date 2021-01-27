import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';
import { Coordenada, CoordenadaConMensaje } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  constructor() {}

  @Input()
  coordenadasIniciales: CoordenadaConMensaje[] = [];

  @Input()
  soloLectura: boolean = false;

  @Output()
  coordenadaSeleccionada: EventEmitter<Coordenada> = new EventEmitter<
    Coordenada
  >();

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map((valor) =>{
      let marcador = marker([valor.latitud, valor.longitud]);
      if (valor.mensaje){
        marcador.bindPopup(valor.mensaje, {autoClose: false, autoPan: false});
      }
      return marcador;
    }
    );
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 14,
    center: latLng(18.482849960148176, -69.93999481201173),
  };

  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent) {
    if (!this.soloLectura) {
      const latitud = event.latlng.lat;
      const longitud = event.latlng.lng;
      this.capas = [];
      this.capas.push(marker([latitud, longitud]));
      this.coordenadaSeleccionada.emit({
        latitud: latitud,
        longitud: longitud,
      });
    }
  }
}
