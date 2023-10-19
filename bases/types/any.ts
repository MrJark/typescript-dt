(() => {

  let avengers: any = 123
  let exist;
  let posible;

  // Formas de inferir el tipo en alguna variable, tanto el ...as <type> o el <type>... son formas de darle a un elemento el tipo
  avengers  ='Dr Strange'
  console.log( (avengers as string ).charAt(1) );
  
  avengers  = 12.7453242
  console.log((<number> avengers).toFixed(2));
  

})()