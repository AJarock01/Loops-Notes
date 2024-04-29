// Fx. Hello World x 25

// Create a loop that runs 25x
//var i = 0; // control = variable when loop breaks

//  while (i < 25) {
// console.log(i);
//  console.log("Hello, World!");
//  i++; // increase i by 1. Known as the "incrementor"
// }

// All loops need 3 things
// 1. Control variable. e.g. var i = 0
// 2. Loop Condition. e.g. i < 25. Should ALWAYS start true, eventually become false. DO CHECK THIS!
// 3. Increment the control Variable, Otherwise INFINITE LOOP!

// Ex. 0 to 99
// let i = 0;
// while (i <= 99) {
//  console.log(i);
//  i++;
// }

// Ex. 99 to 0
// let i = 99;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// let userWord = ""; // Control Variable

// while (userWord != "STOP") {
//   userWord = prompt("type STOP to break the loop");
// }

// alert("Thanks for typing stop");

// Print all 000 numbers from 50 to 100 using a loop

// let i = 50;
// while (i <= 100) {
//   if (1 % 2 == 1) {
//     console.log(i);
//   }
//   i++;
// }

// let m = 51;
// while (m <= 100) {
//   console.log(m);
//   m += 2; // same as m - m + 2;
// }

// Q 10 0 to 4
// let i = 0;
// while (i <= 4) {
//   console.log(i);
//   i++;
// }

// Q 11 5 to 15
// let i = 5;
// while (i <= 15) {
//   console.log(i);
//   i++;
// }

// Q 12 0 to 10 even #'s only
// let s = 0;
// while (s <= 10) {
//   console.log(s);
//   s++ + s++;
// }

// Q 14 10 to 0
// let k = 10;
// while (k >= 0) {
//   console.log(k);
//   k--;
// }

// Q 13 5 to 15 odd #'s only
// let k = 5;
// while (k <= 15) {
//   console.log(k);
//   k++ + k++;
// }

// Q 15 10 to 0 skip 5
// let j = 10;
// while (j >= 0) {
//   // if the number, j, is NOT equal to 5, print the number.
//   if (j != 5) {
//     console.log(j);
//   }

//   j--;
// }

// ex Print -10 to +10
// let i = -10;
// do {
//   console.log(i);
//   i++; // same as i = i + 1
// } while (i <= 10);

// ex Type STOP
// let userWord;
// do {
//   userWord = prompt("Type STOP");
// } while (userWord != "STOP");

// Fix the infinite loop
// var num = -1;
// while (num < 0) {
//   num += 3;
// }

// Ex. Prompter. User selects numbers 4 and 10.
// User's 3rd # must fall between 4 and 10

// let min = +prompt("Enter MIN Value");
// let max = +prompt("Enter MAX Value");
// let userNum;

// do {
//   userNum = +prompt(`Enter a value between ${min} & ${max}`);
// } while (userNum < min || userNum > max);
// alert("Thank you!");

// ex. Breaks statement
// let num;
// while (true) {
//   num = +prompt("Enter a value between 1 & 10");
//   if (num >= 1 && num <= 10) {
//     break;
//   }
// }
// alert("Thanks!");

// ex 25 to 1, skip 18 and 7
// let counter = 25;
// while (counter >= 1) {
//   counter--;
//   if (counter == 18) {
//     continue; // Skips the rest of the statements
//   }
//   console.log(counter);
// }

// Ex. Average Calculator
// let numOfValues = 0;
// let sum = 0;
// let userNum;

// while (true) {
//   userNum = +prompt("Enter a value (0 to quit);");

//   if ((userNum = 0)) {
//     break;
//   }

//   // If code gets here, user has entered a good value
//   sum = sum + userNum;
//   numOfValues++; // tracks how many values user types
// }

// let average = sum / numOfValues;
// average = average.toFixed(1);

// alert(`The average is ${average}`);

// ex1.jpg 1.
// let y = 1;
// while (y <= 800) {
//   console.log(y);
//   y++;
// }

// ex1.jpg 2.
// let q = 20;
// while (q <= 500) {
//   console.log(q);
//   q++ + q++ + q++ + q++ + q++;
// }

// ex1.jpg 3.
let f = 100;
while ((f = 10)) {
  console.log(f);
  f++ + f++;
}
