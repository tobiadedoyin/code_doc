type User = {
  readonly _id: string;
  name: string;
  age: number;
  isValid: boolean;
};

let userDetail: User = {
  _id: "ejrjfnjbtnt",
  name: "tobi",
  age: 34,
  isValid: true,
};

// userDetail._id="hrrkbkhbhbbvhvbhjvrvhrrtjbjj;"

console.log(">>>>>>>>>>>", userDetail);

function user(u: User): User {
  return { _id: u._id, name: u.name, age: u.age, isValid: u.isValid };
}

user(userDetail);
console.log(user(userDetail));

type cardNumber = {
  cardnumber: string;
};

type cardType = {
  cardtype: string;
};

type cardDetails = cardNumber &
  cardType & {
    cvv: number;
  };

const bookCard: cardDetails = {
  cardnumber: "",
  cardtype: "masters",
  cvv: 222,
};
