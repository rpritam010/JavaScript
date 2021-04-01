'use strict';

/*
function calcAge(birthYear){
    const age = 2037 - birthYear;
    function printAge(){
        let output = `${firstName},you are ${age}, born in ${birthYear}`;
        console.log(output);

if(birthYear >= 1981 && birthYear <= 1996){
    var millenial = true;
    //creating new variable with same name as outer scopes variable
    const firstName = 'Raj';

    //Reassigning outer scoping
    const str = ` oh, and you're a millenial, ${firstName}`;
    console.log(str);

    function add(a,b){
        return a + b;
    }
    output = 'NEW OUTPUT!';
}

console.log(millenial);
console.log(output);

    }
    printAge();
    return age;
}

const firstName = 'Pritam';
calcAge(1995);
*/

/*
console.log(me);
//console.log(job);
//console.log(year);

var me = 'pritam';
let job ='Engineer';
const year = 1995;

//functions
console.log(addDecl(2,3));
//console.log(addExpr(2,3));
//console.log(addArrow(2,3));


function addDecl(a,b) {
    return a + b;
}


const addExpr = function(a,b) {
    return a + b;
};

var addArrow = (a,b) =>a + b;

//Example
if(!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;


console.log(x === window.x);
console.log(y === window.y);
console.log(z ===window.z);
*/

console.log(this);

const calcAge = function (birthYear){
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAgeArrow(1980);


const pritam = {
    year : 1995,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
    },
};
pritam.calcAge();

const matilda = {
    year:2017,
};
matilda.calcAge = pritam.calcAge;

matilda.calcAge();

const f = pritam.calcAge;