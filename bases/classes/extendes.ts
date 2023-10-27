(() => {

  class Avengers {
    constructor(
      public name: string,
      public realName: string,
      public team?: string,
      public theTruth?: boolean
    ){ // lo que ejecuta el constructor 👇🏼
      console.log('Avengers Constructor Called');
    }

    // private getFullName() {
    //   return `${this.name} ${this.realName}`
    // }

    // el método protected te pemite poder acceder a este  en clases qeu hayan sido extendidas del mismo. No podrás acceder a este fuera de las clases que lo contengan o que se extienda de él, cosa que no pasa con las propiedades públicas, que no tienen 'scope'
    protected getFullName() { 
      return `${this.name} ${this.realName}`
    }
    
  }  
  class Xmen extends Avengers { // con el estends traes todas las propiedades y las restricciones de los avengers al nuevo método y este le puede añadir lo qeu quieras.
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ){
      // el super es necesario para las clases que se han extend
      super(name, realName) // las propiedades que recibe son las que he puesto en el constructor de Xmen que a su vez son las mismas que las de los Avengers y sí, lo son y sí, están repetidas pero para TS necesitan sen llamadas 
    }

    // método
    getFullNameFromXmen(){
      // console.log(super.getFullName()) // esto no funciona con el private
      console.log(super.getFullName()) // pero si funciona si tengo la propiedad protected en el metodo
      
    }
  }
  
})()