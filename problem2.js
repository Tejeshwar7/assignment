const problem2 = (inventory) =>{

let i = inventory
let lCar = i[i.length- 1];
console.log("Last car is a " + lCar['car_make'], lCar['car_model']);
}
module.exports = problem2;
