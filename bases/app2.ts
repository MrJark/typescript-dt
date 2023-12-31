// Funciones Básicas
//* Task: poner tipos
function sumar( a: number, b: number ): number{
  return a + b;
}

const contar = ( heroes:string ):number => {
  return heroes.length;
}
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes.join(","));

//Parametros por defecto
const llamarBatman = ( llamar?: boolean ): void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( ...personas: string[] ):string => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[] )=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
interface NadaDeNada {
  numero: number, 
  texto: string, 
  booleano: boolean, 
  arreglo: string[]
}
type NoHaceNada = ({numero, texto, booleano, arreglo}: NadaDeNada) => void
let noHaceNadaTampoco: NoHaceNada;
