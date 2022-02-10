// Node JS

//--------------------------------- Modules --------------------------------//

const message = require('./myscript');

console.log('line no 7');
console.log(message);
// #Good Evening My friend


//--------------------------------- Invisible Node Functions --------------------------------//

console.log('line no 14');
console.log(arguments);

console.log('line no 17');
console.log(require);

console.log('line no 20');
console.log(module);

console.log('line no 23');
console.log(__filename);
// #D:\Web Devlopment\JavaScript\Node JS\Node Basics\index.js

console.log('line no 27');
console.log(__dirname);
// #D:\Web Devlopment\JavaScript\Node JS\Node Basics


//--------------------------------- The Required Cache --------------------------------//

require('./myscript');

console.log('line no 36');
console.log(require.cache);


//----------------> Module Example 

const counterObject = require('./myscript');

console.log('line no 44');
console.log(counterObject.getCounter());
// 70

counterObject.incrementCounter();

console.log(counterObject.getCounter());
// 100


//---------------> Module Example 

const newCounter = require('./myscript');

console.log('line no 63');
console.log(newCounter.getCounter());
// 100


//--------------------------------- Debugging --------------------------------//

/*
1. node inspect .\index.js

commonds:

c = Continue execution until programm ends or next 'debugger' statement
n = run the next line of code
s = step in to a function
o = step out of the current function


2. node --inspect .\index.js -------> chrome://inspect

3. node --inspect-brk .\index.js  -------> chrome://inspect
*/