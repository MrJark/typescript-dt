// decorador 👇🏼
function printToConsole( constructor: Function ){
  console.log(constructor);
}

// factory decorator 
const printToConsoleCondifional = ( print: boolean = false): Function => {
  // return () => console.log('Hola mundo');
  if( print ) {
    return printToConsole
  } else {
    return () => {}
  }
}

// block portotype ( evita que alguien haga expansiones de ciertas propiedades, en este caso del constructor)
const blockPrototype = function(constructor: Function){
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

// @printToConsole // aplicando el decorador ( justo antes de las classes con el @ antes) y los abilito en el tsconfig
// export class Pokemon {
//   public publicApi: string = 'https://pokeapi.co'

//   constructor(
//     public name: string
//   ){}
// }

// @printToConsoleCondifional()
// export class Pokemon {
//   public publicApi: string = 'https://pokeapi.co'

//   constructor(
//     public name: string
//   ){}
// }


function CheckValidPokemonId() {
  return function (target: any, propertyKey: string, descriptor: PropertyDecorator){
    console.log({target, propertyKey, descriptor });
    
  }
}

// puedo colocar tantos decoradores como quiera y se ejecutan de forma secuencial en transpolacion/compolación
@blockPrototype
@printToConsoleCondifional()
export class Pokemon {
  public publicApi: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ){}

  savePokemonToDB( id:number) {
    console.log(`El Pokemon con el id ${id} se ha guardado`);
    
  }
}