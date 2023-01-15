// console.log("Index.js")

// function myJunction() {
//     console.log("Start");
// }
// myJunction();

// let myFunction = (x, y) =>{
//     console.log(x,y)
// }
// myFunction(2, 3)

// function sayName(x) {
//     console.log(`Hello, welcome back ${x}`)
// }
// sayName("Sylvia")

// function doMath(x) {
//     if (x === undefined) {
//         console.log("Please enter a value")
//     } else {
//        console.log(x * 2) 
//     }
// }
// doMath(0)

// function sumValue(a, b, c, d) {
//     console.log(a + b+ c + d)
// }
// sumValue(3, 2, 7, 6)

// function add() {
//     console.log(arguments.length)
// }
// add()
// add(3, 6, 2)

// function testing() {
//     let el = [];
//     for (let x = 0; x < arguments.length; x++) {
//         el.push(arguments[x]);
//     }
//     return el.reduce((a, b) =>{
//         return a + b;
//     });
// }
// console.log(testing(3, 2, 7, 6, 3))

// function reverse() {
//     let el = []

//     for (let i = 0; i < arguments.length; i++) {
//         el.push(arguments[i]);
//         el.reverse().join("");
//     }
//     return parseInt(el.join(""));
// }
// console.log(reverse(9, 5, 4));

// function inputHeight(height) {
//     if (height > 150) {
//         console.log("You are tall")
//     }else{
//         console.log("You are short");
//     }
// }
// inputHeight(190)

// function check() {
//     max = -Infinity;

//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }   
//     }
//     return max;
// }
// console.log(check(3, 1, 2, 9));

// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// readline.question("What's on your mind: ", (name) =>{
//     console.log(`Hmmmmmmm, really......so ${name} is what you have in mind`);
// });

const prompt = require("prompt-sync")();

// let name = prompt("What is your name: ");

// console.log("What a beautiful name: ", name)

function inputData() {
    let inputNumber = parseInt(prompt("Enter first number: "));
    let number2 = parseInt(prompt("Enter another number: "));

    let add = inputNumber + number2;
    console.log(add);
}
inputData()