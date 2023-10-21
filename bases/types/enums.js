"use strict";
(() => {
    // enum es palabra reservada y la asignación es UpperCamel case. En las enum solo se pueden manejar números
    // enum AudioLavel {
    //   min,
    //   medium,
    //   max
    // }
    let AudioLavel;
    (function (AudioLavel) {
        AudioLavel[AudioLavel["min"] = 2] = "min";
        AudioLavel[AudioLavel["medium"] = 3] = "medium";
        AudioLavel[AudioLavel["max"] = 8] = "max"; // da 8
    })(AudioLavel || (AudioLavel = {}));
    let currentLevel = AudioLavel.medium;
    console.log(currentLevel); // da 1 porque el medium está en la posición uno
})();
