import { TestBed } from "@angular/core/testing";
import { MostrarErroresComponent } from "./mostrar-errores.component";

describe('MostrarErroresComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MostrarErroresComponent]
        }).compileComponents();
    });

    it('Debe crear el componente correctamente', () => {
        const fixture = TestBed.createComponent(MostrarErroresComponent);
        const componente = fixture.componentInstance;
        expect(componente).toBeTruthy();
    });

    it('Debe mostrar un list-item cuando haya un error', () => {
        const fixture = TestBed.createComponent(MostrarErroresComponent);
        const componente = fixture.componentInstance;

        componente.errores = ['Error'];
        fixture.detectChanges();

        const compilado = fixture.nativeElement as HTMLElement;
        expect(compilado.querySelectorAll('li').length).toBe(1);
    });
});