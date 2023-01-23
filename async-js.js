
// Asynchronous JavaScript 

// setTimeout(arg1, arg2);
// setTimeout(() => {}, ms);

// console.log('One');
// setTimeout(() => { console.log('Two'); }, 2000);
// console.log('Three');


// // problem of async JS 
// const getMessage = () => {
//     console.log('getMessage invoked.');
//     setTimeout(() => {
//         return { text: 'Have fun!' };
//     }, 2000);
// };

// const message = getMessage();
// console.log(message.text);

// solution 1: use callback  
const getMessage = (arg) => {
    console.log('getMessage invoked.');
    setTimeout(() => {
        arg({ text: 'Have fun!' });
    }, 2000);
};

// getMessage((abc) => { });
getMessage((abc) => {
    console.log('anonymous function invoked.');
    console.log(abc.text);
});








