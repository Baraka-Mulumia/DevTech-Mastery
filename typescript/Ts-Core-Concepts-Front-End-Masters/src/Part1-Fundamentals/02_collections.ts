/**
 * Objects
 * what properties are available on an object
 * what are the types of those properties
 */

// 1. Object literal

let car: {
  make: string;
  model: string;
  year: number;
  //optional property
  chargeVoltage?: number;
};

car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  let str = `${car.make} ${car.model} ${car.year}`;

  //Type Guard
  if (typeof car.chargeVoltage !== "undefined") {
    str += ` ${car.chargeVoltage}`;
  }

  console.log(`Make: ${car.make}`);
}

//index signature

const phones = {
  home: { country: "USA", area: "123", number: "4567890" },
  work: { country: "USA", area: "123", number: "4567890" },
  mobile: { country: "USA", area: "123", number: "4567890" },
};

const phoneNumbers: {
  [key: string]: { country: string; area: string; number: string } | undefined;
} = {};

phoneNumbers.fax = { country: "USA", area: "123", number: "4567890" };

//2. Array types

const fileExtensions: string[] = ["jpg", "png", "gif"];

type Car = {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
};

const cars: Car[] = [{ make: "Toyota", model: "Corolla", year: 2020 }];

//3. Tuple types
type SpecialCar = [string, string, number];

const car2: SpecialCar = ["Toyota", "Corolla", 2020];
