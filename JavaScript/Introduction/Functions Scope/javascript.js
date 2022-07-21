count(1);
function count(n1 = 0, n2 = 0, n3 = 0) {
  let result = n1 + n2 + n3;
  console.log(result);
}

let count1 = function (x1 = 0, x2 = 0, x3 = 0) {
  let result1 = x1 + x2 + x3;
  console.log(result1);
};
count1(12, 3);

//Immediately-Invoked Function Expression
(function count2(y1 = 1, y2 = 2, y3 = 3) {
  let result2 = y1 + y2 + y3;
  console.log(result2);
})();

//SHORT SYNTAX
let sum = function (a, b) {
  if (!a || !b) {
    return;
  }
  return a + b;
};
console.log(sum(1, 3));

//ARROW FUNCTION
let sum1 = (k = 0, l = 0) => k * l;
console.log(sum1(15, 5));

let hwFunc = () => "Hellow, world!";
console.log(hwFunc());

let hwFunc1 = () => console.log("Hellow, world!");
hwFunc1();

let f = new Function("a2", "a3", "return a2 + a3");
console.log(f(1, 3));

//SCOPE
let name = "Ctac";
function showName() {
  let name = "Aptem";
  showRealName = "My name is " + name;
  console.log(showRealName);
}
showName();
console.log(name);
