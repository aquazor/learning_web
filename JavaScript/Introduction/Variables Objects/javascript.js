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

//OBJECTS
//namespace person {...};
const person = {
  name: { first: "Kek", second: "Chest" }, //sub-namespace
  age: 25,
  gender: "male",

  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name.first +
        " " +
        this.name.second +
        " is " +
        this.age +
        " years old. He likes" +
        " " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    alert("Hi, I'am " + this.name[0] + ".");
  },
};

person.bio();
console.log(person.age);
console.log(person.name.first + " " + person.name.second);

//setting new values
person.age = 40;
person.name.first = "Chest";
person.name.second = "Kek";
console.log(person.age);
console.log(person.name.first + " " + person.name.second);

//adding new value
person.bye = function () {
  alert("KEKBye");
};
person.bye();

let myHeight = "height";
let heightValue = "1.75m";
person[myHeight] = heightValue;
console.log(person.height);
console.log(person);
