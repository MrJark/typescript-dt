(() => {

  type Avengers = {
    name: string,
    weapon: string,
  }

  const ironman: Avengers = {
    name: "Ironman",
    weapon: "Armorsuit"
  }
  const capAmerica: Avengers = {
    name: "Cap. America",
    weapon: "Shield"
  }
  const hulk: Avengers = {
    name: "Hulk",
    weapon: "strength"
  }
  const avengers: Avengers[] = [ironman, hulk, capAmerica]

  for (const avenger of avengers ) {
    console.log(avenger.name ,avenger.weapon);
    
  }

})()