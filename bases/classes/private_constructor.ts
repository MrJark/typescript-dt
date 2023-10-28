(() => {
  // patrón singleton
  // sirve para controlar la manera en la cual sus instrancias son ejecutadas ( singleton )

  class Apocalypse {

    static _: Apocalypse // se suele ver tambien con el nombre instance o _

    constructor(
      public description: string,
    ){}

    static makeApo(): Apocalypse {
      if (!Apocalypse._ ) {
        Apocalypse._ = new Apocalypse('The unic apocalypse')
      }
      return Apocalypse._
    }

  }
  const apo = Apocalypse.makeApo()
  // const apoca = new Apocalypse('The new apolacypse')


})()