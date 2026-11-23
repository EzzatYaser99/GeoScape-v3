const path = require('node:path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    target: 'node22',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
