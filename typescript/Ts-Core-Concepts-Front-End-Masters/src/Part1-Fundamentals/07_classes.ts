class Tesla {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log("Vroom!");
  }

  honk() {
    console.log("Beep!");
  }

  getMake() {
    return this.make;
  }

  private getYear() {
    return this.year;
  }

  private unlockAllDoors() {
    console.log("Unlocking all doors");
  }
}
