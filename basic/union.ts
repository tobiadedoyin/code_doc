let myVar: number | string;

myVar = "34";

function getValue(value: number | string): number {
  let no: number;
  if (typeof value == "string") {
    return (no = Number(value.length));
  }
  no = +value;

  return Number(no);
}

console.log("*******", getValue("getting"));

const arr: Array<number | string> = [23, " tobi"];
let arr2: (string | number)[] = ["23", 88];

export {};
