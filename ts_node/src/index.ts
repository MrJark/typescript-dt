import { Hero } from "./classes/Hero";
// se pueden hacer alias en los imports 👇🏼
import { Hero as Patatas } from "./classes/Hero";
// también se pueden hacer importaciones por defecto 👇🏼
import Hero3 from "./classes/Hero";
// también se puede exportar todo y usar el inteligence 👇🏼
import * as TDOD from "./classes/Hero"

const ironman = new Hero('Ironman', 1, 55)
const ironman2 = new Patatas('Ironman', 1, 55)
const ironman3 = new TDOD.Her4('Ironman', 1, 55)

//_________________
