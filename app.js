var a = 5;
var b = 10;


function addSum(hog, bacon) {
    console.log(hog + bacon);
}
addSum(a,b);

const addSum1 = (hog, bacon) => {
    console.log(hog + bacon);
}
addSum1(a,b);

function difference(param1, param2){
    console.log(param1 - param2);
}
difference(a,b);

const difference1 =(param1, param2) => {
    console.log(param1 - param2);
}
difference1(a,b);

function product(number1, number2){
    console.log(number1 * number2);
}
product(a,b);

const product1 = (number1, number2) => {
    console.log(number1 * number2);
}
product1(a,b);

function quotient(this1, this2){
    console.log(this1 / this2);
}
quotient(a,b);

const quotient1 =(this1, this2) => {
    console.log(this1 / this2);
}
quotient1(a,b);