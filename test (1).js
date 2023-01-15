// let numb = 0;

// while (numb < 10) {
//   console.log(numb);
//   numb = numb + 1;
// }

// // break continue
let x = {
  name: "Gideon",
  performance: { Phy: 100, Chem: 99, Math: 60 },
};

x.total = Object.values(x.performance).reduce((a, b) => a + b);
console.log(x);
console.log(Object.values(x.performance).reduce((a, b) => a + b));

let xx = [];
for (var i in x.performance) {
  xx.push(x.performance[i]);
}

console.log(xx);
console.log(Object.values(x.performance));

let yy = [1, 1, 4, 6, 9, 0];
let yy1 = ["dog", "ball", "cat", "apple"];

console.log(
  yy.sort((a, b) => {
    return b - a;
  })
);
