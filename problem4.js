const problem4 = (inventory) => {
let cYea = [];
let i = inventory;
for(let a = 0; a < i.length; a++){
    cYea.push(i[a]['car_year']);
}
console.log(cYea);
}

module.exports = problem4;
