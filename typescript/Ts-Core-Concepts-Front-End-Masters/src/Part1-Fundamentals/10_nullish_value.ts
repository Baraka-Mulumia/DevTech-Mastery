/**
 * null - means there is a value, and that value is nothing.
 * undefined - means there is no value yet
 * void - means the return type of a function should not be used
 */

// non-null assertion operator

type GroceryCart = {
  fruits?: { name: string; quantity: number }[];
  vegetables?: { name: string; quantity: number }[];
};

const cart: GroceryCart = {};

cart.fruits!.push({ name: "apple", quantity: 2 });

//Definite Assignment Assertions

class Person {
  name!: string;
  age!: number;
}

const person = new Person();

person.name = "John";
person.age = 30;
