const glob = require('glob');
const path = require('path');

class main {
    constructor() {
        glob.sync('./algorithm/*.js').forEach(function (file) {
            const name = path.basename(file).split('.')[0];
            const current = require(path.resolve(file));

            console.time();
            console.log(`
==============================================================================
`);
            console.log(`Name: ${name}`);
            console.log(`Description: ${current.desc}`);
            console.log(current.result);
            console.timeEnd();
        });
    }
}

new main();
