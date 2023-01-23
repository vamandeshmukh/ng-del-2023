
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

// const fun = () => console.log('Hello world!');

// fun();

// const addGst = (amount) => {
//     return amount + (amount * 0.18);
// };

// const addGst = amount => {
//     return amount + (amount * 0.18);
// };

// const addGst = amount => amount + (amount * 0.18);

// let finalBill = addGst(100);
// console.log(finalBill);



// const getFun = (param) => {
//     console.log(param.city);
// };

// const empData = {
//     eid: 101,
//     firstName: 'Sonu',
//     salary: 10.5,
//     city: 'Mumbai'
// };

// getFun(empData);

const fun2 = (param) => {
    console.log('fun2 invoked');
    param();
};

fun2(() => { console.log('anonymous function invoked'); });

const anotherFun = () => { console.log('anotherFun invoked') };
fun2(anotherFun);


// const printNum = (num) => { console.log(num); };

// printNum(10);

// let abc = 11;
// printNum(abc);









