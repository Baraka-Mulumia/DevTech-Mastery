//what is oop?
// - oop is a programming paradigm that uses objects and their interactions to design and program applications and systems.

//what is a class?
// - a class is a blueprint for creating objects with pre-defined properties and methods.

//what is an object?
// - an object is an instance of a class.

//what is an interface?
// - an interface is a contract that defines the structure of an object.

//what is a constructor?
// - a constructor is a special method that is used to initialize objects.

//what is a property?
// - a property is a value associated with a key.

//what is a method?
// - a method is a function associated with an object.

//what is encapsulation?
// - encapsulation is the process of hiding the implementation details of a class from other objects.

//what is inheritance?
// - inheritance is the process of using details from a new class without modifying existing class.

//what is polymorphism?
// - polymorphism is the process of using a common interface for multiple form (data types).

//what is abstraction?
// - abstraction is the process of hiding the implementation details and showing only functionality to the user.

//what is a static method?
// - a static method is a method that can be called without creating an instance of a class.

//what is a static property?
// - a static property is a property that can be called without creating an instance of a class.

//what is a getter?
// - a getter is a method that gets the value of a property.

//what is a setter?
// - a setter is a method that sets the value of a property.

//what is a private property?
// - a private property is a property that can only be accessed within the class.

//what is a public property?
// - a public property is a property that can be accessed from anywhere.

//what is a protected property?
// - a protected property is a property that can be accessed within the class and by classes that inherit from that class.

//what is a readonly property?
// - a readonly property is a property whose value cannot be changed after it is assigned.

class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Amount must be greater than zero');
    }
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  //   set balance(value: number) {
  //     if (value <= 0) {
  //       throw new Error('Amount must be greater than zero');
  //     }
  //     this._balance = value;
  //   }
}

let account = new Account(1, 'John', 1000);
account.deposit(100);
console.log(account instanceof Account);

// Index Signature
class SeatAssignment {
  [seatNumber: string]: string;
}

let assignment: SeatAssignment = {};
assignment['34D'] = 'Bob';
assignment['34E'] = 'Jane';

// Static Properties and Methods
class UberRide {
  private static _activeRides = 0;

  start() {
    UberRide._activeRides++;
  }

  stop() {
    UberRide._activeRides--;
  }

  static get activeRides() {
    return UberRide._activeRides;
  }
}

let ride = new UberRide();
ride.start();
// ride.stop();

let ride2 = new UberRide();
ride2.start();
// ride2.stop();

console.log(UberRide.activeRides);

// Inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log(`${this.fullName} is walking`);
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  read() {
    console.log(`${this.fullName} is reading`);
  }

  takeTest() {
    console.log(`${this.fullName} is taking a test`);
  }

  // override
  override walk() {
    console.log(`${this.fullName} is walking slowly`);
  }
}

class Teacher extends Person {
  // override
  override get fullName(): string {
    return `Professor ${super.fullName}`;
  }

  teach() {
    console.log(`${this.fullName} is teaching`);
  }
}

let student = new Student(1, 'John', 'Doe');
student.walk();
student.read();

let teacher = new Teacher('Jane', 'Doe');
teacher.walk();
teacher.teach();

// Polymorphism

function printNames(person: Person[]) {
  for (let p of person) {
    console.log(p.fullName);
  }
}

let people: Person[] = [
  new Student(1, 'John', 'Doe'),
  new Teacher('Jane', 'Doe'),
];

printNames(people);

// protected properties
class Person2 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  protected defer() {
    console.log(`${this.fullName} has deferred `);
  }
}

let person2 = new Person2('John', 'Doe');

// Abstract Classes and Methods - cannot be instantiated

abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  override render(): void {
    console.log('rendering a circle');
  }
}

let circle = new Circle('red', 10);
circle.render();

// let shape = new Shape('red'); - cannot be instantiated

// Interfaces
// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

class MyCalender implements Calender {
  constructor(public name: string) {}

  addEvent(): void {
    console.log('add event');
  }

  removeEvent(): void {
    console.log('remove event');
  }
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}

  addEvent(): void {
    console.log('add event');
  }

  removeEvent(): void {
    console.log('remove event');
  }
}
