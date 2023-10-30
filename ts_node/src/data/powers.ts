interface Power {
  id: number,
  description: string,
}

export const powers: Power[] = [
  {
    id: 1,
    description: 'Money'
  },
  {
    id: 2,
    description: 'Friendly'
  },
]

// para las exportaciones por defecto se pueden hacer de dos maneras
// 1. poner en la función, class, const...  export default const power...
// 2. no poner export en la función, class, const... simplemnte hacerla y ponerlo al final del archivo como 👇🏼

// export default powers;