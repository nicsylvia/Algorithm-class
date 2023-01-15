let classData = [];

classData.push({
    name: "Peter",
    performance: {
        phy: 97, chem: 56, Math: 100
    },
});
classData.push({
    name: "Samuel",
    performance: {
        phy: 87, chem: 96, Math: 20
    },
});
classData.push({
    name: "Gideon",
    performance: {
        phy: 33, chem: 76, Math: 80
    },
});
classData.push({
    name: "Malush",
    performance: {
        phy: 37, chem: 40, Math: 90
    },
});
// Average class performance.
let classScore = [];
classData.forEach((value) => {
    classScore.push(Object.values(value.performance).reduce((a, b) => a + b))
});
console.log(
    "The average class Performance is: ", 
    classScore.reduce((a, b) => a + b) / classScore.length
);
// Best student:
let bestStudent = [];
classData.forEach((el) => {
    el.total = Object.values(el.performance).reduce((a, b) => a + b)
});
console.log(classData);

const sortedData = (x) => {
    return (a, b) => {
        if (a[x] < b[x]) {
            
        } else {
            
        }
    }
}