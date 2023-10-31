

export const printObject = ( args: any ) => {
  console.log(args); 
}

// Función normal 👇🏼
// export function genericFuntion (args: any ) {
//   return args
// }
// Función genérica con function 👇🏼 ( LA T LE INDICA QUE ES TIPO GENÉRICO )
export function genericFuntion<T> (args: T ) {
  return args
}

export const genericFuntionArrow = <T> (args: T) => args // est ay la de arriba son la misma pero en arrow

