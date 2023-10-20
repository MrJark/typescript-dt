(() => {

  const numbers: number[] = [1,1,2,3,5,8,13,21,34,55]

  numbers.push(89)
  
  console.log(numbers);

  const villians = ['Duende Verde', 'Dormamu', 'Sandman']
  villians.forEach( v => console.log( v.toUpperCase() ))

})()