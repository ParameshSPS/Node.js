// Module

/*
const param = 'paramesh';
const hari = 'Hari Krishna';

const sayHi = (name) => {
    console.log(`Hello World ${name}`);
};

sayHi('ParameshSPS');
sayHi(param);
sayHi(hari);
*/


// CommonJS, every file is module (by default)
// Module - Encapsulated Code (only share miminum)

const names = require('./04. Names');
const sayHi = require('./05. Utils');
const data = require('./06. Alternative_Flavor');
require('./07. Mind_Grenade');

// console.log(names);
// console.log(data);

sayHi('ParameshSPS');
sayHi(names.param);
sayHi(names.hari);