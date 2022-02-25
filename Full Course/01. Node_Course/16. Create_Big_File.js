const { writeFileSync } = require('fs');

for (let i = 1; i <= 100000; i++) {
    writeFileSync(
        './Content/Big.txt', `Hello Param ${i}\n`,
        { flag: 'a' }
    );
};