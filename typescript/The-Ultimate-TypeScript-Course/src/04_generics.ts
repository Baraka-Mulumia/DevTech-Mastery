// Generic  classes
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePair<number, string>(1, 'First');
let pair2 = new KeyValuePair('Second', new Date(Date.now()));

console.log(pair1.key);
console.log(pair1.value);

// Generic  functions
function wrapInArray<T>(input: T): T[] {
  return [input];
}

let array1 = wrapInArray(1);
let array2 = wrapInArray('Hello');

console.log(array1);
console.log(array2);

// as a class method
class ArrayUtilities {
  static wrapInArray<T>(input: T): T[] {
    return [input];
  }
}

let array3 = ArrayUtilities.wrapInArray(1);
let array4 = ArrayUtilities.wrapInArray('Hello');

console.log(array3);
console.log(array4);

// Generic  Interfaces
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetchData<T>(url: string): Result<T> {
  fetch(url);
  return {
    data: null,
    error: null,
  };
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

// let result = fetchData<User>('/users');
// fetchData<Product>('/products');

// Generic  Constraints
function echo<T>(input: T): T {
  return input;
}

function echoWithConstraints<T extends Product>(input: T): T {
  return input;
}

echoWithConstraints({
  id: 1,
  name: 'Product 1',
  price: 100,
});

class IUser {
  constructor(public name: string) {}
}

class ICustomer extends IUser {
  constructor(name: string, public address: string) {
    super(name);
  }
}

function echoWithConstraints2<T extends IUser>(input: T): T {
  return input;
}

echoWithConstraints2(new IUser('John'));
echoWithConstraints2(new ICustomer('John', '123 Main St'));

// Extending Generic  classes

class Store<T> {
  private _objects: T[] = [];

  add(object: T) {
    this._objects.push(object);
  }

  get(index: number) {
    return this._objects[index];
  }

  getAll() {
    return this._objects;
  }

  remove(index: number) {
    this._objects.splice(index, 1);
  }
  // The key of Operator
  findOne(property: keyof T, value: unknown): T | null | undefined {
    return this.getAll().find((item) => item[property] === value);
  }
}

let store = new Store<Product>();

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {
    console.log('Compressing...');
  }
}

let compressibleStore = new CompressibleStore<Product>();

// Restricting generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | null | undefined {
    return this.getAll().find((item) => item.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends SearchableStore<Product> {
  filterByPrice(price: number): Product[] {
    return this.getAll().filter((item) => item.price === price);
  }
}

let productStore = new ProductStore();

productStore.add({
  id: 1,
  name: 'Product 1',
  price: 100,
});

productStore.add({
  id: 2,
  name: 'Product 2',
  price: 200,
});

let a = productStore.findOne('name', 'Product 1');
console.log(a);

// Type Mapping

// Generic
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

let product: ReadOnly<Product> = {
  id: 1,
  name: 'Product 1',
  price: 100,
};

// product.id = 2; - Error
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
