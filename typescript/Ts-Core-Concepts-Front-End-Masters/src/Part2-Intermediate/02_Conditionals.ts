// conditional types
class Grill {
  startGas(): void {}
  stopGas(): void {}
}

class Oven {
  setTemperature(): void {}
}

type CookingDevice<T> = T extends "grill" ? Grill : Oven;

let device: CookingDevice<"grill"> = new Grill();
let device2: CookingDevice<"oven"> = new Oven();

// infer keyword

class FruitStand {
  constructor(fruitNames: String[]) {}
}

type ConstructorArg<C> = C extends {
  new (arg: infer A, ...args: any[]): any;
}
  ? A
  : never;
