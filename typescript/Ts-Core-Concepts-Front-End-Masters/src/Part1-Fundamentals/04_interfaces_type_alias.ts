import { flipCoin } from "./03_union_intersection";

//type alias
export type UserContactInfo = {
  email: string;
  name: string;
};

function sendEmail(user: UserContactInfo) {
  console.log(`Sending email to ${user.email}...`);
}

sendEmail({ email: "james@gmail.com", name: "James" });

type UserInfoOutcomeError = ["error", Error];
type UserInfoOutcomeSuccess = ["success", { name: string; email: string }];
type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess;

function maybeGetUserInfo(): UserInfoOutcome {
  if (flipCoin() === "heads") {
    return ["success", { name: "John", email: "john@gmail.com" }];
  } else {
    return ["error", new Error("Something went wrong")];
  }
}

const [first, second] = maybeGetUserInfo();

if (second instanceof Error) {
  console.log(second.message);
} else {
  console.log(second.name, second.email);
}

type SpecialDate = Date & { getReason(): string };

function makeSpecialDate(): SpecialDate {
  const date = new Date();
  const getReason = () => "It's my birthday!";
  return Object.assign(date, { getReason });
}

const specialDate = makeSpecialDate();
console.log(specialDate.getReason());

//interface
// an interface is a way of defining an object type in typescript (can be thought of as an instance of a class that could conceivably look like this)

interface UserInfo {
  name: string;
  email: string;
}

function printUserInfo(user: UserInfo) {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
}

interface Animal {
  isAlive(): boolean;
}

interface Dog extends Animal {
  bark(): void;
}

class Labrador implements Dog {
  bark() {
    console.log("Woof woof!");
  }
  isAlive() {
    return true;
  }
}

const lab = new Labrador();
lab.bark();
