let myMessage;
myMessage = "Hello World";
console.log(myMessage);
myMessage = "Bye";
console.log(myMessage);
const myAge = 23;
let number = 123;
let anotherNumber = 123.32;
console.log(number * "qwe");
console.log(number * "2");
let str = "kek";
console.log(`Hello, ${str}`);
let quench = null;
let x;
console.log(quench);

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2);

let user = {
  name: "jack",
  [id1]: 1,
  [id2]: 2,
};

let userQuench = {
  name: "Alex",
  age: 30,
  isAuth: true,
  jobs: {
    first: "Quench",
    second: "Bench",
  },
};

let userName = "Alex";
let userAge = 30;
let isAuth = true;

console.log(userName);
console.log(userQuench.age);
console.log(userQuench["jobs"]);
