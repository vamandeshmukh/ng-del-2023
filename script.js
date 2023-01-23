
// console.log('Hello world!');
// console.log(10 + 20);

// Java -
// int num = 10;

// JavaScript
// num = 10; // don't use this
// var num2 = 20; // don't use this
// const num3 = 30; // use this as default choice
// let num4 = 40; // use this for "variable" variables

// number, string, boolean 

// // Old JS 

// function fun() {
//     console.log('Hello world!');
// };

// fun();

// Modern JS 

// const fun = () => {
//     console.log('Hello world!');
// };

// fun();

const addGst = (amount) => {
    return amount + (amount * 0.18);
};

let finalBill = addGst(100);

console.log(finalBill);
















