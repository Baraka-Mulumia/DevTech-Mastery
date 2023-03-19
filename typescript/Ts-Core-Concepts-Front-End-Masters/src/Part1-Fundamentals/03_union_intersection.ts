// union types - [type1 | type2] - either type1 or type2
// intersection types - [type1 & type2] - both type1 and type2

export function flipCoin(): "heads" | "tails" {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function printValue(x: string | number) {
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  } else {
    console.log(x.toFixed(2));
  }
}

function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  if (flipCoin() === "heads") {
    return ["success", { name: "John", email: "john@gmail.com" }];
  } else {
    return ["error", new Error("Something went wrong")];
  }
}
const [first, second] = maybeGetUserInfo();

// Type Guards
if (second instanceof Error) {
  console.log(second.message);
} else {
  console.log(second.name, second.email);
}

//OR

const outcome = maybeGetUserInfo();

if (outcome[0] === "success") {
  console.log(outcome[1].name, outcome[1].email);
} else {
  console.log(outcome[1].message);
}

// intersection types

type HasSides = { numberOfSides: number };
type SidesHaveLength = { sideLength: number };

function logPerimeter(s: HasSides & SidesHaveLength) {
  console.log(s.numberOfSides * s.sideLength);
}

logPerimeter({ numberOfSides: 4, sideLength: 3 });

function makeWeek(): Date & { end: Date } {
  const start = new Date();
  const end = new Date();
  end.setDate(start.getDate() + 7);
  return Object.assign(start, { end });
}

const thisWeek = makeWeek();
console.log(thisWeek.toISOString());
console.log(thisWeek.end.toISOString());
