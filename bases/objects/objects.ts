(() => {

  // En las funciones el orden de las proiedade SÍ importarta mientras que en los objetos NO
  let flash: {
    name: string, 
    age?: number, 
    power: string[],
    getName?: () => string
  } = {
    name: 'Barry Allen',
    age: 24,
    power: [
      "Super Speed",
      "Travel in time"
    ]
  }

  flash = {
    name: 'Barry Allen',
    age: 24,
    power: [
      "Super Speed",
      "Travel in time"
    ],
    getName() {
      return this.name
    }
  }

})()