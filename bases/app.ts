(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [
      string, 
      string
    ] 
    = [
        batman,
        superman
      ];

    const villano: [
      string, 
      number, 
      boolean
    ] = [
      'Lex Lutor',
      5,
      true
    ];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Power {
      fuerzaAcuaman = 0, // o fuerzaAcuaman, sin nada más por la posición
      fuerzaBatman = 1,
      fuerzaFlash = 5,
      fuerzaSuperman = 100,
    }
    const fuerzaFlash: Power = 5;
    const fuerzaSuperman:Power = 100;
    const fuerzaBatman: Power = 1;
    const fuerzaAcuaman: Power = 0;
    // otra forma de hacerlo ( asignando en la enumeración un nombre y dárselo )
    const fuerzaFlash2: Power.fuerzaFlash = 5;
    const fuerzaSuperman2:Power .fuerzaSuperman= 100;
    const fuerzaBatman2: Power.fuerzaBatman = 1;
    const fuerzaAcuaman2: Power.fuerzaAcuaman = 0;
  
    // Retorno de funciones
    function activar_batiseñal(): string {
      return 'activada';
    }
  
    function pedir_ayuda(): undefined | void {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );
  
  
  })()
  
  