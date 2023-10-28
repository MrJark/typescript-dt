(() => {

  // en las interfaces da igual la que vaya antes, aun si estás llamando una interfaz que aun no ha sido creada ya que la principal siempre tiene que ir arriba
  interface Client { // si los elementos de las interfaces tienen más de un nivel, com es el address, es buena práctica hacer una nueva interface y añadir una nueva y mandarla a la principal
    name: string,
    age?: number,
    address: Address,
    getFullAdress?(id: string): string
  }

  interface Address {
    id: number,
    zip: string,
    city: string,
  }

  const client: Client = {
    name: 'Chema',
    age: 26,
    address: {  
      zip: '003301',
      id: 345678,
      city: 'Alicante'
    },
    getFullAdress( id = 'Barcelona') {
      return `Vivo en ${id}`
    }
  }

})()