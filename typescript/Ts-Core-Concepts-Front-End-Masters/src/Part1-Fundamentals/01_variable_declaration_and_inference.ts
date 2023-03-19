// typescript variables are born with types and can be inferred
let age = 7;

/**
 * const variables literal types are and must match the type of the value
 * its a variable that can never point to another value and the thing it currently points to cannot be changed
 *  */
const userName = "John";

// userName = "Jane"; // error

// implicit any annotations b- sometimes you want to declare a variable without initializing it and let typescript infer the type

let myName; // implicit any

const RANDOM_WAIT_TIME = Math.round(Math.random() * 1000);

let startTimer = new Date();

//colon type syntax
let endTime: Date;

setTimeout(() => {
  //   endTime = 0; - error
  endTime = new Date();
}, RANDOM_WAIT_TIME);

//function arguments and return types

function add(a: number, b: number): number {
  return a + b;
}

// add("7", 8); // error
/**
 * Typing function is a great way for authors to state their intentions up front
 */
