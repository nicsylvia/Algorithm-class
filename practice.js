const prompt = require("prompt-sync")();

const input =(x) =>{
    if (x === undefined){
        console.log("Please enter a value");
    }else{
       console.log(x*2);
    }
}
// input(6);

// Exercise
// Practicing for loop: printing out i am sorry 10 times
for (let i = 1; i <= 10; i++) {
    // console.log("I am sorry")  
}
// Acheiving even numbers from 20 to 200
for (let i = 20; i <= 200; i++) {
    if (i % 2 === 0) {
        // console.log(i)
    }
}
console.log("******************");
// Acheiving multiplication table of numbers.
const number = parseInt(prompt("Enter the multiplication table number you want: "));
for (let i = 1; i <= 12; i++) {
    let result = i * number;
    console.log(`${number} x ${i} = ${result}`);
}
console.log("**********************");
// Log to the console numbers divisible by 2 and 3
for (let i = 0; i < 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log(i);
    }
}

// For-in loop:
let student = {
    name: "Solomon",
    age: 22,
    car: true,
}
// console.log(student.name);
for (const i in student) {
    // console.log(i);
}

let  fruit = ['mango ','grape','orange']
for (let x in fruit ){
    // console.log(x);
}

for (const i in fruit) {
   let val = fruit[i];
//    console.log(`${i} is the key, while ${val} is the value`);
}

// For of
let car = ["Toyota", "Honda"]
for (const x of car) {
    // console.log(x);
}

// For each:
let num = [1,2,3,4,5,6,7]
num.forEach(e => {
   console.log(e - 2); 
});

let names = ["esther", "esther", "esther", "esther", "esther"]
names.forEach(x => {
    console.log(x.toUpperCase());
});
// Funtion:
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    return sum;
}
console.log(add(1,2,3));

function add1() {
    let total = [];
    for (let i = 0; i < arguments.length; i++) {
      total.push(arguments[i]);
    }
    console.log(total.reduce((a, b) => {return a + b}));
}
add1(2,4,6);

function name2() {
      let el = 0;
      for (let i = 0; i < arguments.length; i++) {
        el += arguments[i];
      }
      return el;
    }
console.log(name2(3, 7, 1));