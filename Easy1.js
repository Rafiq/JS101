// Sum or Product of Consecutive Numbers


// // Tip Calc
// let sync = require("readline-sync");
// let bill = sync.question(`How much is the bill?\n`);
// let tip = sync.question(`What is the tip percentage?\n`)

// function tipAndBillCalc(bill, tip) {
//   let tipTotal = Number(bill) * (Number(tip) / 100);
//   let totalBill = Number(bill) + Number(tip);
  
//   console.log(`The tip is $${tipTotal}.\n The total is $${totalBill}.`)
// }

// // console.log(tip);
// // console.log(bill);
// console.log(tipAndBillCalc(bill, tip));


// // // How Big is the Room
// let sync = require('readline-sync');
// let lengthInMeters = sync.question(`What is the length of the room in meters?\n`);
// // console.log(lengthInMeters);
// let widthInMeters = sync.question(`What is the width of the room in meters?\n`);
// // console.log(widthInMeters);
// let unitChoice = sync.question(`Would you like your answer in square meters or square feet?`);

// if (unitChoice === "square meters") {
//   console.log(roomAreaCal(lengthInMeters, widthInMeters));
// } else {
//   console.log(roomAreaCalFeet(lengthInMeters, widthInMeters));
// }

// function roomAreaCal(length, width) {
//   let area = length * width;
//   let areaSqFeet = area * 10.7639;
//   return `The area of the room is ${area} square meters (${areaSqFeet.toFixed(2)} square feet).`
// }

// function roomAreaCalFeet(length, width) {
//   let area = length * width;
//   let areaSqMeters = area;
//   return `The area of the room is ${area} square feet (${areaSqMeters.toFixed(2)} square meters).`
// }
// // I am pretty sure writing a function twice is bad code. :D

// // // Even Numbers

// // for (let i = 0; i < 101; i += 2) {
// //   console.log(i);
  
// // }
// Odd Numbers Further Exploration
// log all odd numbers to a different line
// user input of limits

// let sync = require("readline-sync");
// let upperLimit = sync.question(`Please enter a top range for your odd numbers.\n`);

// function oddNumbersMaker(upperLimit) {
//   let i = 1;
//   while (i <= upperLimit) {
//     console.log(i);
//     i += 2;
//   }
// }

// console.log(oddNumbersMaker(upperLimit));
// // // Odd Numbers

// // for (let i = 1; i < 100; i += 2) {
// //   console.log(i);
  
// // }

// // Is Odd?
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true


// function isOdd(val) {
//   return ((! isNaN(val) )&& (val % 2 === 1)) ? true : false;
// }