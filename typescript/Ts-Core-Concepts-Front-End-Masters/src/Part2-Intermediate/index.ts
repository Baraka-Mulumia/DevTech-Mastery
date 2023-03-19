class Fruit {
  name?: string;
  color?: string;
  mass?: number;

  static createBanana(): Fruit {
    return { name: "Banana", color: "Yellow", mass: 120 };
  }
}

//namespace
namespace Fruit {
  export function createFruit(): Fruit {
    return Fruit.createBanana(); // the class
  }
}

//interface
// interface Fruit {
//     name: string;
//     color: string;
//     mass: number;
// }

//one identifier can be used for multiple declarations
export { Fruit };
