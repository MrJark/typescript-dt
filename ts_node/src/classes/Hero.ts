import { powers } from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
    // public powers: [ // esto no era porque ya tenia el arreglo de powers en la data
    //   {
    //     id: 1,
    //     desc: 'Super'
    //   },
    //   {
    //     id: 2,
    //     desc: 'Super2'
    //   },
    // ]
  ){}

  get power(): string {
    return powers.find( power => power.id === this.powerId)?.description || 'not found'
  }
}

export class Her2 {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ){}
}
export default class Her3 {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ){}
}
export class Her4 {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ){}
}