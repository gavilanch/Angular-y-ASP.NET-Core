import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TestBed } from "@angular/core/testing";
import { IndiceEntidadComponent } from "./indice-entidad.component";
import { IServicioCRUD } from "../../interfaces/IServicioCRUD";
import { of } from "rxjs";
import { SERVICIO_CRUD_TOKEN } from "../../proveedores/proveedores";
import { RouterModule } from "@angular/router";
import { HttpResponse } from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('IndiceEntidadComponent', () => {

    let mockIServicioCRUD: jasmine.SpyObj<IServicioCRUD<object, object>>;

    beforeEach(async () => {

        mockIServicioCRUD = jasmine.createSpyObj<IServicioCRUD<object, object>>('IServicioCRUD',
            ['obtenerPaginado', 'borrar']);

        mockIServicioCRUD.obtenerPaginado.and.returnValue(of());
        mockIServicioCRUD.borrar.and.returnValue(of({}));

        await TestBed.configureTestingModule({
            imports: [IndiceEntidadComponent,
                RouterModule.forRoot([]),
                SweetAlert2Module.forRoot()],
            providers: [{ provide: SERVICIO_CRUD_TOKEN, useValue: mockIServicioCRUD },
                provideAnimationsAsync()
            ]
        }).compileComponents();
    });

    it('Debe crear el componente correctamente', () => {
        const fixture = TestBed.createComponent(IndiceEntidadComponent);
        const componente = fixture.componentInstance;
        expect(componente).toBeTruthy();
    });

    it('Debe de colocar la página igual a 1 cuando borrar sea llamada', () => {
        const fixture = TestBed.createComponent(IndiceEntidadComponent);
        const componente = fixture.componentInstance;

        const id = 1;
        componente.paginacion.pagina = 2;

        componente.borrar(id);

        expect(componente.paginacion.pagina).toBe(1);

    });

    it('Debe de mostrar una tabla cuando existan registros cuando cargarRegistros sea llamada', () => {
        const fixture = TestBed.createComponent(IndiceEntidadComponent);
        const componente = fixture.componentInstance;
        const respuesta = new HttpResponse<object[]>({ body: [{}] })

        mockIServicioCRUD.obtenerPaginado.and.returnValue(of(respuesta));

        componente.cargarRegistros();

        fixture.detectChanges();

        const compilado = fixture.nativeElement as HTMLElement;
        expect(compilado.querySelectorAll('table').length).toBe(1);
    });

    it('Debe de NO mostrar una tabla cuando NO existan registros cuando cargarRegistros sea llamada', () => {
        const fixture = TestBed.createComponent(IndiceEntidadComponent);
        const componente = fixture.componentInstance;
        const respuesta = new HttpResponse<object[]>({ body: [] })

        mockIServicioCRUD.obtenerPaginado.and.returnValue(of(respuesta));

        componente.cargarRegistros();

        fixture.detectChanges();

        const compilado = fixture.nativeElement as HTMLElement;
        expect(compilado.querySelectorAll('table').length).toBe(0);
    });
});