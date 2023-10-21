"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [
        batman,
        superman
    ];
    const villano = [
        'Lex Lutor',
        5,
        true
    ];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Power;
    (function (Power) {
        Power[Power["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        Power[Power["fuerzaBatman"] = 1] = "fuerzaBatman";
        Power[Power["fuerzaFlash"] = 5] = "fuerzaFlash";
        Power[Power["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(Power || (Power = {}));
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    // otra forma de hacerlo ( asignando en la enumeración un nombre y dárselo )
    const fuerzaFlash2 = 5;
    const fuerzaSuperman2 = 100;
    const fuerzaBatman2 = 1;
    const fuerzaAcuaman2 = 0;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
