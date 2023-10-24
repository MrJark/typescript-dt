(() => {

  type Hero = {
    name: string, 
    age?: number, 
    power: string[],
    getName?: () => string
  }

  let myCuntomVariable: (string | number | Hero ) = 'Fer'

  myCuntomVariable = 20

  myCuntomVariable = {
    name: 'Bruce',
    age: 43,
    power: ['Rich']
  }

})()