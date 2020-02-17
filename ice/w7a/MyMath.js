export function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
    result = a + b
  }
  return result;
}

export function AddList (arr) {
  let result = undefined;
  if(Array.isArray(arr) && arr.length > 0) {
    result = 0
    for(var elem of arr){
      if(typeof arr != "number") {
        result = undefined;
        break;
      }
      result = result + arr[i];
    }
  }
  return result;
}

export function DivideBy () {
  let result = undefined
  if (typeof a == "number" && typeof b == "number" && b != 0) {
    result = a / b
  }
  return result;
}

export function ContainsString () {
  let result = undefined
  if (z) {
    result = example
  }
  return result;
}

export function ReSortedNumbers () {
  let result = undefined
  if (z) {
    result = example
  }
  return result;
}

export function Adder () {
  let result = undefined
  if (z) {
    result = example
  }
  return result;
}
export { Sum, AddList };
