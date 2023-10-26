//! ESTE ARCHIVO DEBE ESTAR EN .JS PERO PARA SUBIRLO TENGO QUE PONER .TS POR EL .GITIGNORE. LAS CLASES EN TS SON DISTINTAS A LAS DE JS
(() => {

  class Avenger {
    // estas propiedades se pueden eliminar y seguiría funcionando igual pero puede conducir a errores
    name
    power

    constructor(name = 'No name', power = 0) { // si estás trabajando en js es conveniente porner lo sdefault values porque te innfiere el tipo sino, te dara como any
      this.name = name
      this.power = power
    }
  }

  class FlyingAvenger extends Avenger { // extendemos la calse Avenger. A esa clase le vas a añadir más cosas, en este caso, el fly
    flying

    constructor( name, power ) {
      super(name, power) // en el super estás llamando al constructor de la clase avenger
      this.flying = true
    }
  }

  const hulk = new Avenger('')
  const falcon = new FlyingAvenger('Flacon', 50) // si no haces el super con sus respectivos valores, lo que le pongas al new FlyingAvenger va a dar igual porque cogerá los valores por defecto de la clase Avenger 
  console.log(hulk);
  console.log(falcon);
  

})()