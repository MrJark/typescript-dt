(() => {

  function callBatman(): void {

  }
  const a = callBatman()
  console.log(a); // esto da un void -> vacio. Significa que no tiene un return implícito
  
  const callSuperman = ():void => {
    // return 1; // da error porque devería devolver vacio y no un 1
  } 

  // void != undefined != null
})()