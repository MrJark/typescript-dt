(() => {

  // enum es palabra reservada y la asignación es UpperCamel case. En las enum solo se pueden manejar números
  // enum AudioLavel {
  //   min,
  //   medium,
  //   max
  // }
  enum AudioLavel {
    min = 2, // dará dos proque se lo he asignado
    medium, // dará 1 porque es en la posición en la que está
    max = 8 // da 8
  }


  let currentLevel = AudioLavel.medium
  console.log(currentLevel) // da 1 porque el medium está en la posición uno
  

})()