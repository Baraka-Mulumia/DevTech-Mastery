interface phoneListRecord {
  name: string;
  customerID: number;
}

interface phoneListItem {
  [k: string]: phoneListRecord;
}

const phoneList: phoneListRecord[] = [
  {
    name: "iPhone",
    customerID: 1,
  },
  {
    name: "Samsung",
    customerID: 2,
  },
  {
    name: "Nokia",
    customerID: 3,
  },
];

function listToDict(
  list: any[],
  idGen: (arg: any) => string
): { [k: string]: any } {
  const dict: { [k: string]: any } = {};
  list.forEach((item) => {
    dict[idGen(item)] = item;
  });
  return dict;
}

const phoneDict = listToDict(
  phoneList,
  (item) => `id-${item.customerID}-${Math.round(Date.now() / 1000)}`
);

console.log(phoneDict);

//Generics - what we need here is some mechanism of defining a relationship between the type of the thing we are passed, and the type of thing that we'll return. We can do this with generics.

//Define type parameter T

function listToDict2<T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } {
  const dict: { [k: string]: T } = {};
  list.forEach((item) => {
    dict[idGen(item)] = item;
  });
  return dict;
}

const phoneDict2 = listToDict2(
  phoneList,
  (item) => `${Math.round(Date.now() / 1000)}${item.customerID}${item.name}`
);

console.log(phoneDict2);
