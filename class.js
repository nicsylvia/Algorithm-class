// class Build{
//     constructor(name){
//         this.name = name;
//     }
//     log(){
//         console.log(`display ${this.name}`);
//     }
// }
// let build = new Build("Sylvia");
// build.log();

// function addScore() {
//     const first = {name: "CodeLab", Color: "Yellow", score: 100}
// const second = {name: "Adenla", Color: "Red", score: 77}
// const third = {name: "Adanian", Color: "Green", score: 90}

// let el = []
// el.push(first, second, third);
// let sum = 0;
// el.forEach((element) => {
//     sum += element.score;
// })
// console.log(sum);
// let name22 = "Peter";
// name22 = "Bukky";

// }
// addScore()

// let newArr = [3, 4, 5]
// let newArr1 ={name: "CodeLab", Color: "Yellow", score: 100};
// let newArr2 =  {name: "Andenla", Color: "Red", score: 77};

// for (const i in newArr2) {
//     console.log(newArr2[i]);
// }


// Wednesday 21st September 2022.

class Person{
    constructor(name){
        this.name = name
    }
}
let person = new Person("Peter")

console.log(person);

class Reverse{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static doSum(){
        return this.x + this.y;
    }
}
let maths = new Reverse(2, 3)
// console.log(maths.doSum());

// Assignment*************
// class Point{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     calcDistance(a, b){
//         let dx = a.x - b.x;
//         let dy = a.y - b.y;
//         return dx - dy;
//     }
// }
// let pointDistance1 = new Point(22, 7);
// let pointDistance2 = new Point(10, 7);
// console.log(pointDistance1.calcDistance());
// console.log(pointDistance2.calcDistance());
// // ...........
class Point{
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    calcDistance(){
        let dx = x1+x2;
        let dy = x2+y2;
        return dx - dy;
    }
}
let pointDistance1 = new Point(22, 34, 56, 73);
// let pointDistance2 = new Point(10, 7);
console.log(pointDistance1.calcDistance());
// console.log(pointDistance2.calcDistance());


// Assignment ends here******************

class NewPoint{
    constructor(x){
        this.x = x;
    }
    getData(){
        return `ohhhhhhh, you just picked ${this.x}`
    }
}
class OnPoint extends NewPoint{
    constructor(x, y){
        super(x);
        this.y = y;
    }
}
let onpointer = new OnPoint("Peter", "Paul");
console.log(onpointer);