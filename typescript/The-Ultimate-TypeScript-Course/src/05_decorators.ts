// what are decorators? -- they are functions that can be used to modify the behavior of a class, method, property, or parameter

function Component(constructor: Function) {
  console.log('Component decorator called');
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.printUniqueId = function () {
    console.log(this.uniqueId);
  };
  constructor.prototype.insertIntoDOM = function () {
    console.log('Inserting into DOM');
  };
}

type ComponentOptions = {
  selector: string;
};

// parametrized decorator
function Component2(value: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now() + value.selector;
    constructor.prototype.printUniqueId = function () {
      console.log(this.uniqueId);
    };
    constructor.prototype.insertIntoDOM = function () {
      console.log('Inserting into DOM');
    };
  };
}

@Component2({ selector: '#profile' })
class ProfileComponent {
  constructor() {
    console.log('ProfileComponent constructor called');
  }
}

let profile = new ProfileComponent();

// Decorator Composition
function Pipe(constructor: Function) {
  console.log('Pipe decorator called');
  constructor.prototype.pipe = function () {
    console.log('Piping');
  };
}

@Component2({ selector: '#card' })
@Pipe
class CardComponent {
  constructor() {
    console.log('CardComponent constructor called');
  }
}

//Method Decorator
function Log(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value as Function;

  descriptor.value = function (...args: any) {
    console.log('Before method call');
    originalMethod.call(this, ...args);
    console.log('After method call');
  };
}

class Human {
  @Log
  says(message: string) {
    console.log(`Human says: ${message}`);
  }
}

let human = new Human();

// Property Decorator
human.says('Hello');

// Accessor Decorator
function Capitalize(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalGet = descriptor.get as Function;

  descriptor.get = function () {
    const result = originalGet.call(this);
    return typeof result === 'string' ? result.toUpperCase() : result;
  };

  return descriptor;
}

class FootBallPlayer {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return null;
  }
}

let player = new FootBallPlayer('John', 'Doe');
console.log(player.fullName);

// Property Decorator

function MinLength(length: number) {
  return (target: any, key: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(`${key} Min length is ${length}`);
        }
        value = newValue;
      },
    };

    Object.defineProperty(target, key, descriptor);
  };
}

class User {
  @MinLength(5)
  password: string;

  constructor(public username: string, password: string) {
    this.password = password;
  }

  login(pwd: string) {
    if (this.password === pwd) {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
}

let user13 = new User('John', '12345');
user13.login('12345');

let user27 = new User('John', '12343r3');

// Parameter Decorator

type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(_target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {
    console.log(`Moving at speed ${speed}`);
  }
}

let vehicle = new Vehicle();
vehicle.move(10);

console.log(watchedParameters);
