
(() => {

  const addNumbers = ( a: number, b: number, c?: number) => a + b
  const great = (name: string) => `Hola ${name}`
  const saveTheWorld = () => `El mundo sigue en peligro!`

  let myFunction // tipo any que no es recomendavle
  // let myFunction: Function // <- no es combeniente dejarla de tipo any. Si la pones de tipo function solo te aceptará las 3 últimas
  // let myFunction: (x: number, y: number) => number // funcion que deveulve un número pero para que sea aceptada por la primera, también tienes que pasarle los argumentos y con el tipo el cual son pero el nombre de esos argumentos aquí es indiferente 
  // let myFunction: ( y:string ) => string // función con un parámetro string y devuelve otro sring
  // let myFunction: () => string // función que no recibe nada y deveulve string
  
  myFunction = 10 // permitido
  myFunction = addNumbers // permitido e inferirá el tipo de suma y necesidad de los dos obligatorios
  myFunction = great // también permitido e inferido el string
  myFunction = saveTheWorld // también permitido e inferido el string


})()