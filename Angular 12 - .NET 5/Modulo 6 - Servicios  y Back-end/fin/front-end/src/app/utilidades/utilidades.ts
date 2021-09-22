export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function parsearErroresAPI(response: any): string[] {
  const resultado: string[] = [];

  console.log(response.status);

  if (response.status === 500){
    resultado.push('Ha ocurrido un error en el servidor. Favor intentar más tarde');
    return resultado;
  }

  if (response.error) {
    if (typeof response.error === 'string') {
      resultado.push(response.error);
    } else {
      const mapaErrores = response.error.errors;
      const entradas = Object.entries(mapaErrores);
      entradas.forEach((arreglo: any[]) => {
        const campo = arreglo[0];
        arreglo[1].forEach((mensajeError) => {
          resultado.push(`${campo}: ${mensajeError}`);
        });
      });
    }
  }

  return resultado;
}

export function formatearFecha(date: Date) {
  date = new Date(date);
  const formato = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  
  const [
      {value: month},,
      {value: day},,
      {value: year}
  ] = formato.formatToParts(date);

  return `${year}-${month}-${day}`;
}
