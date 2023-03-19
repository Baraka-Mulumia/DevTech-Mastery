let value: Date | null | undefined | "pineapple" | [number] | { name: string };

// instance of
if (value instanceof Date) {
  console.log(value.toUTCString());
}

// typeof
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// specific value
if (value === "pineapple") {
  console.log(value);
}

//truthy | falsy
if (!value) {
  console.log(value);
}

//built-in type guard
if (Array.isArray(value)) {
  console.log(value[0]);
} else if (typeof value === "object" && value !== null) {
  //property presence check
  if ("name" in value) {
    console.log(value.name);
  }
}

// USER DEFINED TYPE GUARDS

//is
interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar = { make: "tesla" };

function isCarLike(valueToTest: any): valueToTest is CarLike {
  return (
    valueToTest &&
    typeof valueToTest === "object" &&
    "make" in valueToTest &&
    "model" in valueToTest &&
    "year" in valueToTest &&
    typeof valueToTest.make === "string" &&
    typeof valueToTest.model === "string" &&
    typeof valueToTest.year === "number"
  );
}

if (isCarLike(maybeCar)) {
  console.log(maybeCar.make);
} else {
  console.log("not a car");
}

//asserts
function assertIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (!isCarLike(valueToTest)) {
    throw new Error("Not a car");
  }
}

assertIsCarLike(maybeCar);
console.log(maybeCar.make);
