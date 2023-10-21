(() => {

  // para hacer algo opcional, al ponerle el ? le estás diciendo que es opcional
  const fullName = (firstName: string, lastName?:string): string => {

    return `${firstName} ${lastName || 'No Last Name'}`
  }

  const name = fullName('Tony')

})()