// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto_batman {
  encender: boolean,
  velocidadMaxima: number,
  acelerar: () => void,
  // acelerar():void //! hace lo mismo que la de arriba
}

const conducirBatimovil = ( auto: Auto_batman ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto_batman = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Joker {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean,
}

const guason: Joker = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Joker ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Ciudadanos {
 ( people: string[] ): number
}

const ciudadGotica: Ciudadanos = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos 
// ❌ para implementar las interface a las clases es con IMPLEMENTS y yo estaba usando extend que es para extender de una clase a otra

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Personas {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void,
}

class Persona implements Personas {
  public nombre: string
  public edad: number
  public sexo: string
  public estadoCivil: string
  public imprimirBio: () => void
}