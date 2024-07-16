interface User {
  name: string;
  email: string;
  age: number;
  startTrail(): string;
  endNow(name: string, email: string): number;
}

const moody: User = {
  name: "Tobi",
  email: "tobi@t.com",
  age: 20,
  startTrail() {
    return "";
  },
  endNow(name, email) {
    let one = name.length;
    let two = email.length;
    return one + two;
  },
};

console.log(moody.endNow("oladele", "meeee"));

export {};
