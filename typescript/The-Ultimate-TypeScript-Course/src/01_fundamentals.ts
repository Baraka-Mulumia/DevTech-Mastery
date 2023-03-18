let sales = 100_000_000;
let course: string = 'TypeScript';
let isPublished: boolean = true;
let level;

// ArrayS
let names: string[] = ['John', 'Jane', 'Mary'];
let ages: number[] = [10, 20, 30];
let mixed: (string | number)[] = ['John', 10, 'Jane', 20, 'Mary', 30];

// Tuples
let person: [string, number, boolean] = ['John', 25, true];
let employee: typeof person[] = [
  ['John', 25, true],
  ['Jane', 25, true],
  ['Mary', 25, true],
];

// Enums
const enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}
const enum Size {
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
}

let size: Size = Size.SMALL;
let role: Role = Role.ADMIN;

// Functions
function add(a: number, b: number): number {
  return a + b;
}

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 0.1;
  }
  return income * 0.2;
}

calculateTax(100_000, 2021);

function printOutput(value: any): void {
  console.log(value);
}

// Objects
let user: {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
} = {
  name: 'John',
  age: 25,
  id: 1,
  retire(date: Date) {
    console.log(`${this.name} retires on ${date}`);
  },
};

user.retire(new Date());
