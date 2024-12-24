import { provideHttpClient } from "@angular/common/http";
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing'
import { TestBed } from "@angular/core/testing";
import { GenerosService } from "./generos.service";
import { firstValueFrom } from "rxjs";

describe('GenerosService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        })
    });

    it('Crea el servicio correctamente', () => {
        const generosService = TestBed.inject(GenerosService);
        expect(generosService).toBeTruthy();
    });

    it('Ejecuta una petición GET para obtener todos los géneros', () => {
        // Preparación
        const httpTesting = TestBed.inject(HttpTestingController);
        const generosService = TestBed.inject(GenerosService);
        const obtenerTodos$ = generosService.obtenerTodos();

        // Probar
        firstValueFrom(obtenerTodos$);

        // Verificación
        const peticion = httpTesting.expectOne(req => req.url.endsWith('/api/generos/todos'), 
            'Obtiene todos los géneros');
        
        expect(peticion.request.method).toBe('GET');

    });
});