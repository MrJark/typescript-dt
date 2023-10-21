"use strict";
(() => {
    // ojo, un a porpiedad opcional no puede tenerr detrás de ella, la siguiente, un argumento obligatorio
    const fullName = (firstName, lastName, upper = false) => {
        let upperName;
        upperName =
            upper
                ? `${firstName} ${lastName || 'No Last Name'}`.toUpperCase()
                : `${firstName} ${lastName || 'No Last Name'}`;
        return upperName;
    };
    const name = fullName('Tony', 'Stark', true);
    console.log(name);
})();
