const prompt = require("prompt-sync")();

// function multiplication() {
//     const num = parseInt(prompt("Enter the Multiplication table number you want: "));
//     for (let i = 0; i <= 12; i++) {
//         let timetable = num * i;
//         console.log(`${num} x ${i} = ${timetable}`);
//     } 
// }
// multiplication()

// Assignment on console app about exercise tracker.
const day = prompt("Today is ").toUpperCase()
console.log("Hello, Good day. What's your name?");
const name = prompt("Hi my name is ").toUpperCase();
console.log(`Ohh Welcome ${name}. It's a pleasure to have you here.`);
console.log("                            ");
console.log("**************************");
console.log(`Alright so ${name}, how many minutes do you want to jog today being ${day}?`);
const duration = parseInt(prompt("Input your minutes here: Today i want to jog for  "))
console.log("                            ");
console.log("That's cool. Welldone.");
console.log("                            ");
console.log(`${name} today being ${day}, you have come to the end of your exercise and you jogged for ${duration}.`);
console.log("                            ");
console.log("Do you still want to continue?. Reply with a yes or no.");
const reply = prompt("Input your reply. (Yes/N0): ")

if (reply === "Yes" || reply === "yes") {
    console.log("                            ");
    console.log("**************************");
    const day = prompt("Today is ")
    console.log(`Welcome to another day...${day}`);
    console.log(`Alright so ${name}, how many minutes do you want to jog today being ${day}?`);
    const duration = parseInt(prompt("Input your minutes here: Today i want to jog for  "))
    console.log("                            ");
    console.log("That's cool. Welldone.");
    console.log("                            ");
    console.log(`${name}, today being ${day}, you have come to the end of your exercise and you jogged for ${duration} minutes.`);
    console.log("                            ");
    console.log("Do you still want to continue?. Reply with a yes or no.");
}   else if (reply === "No" || reply === "no") {
    console.log(`${name}, you have come to the end of your jogging session for the week.`);
    const total = duration.reduce((a, b) => {return a + b});
    console.log(`So for this week, you jogged a total of ${total} minutes`);
}   else {
        console.log(`${name}, you didn't jog this week, thank you and have a nice day.`);
}
