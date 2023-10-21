"use strict";
(() => {
    const hero = 'Flasf';
    function returnName() {
        return hero;
    }
    const batSeñal = () => {
        return true;
    };
    const heroName = returnName(); // infiere el tipo de la función returnName
})();
