// decorador 👇🏼
function printToConsole( constructor: Function ){
  console.log(constructor);
}

@printToConsole // aplicando el decorador ( justo antes de las classes con el @ antes) y los abilito en el tsconfig
export class Pokemon {
  public publicApi: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ){}
}