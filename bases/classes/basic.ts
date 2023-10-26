(() => {

  class Avengers {
    private name: string // el private significa que solo vas a tener acceso a esa propiedad dentro de esta clases 
    public team: string // el public o el omitirlo (no es buena práctica) te permite usarlo fuera de la clase
    public realName?: string
    static averageAge: number = 30 // con el static creas propiedades que son globales y puedes tener acceso desde ese punto. Ej: Avenges.static vs antman.team
    // si solo dejas las líneas de arriba, al compilarlo en .js, antman no te dará nada ya que esto en js no existe
  
    constructor( theName: string, theTeam: string, theRealName?: string ) {
      this.name = theName,
      this.team = theName,
      this.realName = theRealName
    }
  }

  const antman: Avengers = new Avengers('Atman', 'Capi')

})()