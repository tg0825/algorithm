const glob = require('glob');
const path = require('path');

class main {
    constructor() {
        glob.sync('./algorithm/*.js').forEach(function (file) {
            const name = path.basename(file).split('.')[0];
            console.time('duration');
            console.log(`
==============================================================================
`);
            const current = require(path.resolve(file));
            console.log(`Name: ${name}`);
            console.log(`Description: ${current.desc}`);
            console.table(current.result);
            console.timeEnd('duration');
        });
    }
}

new main();