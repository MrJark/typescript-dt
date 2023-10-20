(()=> {

  // TUPLE y puede no ser dos, pueden ser tantos como quieras y tu defines que tipo quires que  venga en cada posición
  const hero: [string, number, boolean] = ['Dr String', 100, true]

  // no puedes dar otros valor a esas posiciones porque ya se lo estás diciendo obligotorio
  hero[0] = 'Ironman'
  hero[1] = 200
  hero[2] = true


})()