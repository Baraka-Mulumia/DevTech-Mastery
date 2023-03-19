//Question  - using interfaces and type aliases define a type that represents a valid JSON object

//Answer

type JSONObject = {
  [key: string]: JSONValue;
};

type JSONArray = JSONValue[];

type Primitive = string | number | boolean | null;

type JSONValue = Primitive | JSONObject | JSONArray;

function isJSON(value: JSONValue): boolean {
  return true;
}
