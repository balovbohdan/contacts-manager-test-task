const path = require('path');

module.exports = {
    process(src, filename, config, options) {
        const baseFilename = path.basename(filename);
        const exports = JSON.stringify(baseFilename);

        return `module.exports=${exports};`;
    }
};