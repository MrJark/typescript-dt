(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    power: number;
  }

  const avangers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Rober Downy Jr.',
    vision: 'Paul Battany',
    activos: true,
    power: 1234,
  }
  const { activos, power } = avangers
  const printAven = ({ ironman, ...rest}:Avengers) => {
    console.log(ironman);
    console.log(rest);
  }

  // ------------------------
  const avengersArr: string[] = ['Cap. America', 'Spiderman', 'Hulk']
  // const ironman = avengersArr[1] // no se ve tan bonito como 👇🏼
  const [, , Hulk] = avengersArr // -> del arreglo estás cogiendo el último y los espacios tambien pueden ser _ y no afecta
  const [_, Spiderman] = avengersArr // -> los espacios tambien pueden ser _ y no afecta


})()