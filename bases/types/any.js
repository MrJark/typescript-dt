"use strict";
(() => {
    let avengers = 123;
    let exist;
    let posible;
    // Formas de inferir el tipo en alguna variable (casteo), tanto el ...as <type> o el <type>... son formas de darle a un elemento el tipo
    avengers = 'Dr Strange';
    console.log(avengers.charAt(1));
    avengers = 12.7453242;
    console.log(avengers.toFixed(2));
})();
