
// Asynchronous JavaScript 

// setTimeout(arg1, arg2);
// setTimeout(() => {}, ms);

// console.log('One');
// setTimeout(() => { console.log('Two'); }, 2000);
// console.log('Three');


const getMessage = () => {
    console.log('getMessage invoked.');
    setTimeout(() => {
        return { text: 'Have fun!' };
    }, 2000);
};

const message = getMessage();
console.log(message.text);





