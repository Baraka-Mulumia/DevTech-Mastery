// interfaces or type aliases that describe functions - something that can be called or constructed using the new keyword

//callable types

interface TwoNumberCalculation {
  (a: number, b: number): number;
}

type TwoNumberCalculation2 = (a: number, b: number) => number;

const sum: TwoNumberCalculation = (a, b) => a + b;

const subtract: TwoNumberCalculation = (a, b) => a - b;

// construct signatures - similar to callable types, but used with the new keyword

interface DateConstructor {
  new (year: number, month: number, day: number): Date;
}

let myDate: DateConstructor = Date;
const d = new myDate(2020, 1, 1);

// function overloads

type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler) {
  //...
}

function handleMainEvent2(elem: HTMLIFrameElement, handler: MessageHandler) {
  //...
}

const myForm = document.getElementsByTagName("form")[0];

const myFrame = document.getElementsByTagName("iframe")[0];

handleMainEvent(myForm, (data) => console.log(data));

handleMainEvent2(myFrame, (evt) => console.log(evt));

//this types
function myClickHandler(this: HTMLElement, evt: Event) {
  this.innerHTML = "Clicked";
}

myClickHandler.call(myForm, new Event("click"));
