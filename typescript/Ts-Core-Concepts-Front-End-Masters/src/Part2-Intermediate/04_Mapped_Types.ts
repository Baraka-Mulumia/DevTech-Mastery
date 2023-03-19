//re-cap index signature

type Fruit = {
  name: string;
  color: string;
  weight: number;
};

type Dict<T> = { [key: string]: T };

let fruitCatalog: Dict<Fruit> = {};

// special type of index signature - mapped type
type MyRecord = { [FruitKey in "apple" | "cherry"]: Fruit };

function printFruitCatalog(catalog: MyRecord) {
  catalog.apple;
  catalog.cherry;
  //   catalog.banana; // error
}

type MyRecord2<KeyType extends string, ValueType> = {
  [key in KeyType]: ValueType;
};
