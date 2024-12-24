import { extraerErrores } from "./extraerErrores";

describe('extraerErrores', () => {
    it('debe devolver un array vacío si el objeto no tiene errores', ()=>{
        
        // Preparación
        const input = {error : {errors: {}}};

        // Prueba
        const resultado = extraerErrores(input);

        // Verificación
        expect(resultado).toEqual([]);

    });

    it('debe extraer correctamente los mensajes de error con sus campos', ()=>{
        
        // Preparación
        const input = {error : {errors: {
            nombre: ['es obligatorio', 'primera letra debe ser mayúscula'],
            email: ['no es un email válido']
        }}};

        // Prueba
        const resultado = extraerErrores(input);

        // Verificación
        expect(resultado).toEqual([
            'nombre: es obligatorio',
            'nombre: primera letra debe ser mayúscula',
            'email: no es un email válido'
        ]);

    });
});