#!/usr/bin/env node

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');

program
  .version('0.0.1')
  .argument('[filename]', 'Name of a file to excute')
  .action(args => {
    console.log(args);
  });

program.parse(process.argv);
// #node .\index.js -h

/*
const start = debounce(() => {
  console.log('Starting Users Program');
}, 100);

chokidar
  .watch('.')
  .on('add', start)
  .on('change', () => console.log('FILE CHANGED'))
  .on('unlink', () => console.log('FILE UNLIKED'));
*/