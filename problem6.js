const problem6 = (inventory) => {

let BMWAndAudi =[];
let i = inventory;

for(let a = 0; a < i.length; a++){
    let cMake = i[a]['car_make']
    if(cMake === "BMW" || cMake === "Audi"){
        BMWAndAudi.push(i[a]);
    }
}

console.log(JSON.stringify(BMWAndAudi));
}

module.exports = problem6;
