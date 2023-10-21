(() => {

  const hero: string = 'Flasf'
  function returnName():string {
    return hero
  }

  const batSeñal = ():boolean => {

    return true
  }

  const heroName = returnName() // infiere el tipo de la función returnName

})()