(() => {

  class Avengers {
    constructor(
      public name: string,
      public realName: string,
      public team?: string,
      public theTruth?: boolean
    ){ 
      console.log('Avengers Constructor Called');
    }

    
    protected getFullName() { 
      return `${this.name} ${this.realName}`
    }
    
  }  
  class Xmen extends Avengers { 
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ){
      super(name, realName) 
    }

    // get y set parecen propiedades pero son métodos. Y pueden parecer opuestos ya que uno obliga a retornar algo mientras que el otro necesita recibir algo. Y ambos se pueden llamr igual ya que son métodos distintos y no hay interferencias entre ellos
    get fullNameBru(){
      // deben siempre regresar un valor, es obligatorio
      // en los gets puede haber lógica de programación antes de retornar el valor
      return `${this.name} ${this.realName}`
    }
    set fullNameBru (name:string){ // obligatorio que recuba UN SOLO argumento y NO devuelve nada
      // en los sets puede haber lógica de programación antes de asignar el valor
      if (name.length < 2) {
        throw new Error ('The name must be larger than 3 characters')
      }

      this.name = name
    }
    
    getFullNameFromXmen(){  
      console.log(super.getFullName())
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true)
  console.log(wolverine.fullNameBru); // los get y set aparece como propiedades pero es un método y solo se mandan a llamar y no hace falta ejecutarlos 
  
})()