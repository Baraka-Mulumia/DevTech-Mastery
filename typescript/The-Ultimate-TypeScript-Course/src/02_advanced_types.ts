// Type aliases

type Employee = {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
};

let userJohn: Employee = {
  name: 'John',
  age: 25,
  id: 1,
  retire(date: Date) {
    console.log(`${this.name} retires on ${date}`);
  },
};

userJohn.retire(new Date());

// Union types

function kgToPounds(kg: number | string): number {
  if (typeof kg === 'string') {
    kg = parseFloat(kg);
  }
  return kg * 2.2;
}

kgToPounds(100);
kgToPounds('100kg');

// Intersection types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let TextBox: UIWidget = {
  drag() {
    console.log('Dragging');
  },
  resize() {
    console.log('Resizing');
  },
};

// Literal types

type Quantity = 100 | 200 | 300 | 400 | 500;

function getQuantity(q: Quantity) {
  console.log(q);
}

type Metric = 'kg' | 'lb' | 'oz';

// Nullable types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log('Hello');
  }
}

greet('John');
greet(null);

// Optional chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | undefined {
  return id === 1 ? { birthday: new Date() } : undefined;
}

let customer = getCustomer(1);

console.log(customer?.birthday);

// optional element access
let customers = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

customers?.[0]?.name;

let log: any = null;

// optional function call
log?.('a');

// Nullish coalescing

let speed: number | null | undefined = null;

let Ride = {
  speed: speed ?? 100,
};

// Type assertions
let phone = document.querySelector('.phone') as HTMLInputElement;
let value = phone.value;

let email = <HTMLInputElement>document.querySelector('.email');
let value2 = email.value;

// unknown type
function render(value: unknown) {
  if (typeof value === 'string') {
    console.log(value);
  } else if (typeof value === 'number') {
    console.log(value);
  } else if (value instanceof Document) {
    value.write('Hello');
  }
}

// never type
function processEvents(): never {
  while (true) {
    // do something
  }
}

// processEvents();
function reject(message: string): never {
  throw new Error(message);
}

reject('Something went wrong');
// console.log('Hello');
