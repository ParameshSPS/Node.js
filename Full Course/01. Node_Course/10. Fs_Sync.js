const { readFileSync, writeFileSync } = require('fs');

console.log('Start');

const first = readFileSync('./Content/First.txt', 'utf8');
const second = readFileSync('./Content/Second.txt', 'utf8');

// console.log(first, second);

writeFileSync(
    './Content/Result-Sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
);

console.log('Done with this task');
console.log('Starting the next one');