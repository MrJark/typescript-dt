
(()=>{
  let avengers: number = 2

  const villians = 20

  if( avengers < villians ) {
    throw new Error ('we are in problems')
  } else {
    throw new Error ('we are ok')
  }

  avengers = Number('765') // -> esto da un numero porque el NUmber transforma todo a número. Incluso las letas ya que sale un NaN lo que en JS lo toma como un número
})()


