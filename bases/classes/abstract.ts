(() => {

  // las clases abstracts SOLO sirven para crear otras clases o estender estas mismas y no se pueden llamar
  abstract class Mutant { // son cascarones
    constructor(
      public name: string,
      public realName: string,
      public powe?: number
    ){}
  }

  // y si le añades un constructor, tendrás que añadir tambien el super() ( por TS ) para llamar al constructor de Mutant 
  class Xmen extends Mutant {}
  class Villian extends Mutant {}

  const magneto = new Villian('Magneto', 'Erik', 222)
  const wolverine = new Xmen('Wolverine', 'Logan')

  const printName = ( character: Mutant ) => {
    console.log({character});
  }

  // pueden ser enviados aquí porque son de la clase ( aunque sea extendida ) Mutant
  printName(wolverine)
  printName(magneto)

})()