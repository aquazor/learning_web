// let x = "my ";
// let y = " new";
// let z = " string";
// console.log(x + y + z);

// let a = 2;
// a++; //a--
// console.log(a);

// let q = 6;
// let w = "6";
// console.log(q == w);
// console.log(q === w); //сравнение типов
// console.log(q !== w);

// let hour = 9;
// if (hour <= 10 || hour >= 18) {
//   console.log("The office is closed");
// }

// let year = +prompt("When Javascript first appeared?");
// if (year == 1995) {
//   alert("YEP");
// } else if (1990 < year && year < 2000) {
//   alert("You were close");
// } else {
//   alert("NOPE");
// }

// let age = +prompt("How old are you?", "");
// let prefix;
// // if (age === 1) {
// //   prefix = "year";
// // } else {
// //   prefix = "years";
// // }
// prefix = age === 1 ? "year" : "years"; //prefix = (condition)  (?)  (variant : else variant)
// alert(`You are ${age} ${prefix} old`);

// //SWITCH

// let value = +prompt("2 + 2 = ?", "");
// switch (value) {
//   case 3:
//     alert("More");
//     break;
//   case 4:
//     alert("YEP");
//     break;
//   case 5:
//     alert("Less");
//     break;
//   default:
//     alert("kek");
// }

//CYCLES
//WHILE
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }

// while (true) {
//   let value = prompt("Enter a number", "");
//   if (value === null) {
//     break;
//   }
//   console.log(value);
// }

// //DO WHILE
// let k = 0;
// do {
//   console.log(k);
//   k++;
// } while (k < 3);

// //FOR
// for (let a = 0; a < 3; a++) {
//   console.log(a);
// }

for (let n = 0; n < 4; n++) {
  if (n === 2) {
    continue;
  }
  console.log(n);
}

let arr = ["Quench", "Bench", "French", "Cringe"];
for (let arrItem = 0; arrItem < arr.length; arrItem++) {
  console.log(arr[arrItem]);
}

let person = {
  firstName: "CTac",
  lastName: "Quencenko",
  age: "228",
};
for (let key in person) {
  console.log(person[key]);
}
