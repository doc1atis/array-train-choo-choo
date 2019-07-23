console.log("# ARRAY CHALLENGES");

const numbers = [3, 24, 15, -1, 200, 13, -80, 14, 10000, -19];

console.log("### Challenge #1");

// Console out each number in the `numbers` array, individually.
numbers.forEach(function(num) {
  console.log(num);
});

console.log("### Challenge #2");

// Now do the same thing, but backwards.
let lastIndex = numbers.length - 1;
while (lastIndex >= 0) {
  console.log(numbers[lastIndex]);
  lastIndex--;
}

console.log("### Challenge #3");

// Console out each number plus 19, individually.
numbers.forEach(function(num) {
  console.log(num + 19);
});

console.log("### Challenge #4");

// Console out the sum of all the numbers.
let sum = 0;
numbers.forEach(function(num) {
  sum = sum + num;
});
console.log(sum);

console.log("### Challenge #5");

// Console out each number individually, but only if it's an even number.
numbers.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

console.log("### Challenge #6");

// Console out each number, but only if it ends with a 4 digit.

numbers.forEach(function(num) {
  let stringNum = String(num);
  let stringLength = stringNum.length;
  let lastIndex = stringLength - 1;
  if (stringNum[lastIndex] === "4") {
    console.log(num);
  }
});

console.log("### Challenge #7");

// Create a _new_ array and, using a loop, fill it with every number from the original array. Then console out the new array in one `console.log`.
let newArray = [];
numbers.forEach(function(num) {
  newArray.push(num);
});
console.log(newArray);

console.log("### Challenge #8");

// Create a _new_ array and, using a loop, fill it with every item from the original array, but in reverse order. Then console out the new array in one `console.log`.

let newArray2 = [];

numbers.forEach(function(num) {
  newArray2.unshift(num);
});

console.log(newArray2);

console.log("### Challenge #9");

// Create a _new_ array and, using a loop, fill it with every odd-numbered item from the original array. Then console out the new array in one `console.log`.

let newArray3 = [];
numbers.forEach(function(num) {
  if (num % 2 === 1 || num % 2 === -1) {
    newArray3.push(num);
  }
});
console.log(newArray3);

console.log("### Challenge #10");

// Create a _new_ array and, using a loop, fill it with every number from the original array plus 1. Then console out the new array in one `console.log`.

let newArray4 = [];
numbers.forEach(function(num) {
  newArray4.push(num + 1);
});
console.log(newArray4);
console.log("### Challenge #11");

// Create a _new_ array and, using a loop, fill it with every number from the original array, _followed by_, at the next index, the string, ' is one of the best numbers, objectively and obviously.' That is, the first item in the array should be the number 3, followed by the aforementioned string, followed by the number 24, followed by the string again.

let newArray5 = [];

numbers.forEach(function(num) {
  newArray5.push(
    String(num) + " is one of the best numbers, objectively and obviously."
  );
});

console.log(newArray5);
