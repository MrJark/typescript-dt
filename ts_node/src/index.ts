// import { Hero } from "./classes/Hero";
// // se pueden hacer alias en los imports 👇🏼
// import { Hero as Patatas } from "./classes/Hero";
// // también se pueden hacer importaciones por defecto 👇🏼
// import Hero3 from "./classes/Hero";
// // también se puede exportar todo y usar el inteligence 👇🏼
// import * as TDOD from "./classes/Hero"



// const ironman = new Hero('Ironman', 1, 55)
// const ironman2 = new Patatas('Ironman', 1, 55)
// const ironman3 = new TDOD.Her4('Ironman', 1, 55)

//_________________

// import { printObject, genericFuntion } from "./generics/grnerics";

// printObject( 123 )
// printObject( '123' )
// printObject( true )
// printObject( Date() )

// console.log( genericFuntion(3.1416).toFixed(3) )
// console.log( genericFuntion('Hola mundo').toFixed(2) ) // gracias a ponerle el tipo genérico T esto me da error sino, no me da

//_________________

import { genericFuntionArrow } from "./generics/grnerics";
import { Hero } from "./interfaces/Hero";
import { Villain } from "./interfaces/Villain";


const deadpool = {
  name: 'Deadpool',
  realNamne: 'Wade Winston Wilson',
  dangerLevel: 130,
}

console.log( genericFuntionArrow<Villain>(deadpool).dangerLevel);
