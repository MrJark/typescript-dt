"use strict";
(() => {
    // para hacer algo opcional, al ponerle el ? le estás diciendo que es opcional
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No Last Name'}`;
    };
    const name = fullName('Tony');
})();
