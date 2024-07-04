let userName = 'Max';

// userName = 34;
userName = 'Yuki';

let userAge = 34;

let isValid = true;

let userID: string | number = 'abc';
userID = 123;

// let user: object;
// let user: {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   id: string | number;
// };

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

user = {
  name: 'Max',
  age: 34,
  isAdmin: true,
  id: 'abc' // or 123
};

// let hobbies: Array<string>;
let hobbies: string[];

hobbies = ['Cooking', 'Sports'];

function add(a: number, b: number) {
  const result = a + b;
  console.log(result)
  return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);

interface Credentials {
  password: string;
  email: string;
}
let creds: Credentials;
creds = {
  password: "abc",
  email: 'x@y.com'
};

type Admin = {
  permission: string[];
}

type AppUser = {
  userName: string;
}

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
  permission: ['login'],
  userName: 'Yuki'
}