export function extraerErrores(obj: any): string[]{
    const err = obj.error.errors;

    let mensajesDeError: string[] = [];

    for (let llave in err){
        let campo = llave;
        const mensajesConCampos = err[llave].map((mensaje: string) => `${campo}: ${mensaje}`);
        mensajesDeError = mensajesDeError.concat(mensajesConCampos);
    }

    return mensajesDeError;
}