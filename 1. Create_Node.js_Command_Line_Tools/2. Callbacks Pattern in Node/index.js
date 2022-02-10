#!/usr/bin/env node

// Callbacks Pattern in node JS

const fs = require('fs');

fs.readdir('.', (err, filenames) => {
    // Either
    // err === an error object, which means somthing went wrong
    // OR
    // err === null, which means everything is ok

    if (err) {
        // error handling code here
        console.log(err);
    }

    console.log(filenames);
});
// #[ 'Callbacks Pattern in Node', 'Node Basics' ]
// #[ 'emptyfolder', 'index.js', 'package-lock.json', 'package.json' ]


//--------------------- The Process.cwd Function -----------------------------//

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    }

    console.log(filenames);
});
// #[ 'Callbacks Pattern in Node', 'Node Basics' ]
// #[ 'emptyfolder', 'index.js', 'package-lock.json', 'package.json' ]