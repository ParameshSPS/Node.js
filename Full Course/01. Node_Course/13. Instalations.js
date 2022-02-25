// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <PackageName>

// package.json - manifest file (stores imp info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// npm i lodash
// npm i bootstrap

// GitHub 
// push the project node_modules folder ignore
// Again pull the project 
// and install the node_modules use commond
// npm install

// npm i nodemon --save-dev
// -D or --save-dev

/*
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
},
*/

// npm uninstall <packageName>
// npm install

const _ = require('lodash');

const items = [1,[2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('Hello friends');