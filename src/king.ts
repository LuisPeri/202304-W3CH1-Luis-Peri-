import { Character } from "./character.js";

export class King extends Character {
  rulingYears: number;

  constructor(name: string, house: string, age: number, rulingYears: number) {
    super(name, house, age);
    this.rulingYears = rulingYears;
    this.communicate = "You're all gonna die";
  }
}
