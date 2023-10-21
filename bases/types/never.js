"use strict";
(() => {
    // Una función never nunca puede acabar de forma satisfactoria, es decir, sirve para mandar errores porque lo más seguro es que no resuelvan la función de forma satisfactoria
    const error = (msg) => {
        throw new Error(msg);
    };
    error('SOS');
    // never != null != undefined != void
})();
