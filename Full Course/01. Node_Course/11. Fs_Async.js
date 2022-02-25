const { readFile, writeFile } = require('fs');

console.log('Start');
readFile('./Content/First.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    // console.log(result);
    const first = result;
    readFile('./Content/Second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './Content/Result-Async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                // console.log(result);
                console.log('Done with this task');
            }
        );
    });
});

console.log('Starting next task');