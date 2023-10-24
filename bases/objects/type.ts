(() => {

  type Hero = {
    name: string, 
    age?: number, 
    power: string[],
    getName?: () => string
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    power: [
      "Super Speed",
      "Travel in time"
    ]
  }

})()