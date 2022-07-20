let arr = ["one", "two", 3, [2, 1, 0]];
console.log(arr[0]);

arr[1] = "quench";
console.log(arr[1], arr);
console.log(arr.length);

let newLength = arr.push("3", [4, 5], 4);
console.log(newLength);
console.log(arr);

let deletedE1 = arr.pop();
console.log(deletedE1);

let newLength2 = arr.unshift("new element");
console.log(newLength2);
console.log(arr);

let deletedVa1 = arr.shift();
console.log(deletedVa1);
console.log(arr);

let newArr = [1, 2, 3, 4, 5];
console.log(newArr);
let str = newArr.join();
console.log(str);

let newStr = newArr.join("-");
console.log(newStr);

newArr.reverse();
console.log(newArr);

let anotherArr = [3, 7, 1, 2, 5, 7, 123, 9];
console.log(anotherArr);
let sortedArr = anotherArr.sort((a, b) => {
  return a - b;
});
console.log(anotherArr);

let newArr2 = ["eqwe", "bewq", "aqwe", "dwqe", "cqew"];
console.log(newArr2);
let newArr2sorted = newArr2.sort();
console.log(newArr2sorted);

let newArr2sliced = newArr2.slice(0, 3);
console.log(newArr2sliced);
console.log(newArr2);

let spliced = newArr2.splice(2, 0, "kek", "kekw");
console.log(newArr2);

let spliced1 = newArr2.splice(3, 2);
console.log(newArr2);
