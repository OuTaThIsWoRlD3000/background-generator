var _ = require('lodash');

console.log(_);
let array = [1,2,3,4,5,6,7,8,9,10]
console.log(_.without(array, 3))
const header = document.getElementById("dynamicHeader");
    document.getElementById("changeHeaderButton").addEventListener("click", () => {
        header.textContent = "A good Teacher"  
    });
    document.getElementById("changeheaderbuttonagain").addEventListener("click", () => {
        header.textContent = "ANDREI"  
    })