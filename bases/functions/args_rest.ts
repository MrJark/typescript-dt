(() => {

  // los args que pueden venir tinees que traerlos con el spread, los tres puntos, ..., y seguido del nombre que quiereas darle a ese rest, normalmente se pone rest
  // con el rest le deices que pueden venir más propiedad, nos abes cuales serán pero al darle el tipado de arreglo de string le estás obligando a que independientemente de las que sean, tienen que ser strings
  const fullName = ( firstName: string, ...rest: string[] ): string => {
    return `${firstName} ${rest.join(' ')}` // el .join(' ') es para que los separe con un espacio los elementos que envie en el rest. Por defecto lo hace con comas
  }

  const superman = fullName('Clark', 'Juseph', 'Kent')

  console.log({superman});
  
})()