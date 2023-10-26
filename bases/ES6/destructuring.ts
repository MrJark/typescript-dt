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

})()