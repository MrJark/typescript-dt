(() => {

  class Avengers {

    private name: string // el private significa que solo vas a tener acceso a esa propiedad dentro de esta clases 
    public team: string // el public o el omitirlo (no es buena práctica) te permite usarlo fuera de la clase
    public realName?: string
    static averageAge: number = 30 // con el static creas propiedades que son globales y puedes tener acceso desde ese punto. Ej: Avenges.static vs antman.team
    // si solo dejas las líneas de arriba, al compilarlo en .js, antman no te dará nada ya que esto en js no existe
  
    
    // constructor( theName: string, theTeam: string, theRealName?: string ) {
      //   this.name = theName,
      //   this.team = theName,
      //   this.realName = theRealName
      // }
      // forma corta de asignar propiedades. Se necesita quitar las propiedades private, prublics de arriba ya que sino estarían seindo duplucadas. La única qeu podrías dejar arriba sería la static Y se ponen entre los paréctesis
      
      
      // métodos
      static getAverageAge(){ // método estático
        this.name // este this no hace referencia a las propiedades name, team... sino que está haciendo referencia a su propia clase. El name será Avengers 
      }

      constructor( 
      // No me saltan los errores porqeu no son el mismo nombre pero las de arriba podría eliminarlas
      private theName: string, // propiedad privada
      public theTeam: string, 
      public theRealName?: string  // la ocional SIEMPRE debe ir la última
      ) {}

      // métodos
      public bio() { // si no le pones nada es como si llevase el public, se comporta como público, esto quiere decir, que fuera del scope de la class se puede usar
        return `${this.theName} (${this.theTeam})`
      }

  }

  const antman: Avengers = new Avengers('Atman', 'Capi')
  const spiderman: Avengers = new Avengers('Spiderman', 'Ironman', 'Petter Parker')
  console.log(spiderman.bio()); // me sale el inteligence y puedo ponerlo porque es público
   
  // para llamar a los métodos tienes que hacer referencia a la clase en general y no ha la constante
  // console.log(spiderman.getAverageAge()) // esto de aeeror porque no estoy llamando a la clase
  console.log(Avengers.getAverageAge()) // como llamo a la clase me deja
  
  

})()