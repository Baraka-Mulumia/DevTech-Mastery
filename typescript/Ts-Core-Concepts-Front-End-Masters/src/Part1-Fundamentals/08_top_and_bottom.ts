//Top types - <T> is a type that describes any possibly value allowed by the system

//ANY
//you can think of any type as "playing by the usual JavaScript rules"
// any typed values provide no type safety

let flexible: any = 4;
flexible = "hello";
flexible = true;
flexible = { name: "John" };

//UNKNOWN
// unknown is a type-safe counterpart of any it can accept any value but it can't be used until it's been narrowed to a more specific type
// values with unknown type are not allowed to be used until you apply a type guard

let unknownValue: unknown = 4;
unknownValue = "hello";
unknownValue = true;

if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
} //OK

//  BOTTOM TYPES - <T> is a type that describes no possible value allowed by the system
//  NEVER - good for exhaustive conditionals

class Car1 {
  drive() {
    console.log("Driving...");
  }
}

class Truck1 {
  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle1 = Car1 | Truck1;

const v1: Vehicle1 = new Car1() || new Truck1();

// Type guard
function useVehicle(vehicle: Vehicle1) {
  if (vehicle instanceof Truck1) {
    vehicle.loadCargo(1000);
  } else if (vehicle instanceof Car1) {
    vehicle.drive();
  } else {
    const neitherVehicle: never = vehicle;
  }
}

// Unreachable code error
class UnreachableError extends Error {
  constructor(val: never, message: string) {
    super(`Unreachable code ${val} - ${message}`);
  }
}
